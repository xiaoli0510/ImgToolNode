var images = require("images")
var fs = require("fs")
var path = "./img" //原图路径
var savepath = "./imgzip" //压缩图保存路径

function explorer(path) {
    fs.readdir(path, function (err, files) { //err 为错误 , files 文件名列表包含文件夹与文件
        if (err) {
            console.log('error:\n' + err);
            return;
        }

        files.forEach(function (file) {
            fs.stat(path + '/' + file, function (err, stat) {
                if (err) {
                    console.log(err);
                    return;
                }

                if (stat.isDirectory()) {
                    explorer(path + '/' + file); // 如果是文件夹就遍历

                } else {
                    //console.log('文件名:' + path.substring(9) + '/' + file);  // 读出所有的文件					
                    var name = path + '/' + file;
                    var dirName = savepath + path.substring(9);
                    var fileName = savepath + path.substring(9) + '/' + file;
                    fs.mkdir(dirName, {
                        recursive: true
                    }, (err) => { //创建文件夹
                        if (err) {
                            console.log('X 文件夹创建失败')
                        } else {
                            console.log('文件夹创建成功')
                            console.log(name,fileName)
                            images(name).save(fileName, {
                                quality: 60
                            }); //保存图片到文件,图片质量为60	
                        }
                    })

                }
            })
        })
    })
}
explorer(path);