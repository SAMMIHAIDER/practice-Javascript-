// css style help javascripts 
 
// three method are  used to styling css help javascripts


// 1>  Style();
  
//  using this method to get() and set()  styling helping javascript

//  get styling
// let element;
// element=document.querySelector("#header").style.border;
// console.log(element);

//set styling

// let element;
// document.querySelector("#header").style.backgroundColor="tan"; //styling background color
// document.querySelector("#header").style.color="blue";    //styling only color
// element=document.querySelector("#header");
// console.log(element);


// 2>  className
  //  using this method to get() and set()  css className helping javascript
// let element;
// element=document.querySelector("#header").className=("abc weerr");  // add multipule class name using javascripts and its returne value in string
// console.log(element);


// 3>  classlist
//some method of classList
// 1> add
// 2> remove

// let element;
// document.querySelector("#header").classList=("abc cds");   // add multipule class using javascripts and its returne  value in array
// element=document.querySelector("#header").classList;
// console.log(element);

// 3>  classlist
//some method of classList
 // 1> add
// document.querySelector("#header").classList.add=("abc cds qwee wer rty yuu ");   // this method add new class using javascripts and its returne  value in array
// element=document.querySelector("#header").classList;
// console.log(element);


// 3>  classlist
//some method of classList
// 2> remove
// document.querySelector("#header").classList.remove("xyz");   // this method remove  class using javascripts and its returne  value in array
// element=document.querySelector("#header").classList;
// console.log(element);



// addEventListener

// let element;
// element=document.getElementById("header").addEventListener('mouseenter',abc);
// function abc(){
//   document.getElementById("header").style.color="blue";
// }
 // creating a function using addEventListener in javascripts
// element=
// document.getElementById("header").addEventListener('click',function(){
//   document.getElementById("header").style.backgroundColor="red";
// });
// console.log(element);

// 3>  classlist
//some method of classList
// 3> toggle 
 
// let element ;

// document.getElementById("header").addEventListener("click",togle);
// function togle(){
//   document.getElementById("header").classList.toggle("xyz");
//  let a = document.getElementById("header").classList;
//  console.log(a);
// }

// 3>  classlist
//some method of classList
// 3> length
//  let event;

//  document.getElementById("header").addEventListener("mouseenter",leng);

//  function leng(){
//  let a = document.getElementById("header").classList.length ;
//  console.log(a);
//  }

 // 3>  classlist
//some method of classList
// 3> item
// let event;

// document.getElementById("header").addEventListener("mouseenter",item);

// function item(){
// let a = document.getElementById("header").classList.item(1) ;
// console.log(a);
// }

 // 3>  classlist
//some method of classList
// 6> contain

 let event;
 document.getElementById("header").addEventListener("mouseenter",item);
function item(){
let a = document.getElementById("header").classList.contains("abc") ;
console.log(a);
}