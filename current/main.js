
// const myArray1= new Array();

// let myArray=['vuong','van','ve'];
// document.writeln(myArray);
// myArray.reverse();
// myArray.sort();
// let x=[32,7,2,13];
// let list = new Set();
// list.add(1);
// document.writeln(list);

// document.writeln(x.indexOf(2));


// const romanNum= new Map();
// romanNum.set(1,"I").set(2,"II");
// document.writeln("ket qua"+romanNum.get(3));
// // document.writeln(x);
// // x.sort();
// // document.writeln("chuoi ket qua la "+ x);

// // delete myArray[2];
// // document.writeln(myArray);
// // // document.write(myArray.pop());
// // document.writeln("<br>"+myArray.unshift("ut"));
// // myArray2=myArray.concat('kingofworld');
// // var str =myArray.join(" ");
// // var arr =myArray.slice(1,2);
// myArray.splice(2,0,"titi");
// document.writeln("<br>cho mang ket qua : "+ myArray);
const arr =[null,4,29,'teo',false,'ti'];
for(var i=0; i<=arr.length;i++) {
    document.write(arr[i] + " ");

}
for(let item of arr){
    document.writeln(arr+" ");
}