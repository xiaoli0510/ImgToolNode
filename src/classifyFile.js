var fs = require("fs");
var sizeOf = require('image-size');
var images = require("images")

var dimensions;
var filePath = './img';
var savePath = "./imgClassify" //压缩图保存路径

var fileSizeArr = [{
    width: 50,
    height: 50
},{
    width: 100,
    height: 100
}]


// 同步读取
fs.readdir(filePath, function (err, files) {
    files.forEach(function (file, index) {
        dimensions = sizeOf('./img/' + file);
        if (dimensions.width == fileSizeArr[0].width && dimensions.height == fileSizeArr[0].height) {
            var dirName = savePath + filePath.substring(9) + '/' + fileSizeArr[0].width + '_' + fileSizeArr[0].height;
            var name = filePath + '/' + file;
            var fileName = savePath + filePath.substring(9) + '/' + fileSizeArr[0].width + '_' + fileSizeArr[0].height + '/' + file;
        }else if (dimensions.width == fileSizeArr[1].width && dimensions.height == fileSizeArr[1].height) {
            var dirName = savePath + filePath.substring(9) + '/' + fileSizeArr[1].width + '_' + fileSizeArr[1].height;
            var name = filePath + '/' + file;
            var fileName = savePath + filePath.substring(9) + '/' + fileSizeArr[1].width + '_' + fileSizeArr[1].height + '/' + file;
        }
        if (dirName && name && fileName) {
            console.log(dirName, name, fileName)
            fs.mkdir(dirName, {
                recursive: true
            }, (err) => { //创建文件夹
                if (err) {
                    console.log('X 文件夹创建失败')
                } else {
                    images(name).save(fileName, {
                        quality: 60
                    }); //保存图片到文件,图片质量为60	
                }
            })
        }
    })
})