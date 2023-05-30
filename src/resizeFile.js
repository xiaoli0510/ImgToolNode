const fs = require('fs');

const sharp = require('sharp');



const inputFolder = './img/';
const outputFolder = './outputImg/';
const imageSize = [400, 400];
fs.readdir(inputFolder, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        console.log(file)
        sharp(inputFolder + file)
            .resize(imageSize[0], imageSize[1])
            .toFile(outputFolder + file, (err, info) => {
                if (err) {
                    console.log(err);
                };
                //console.log(info); 
                // {
                //     format: 'png',
                //     width: 400,
                //     height: 400,
                //     channels: 4,
                //     premultiplied: true,
                //     size: 9466
                // }
            });
    });
});