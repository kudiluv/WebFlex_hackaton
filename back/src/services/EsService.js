const { Client } = require('@elastic/elasticsearch')
const config = require('../config')
const client = new Client({ node: config.es})

module.exports = class EsServices {
    static async addDocument(text, id) {
        return await client.index({
            index: 'documents',
            body: {
                lectureId: id,
                text:text,
            }
        })
    }
    static async search(text, offset=0, size=15) {
        return await client.search({
            index: 'documents',
            size,
            from: offset,
            body: {
              query: {
                query_string: {
                    query: text
                }
              },
            }
          })
    }
}