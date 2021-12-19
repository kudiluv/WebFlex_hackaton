const path = require("path")

module.exports = (file) => {
    const extension = path.extname(file);
    switch (extension) {
        case '.mp4':
            return 'video'
        case '.docx':
            return 'word'
        default:
            return;
    }
}