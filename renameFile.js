// 导入node文件系统模块(fs)
var fs = require("fs");
// 这里path是你要读取哪一个目录下的所有文件,如'./img'，此时img放在js的同一级目录
var filePath = './img';
var formatName = 'png';
editFileName(filePath, formatName); //将img里面的图片重新命名为1.png 2.png
 
/**
 * 
 * @param {*} path 文件夹路径 如'./img'
 * @param {*} format 
 */
function editFileName(path, format) {
    fs.readdir(path, function (err, files) {
         //files是名称数组，存的是文件夹里面所有的文件名字比如[xx.png]
        files.forEach(function (filename, index) {
            //运用正则表达式替换oldPath中不想要的部分
            var oldPath = path + '/' + filename,
                newPath = path + '/' + (index + 1 - 0) + '.' + format;
            // fs.rename(oldPath, newPath, callback) 
            fs.rename(oldPath, newPath, function (err) {
                if (!err) {
                    console.log(filename + '副本替换成功!')
                }
            })
        })
    })
}