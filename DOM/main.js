// // // // // // // // const bd = document.body;
// // // // // // // // document.write(bd.nodeType);
// // // // // // // // console.log(bd);// the hien kieu cua du lieu , 1,2 , 3, 4

// // // // // // // const h1 = document.getElementsByTagName('li').length;
// // // // // // // document.write(h1);
// // // // // // // console.log(h1);

// // // // // // const h1 = document.querySelector('.hero');
// // // // // // console.log(h1);

// // // // // const heroes = document.getElementsByClassName('hero');
// // // // // console.log(heroes);
// // // // // console.log(heroes[1].previousElementSibling);

// // // // const textNode = document.querySelector('#bats').firstChild;
// // // // document.write("<p style='color:red;font-weight:bold'>" + text.nodeValue + "</p>")

// // // const testNode = document.querySelector('#bats');
// // // testNode.setAttribute('class','mau-do');
// // // testNode.classList.add('mau-do','chu-to');
// // // testNode.classList.toggle('mau-do');


// // const flash = document.createElement('li');
// // const flashText = document.createTextNode('cu teo');
// // flash.appendChild(flashText);

// // const parent = document.getElementById('roster');
// // parent.appendChild(flash);

// document.body.addEventListener("click",doSomething);

// function doSomething() {
//     document.write("bam linh tinh gi the");
// }

document.body.addEventListener("click",toDo)
 
function toDo(event) {
    document.write(event.screenX + ":" + event.screenY);
}