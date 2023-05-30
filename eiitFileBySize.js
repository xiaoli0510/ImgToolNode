var fs = require("fs");
var sizeOf = require('image-size');
var dimensions;
var filePath = './img';
 
// 同步读取
var data = fs.readFileSync('./css/index.css');
data=data.toString();
fs.readdir(filePath, function (err, files) {
    files.forEach(function (fileName, index) {
        console.log(fileName)
        dimensions = sizeOf('./img/' + fileName);
        data += '\n.class'+(index+1)+'{\n  width:' + dimensions.width + 'px;\n  height:' + dimensions.height + 'px;\n}';
    })
    fs.writeFile('./css/index.css', data, function (err) {
        if (err) {
            return console.error(err);
        }
    });
})
 