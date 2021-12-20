const cron = require('node-cron');
const ocrDocuments = require('./ocrDocuments');
const ocrVideos = require('./ocrVideos');

module.exports = () => {
    console.log('Cron has been started');
    cron.schedule('1 * * * * *', ocrDocuments)
    cron.schedule('5 * * * * *', ocrVideos)
}