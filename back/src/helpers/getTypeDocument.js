const path = require("path")

module.exports = (file) => {
    const extension = path.extname(file);
    console.log(extension);
    switch (extension) {
        case '.mp4':
            return 'video'
        case '.docx':
        case '.doc':
            return 'word'
        default:
            return;
    }
}