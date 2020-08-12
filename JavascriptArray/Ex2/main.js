//Hàm slice có chức năng trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm
//Cú pháp: array.slice(start, end)

//write ai js function to clone an array

var arrayClone = function(input) {
    return input.slice(0);
}//end if
document.writeln(arrayClone([1,2,3,4]));

document.writeln(arrayClone([1,2,[3,4]]));

