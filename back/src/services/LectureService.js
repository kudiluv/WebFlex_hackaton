const models = global.sequelize.models;

class LectureService {
    static async addLecture(lectureDescription, files=[]) {
        const lecture = await this.#addLecture(lectureDescription);
        const resultFiles = await this.#attachFiles(lecture, files)
        return {
            lecture,
            documents: resultFiles
        }
    }
    static async #addLecture(lecture) {
        const response = await models.Lecture.create({
            name: lecture.name
        }); 
        return response
    }
    static async #attachFiles(lecture, files=[]) {
        const result = [];
        for (const file of files) {
            const document = await models.Document.create({
                type: file.mimetype,
                lectureId: lecture.id,
                path: "uploads/" + file.filename
            })
           result.push(document)
        }
        return result;
    }
}

module.exports = LectureService;