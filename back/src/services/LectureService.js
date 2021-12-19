const getTypeDocument = require("../helpers/getTypeDocument");
const EsServices = require("./EsService");
const models = global.sequelize.models;

class LectureService {
    static async addLecture(lectureDescription, files=[], user) {
        const lecture = await this.#addLecture(lectureDescription, user);
        const resultFiles = await this.#attachFiles(lecture, files)
        return {
            lecture,
            documents: resultFiles
        }
    }
    static async #addLecture(lecture, user) {
        const response = await models.Lecture.create({
            userId: user.id,
            name: lecture.name
        });
        const lectureText = lecture.name; 
        await EsServices.addDocument(lectureText, response.id)
        return response
    }
    
    
    static async #attachFiles(lecture, files=[]) {
        const result = [];
        for (const file of files) {
            const document = await models.Document.create({
                type: getTypeDocument(file.filename),
                lectureId: lecture.id,
                path: "uploads/" + file.filename,
                ocr: false
            })
           result.push(document)
        }
        return result;
    }
}

module.exports = LectureService;