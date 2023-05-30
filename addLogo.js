var fs = require("fs");
var images = require('images');
var path = require('path');
var watermarkImg = images('./logo.png');
var filePath = './img/';
var  savePath= './saveImg/'

fs.readdir(filePath, function (err, files) { //err 为错误 , files 文件名列表包含文件夹与文件
    if (err) {
        console.log('error:\n' + err);
        return;
    }

    files.forEach(function (file) {
        console.log(file)
        console.log(filePath + file)
        var sourceImg = images(filePath + file); // 源图片的文件夹
        var sWidth = sourceImg.width();
        var sHeight = sourceImg.height();
        var wmWidth = watermarkImg.width();
        var wmHeight = watermarkImg.height();
        fs.mkdir(savePath, {
            recursive: true
        }, (err) => { //创建文件夹
            if (err) {
                console.log('文件夹创建失败')
            } else {
                console.log('文件夹创建成功')
                images(sourceImg) // 设置绘制的坐标位置，右下角距离 40px
                    .draw(watermarkImg, sWidth - wmWidth - 40, sHeight - wmHeight - 40) // 保存格式会自动识别
                    .save(savePath + file);
            }
        })
    })
})