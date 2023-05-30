const XLSX = require("xlsx");
const fs = require('fs');
var sizeOf = require('image-size');
var dimensions;
var filePath = './img';
const data = [];
let index = 0;

// 同步读取
fs.readdir(filePath, function (err, files) {
  files.forEach(function (file, index) {
    dimensions = sizeOf('./img/' + file);
    data.push({
      id: index++,
      imgName: file,
      width: dimensions.width,
      height: dimensions.height
    })
  })
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "attendance");
  XLSX.write(workBook, {
    bookType: "xlsx",
    type: "buffer"
  });
  XLSX.write(workBook, {
    bookType: "xlsx",
    type: "binary"
  });
  XLSX.writeFile(workBook, "newExcel.xlsx");
})