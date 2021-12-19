const ffmpeg = require('ffmpeg');
const fluentFfmpeg = require('fluent-ffmpeg');
const models = global.sequelize.models;
const speach = require("@google-cloud/speech");
const fs = require('fs');
const EsService = require("../services/EsService")

module.exports = async () => {
    try {
        const videos = await models.Document.findAll({
            where: {
                ocr: false,
                type: 'video'
            },    
            limit: 100
        });
        videos.forEach(async video => {
            const audioNameMP3 = '/app/uploads/' 
                + video.path.split('/')[1].split('.')[0] 
                + '.mp3';
            const audioNameWaf = '/app/uploads/' 
            + video.path.split('/')[1].split('.')[0] 
            + '.waf';
            const videoInstance = await new ffmpeg('/app/' + video.path);
            await videoInstance.fnExtractSoundToMP3(audioNameMP3);

            let duration = 134;
            const audioFiles = []
            let startTime = 0
            for (let i = 0; i < Math.ceil(duration/59); i++) {
                let endTime;
                if (duration / 59 * i < 1) {
                    endTime = startTime + duration % 59
                } else {
                    endTime = 59
                }
                const fileName = audioNameWaf.split('.').join(`-${i}.`);
                audioFiles.push(fileName)
                await new Promise((resolve, reject) => {fluentFfmpeg(audioNameMP3)
                    .toFormat('wav')
                    .audioChannels(1)
                    .setStartTime(startTime)
                    .setDuration(endTime)
                    .audioFrequency(16000)
                    .save(fileName)
                    .on('end' ,() => resolve())
                })

                startTime = startTime + endTime;
            }
            let text = ""
            for (const name of audioFiles) {
                 text += " " + await getText(name);
                 fs.unlinkSync(name);
            }
            await EsService.addDocument(text, video.lectureId)
            await models.Document.update({
                        ocr: true
                    }, {
                        where: {
                            id: video.id,
                        }
                    });
            fs.unlinkSync(audioNameMP3);
        });
        
    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }

}

async function getText(audioNameWaf) {
    const client = new speach.SpeechClient();
    const file = fs.readFileSync(audioNameWaf);
            const audioBytes = file.toString('base64');

            const audio = {
                content: audioBytes
            }
            const config = {
                encoding: 'LINEAR16',
                languageCode: 'ru-RU'
            }
            const request = {
                audio,
                config
            }

            const [response] = await client.recognize(request);
            const text = response.results.map(result => 
                result.alternatives[0].transcript).join('\n');
            return text
}