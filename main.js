// write a Javascript function to check whether an 'Input ' is an array or not
    //toString chuyển đổi một số thành một chuỗi.
    //Hàm call() dùng để thực thi một hàm nào đó với các tham số truyền vào (nếu có), hàm này được tích hợp sẵn trong các đối tượng là function.
var isArray = function(Input) {
    if (toString.call(Input) === "[object Array]")
    {
        return true;
    }
    return false; 
}//end if
document.writeln(isArray('hello'));
document.writeln(isArray([1,2,3,4]));