const fs = require('fs')
const path = require('path')

module.exports = {
    readdirRecursiveSync(directory) {
        const result = [];
        readdir(directory);
        return result;

        function readdir(current) {
            const files = fs.readdirSync(current);

            files.forEach(function(file) {
                const absViam = path.resolve(current, file);
                const stat = fs.statSync(absViam);
                if (stat.isFile()) result.push(absViam);
                if (stat.isDirectory()) readdir(absViam);
            });
        }
    },
}