import {animatedScrollTo} from './es6-scroll-to.js';

//document.querySelector('.title').innerHTML = 'Great success!'
//document.querySelector('.text').innerHTML = 'Javascript is working!'

// $('document').ready(function(){
//     // your code
// });

// without jQuery (doesn't work in older IEs)
document.addEventListener('DOMContentLoaded', function(){
    // your code goes here
    console.log(document.querySelector(".textBox__linkButton--showInfo"));
    console.log("page loaded");
    console.log(document.getElementsByClassName("textBox__linkButton--showInfo"));

    var linkButtons = Array.prototype.slice.call(document.getElementsByClassName("textBox__linkButton--showInfo"));

linkButtons.forEach((linkButton, index)=>{

  linkButton.onclick=()=>{
    console.log("clicked");
    document.getElementsByClassName("tooltip")[index].classList.toggle("tooltip--show");
  };
});

    // document.getElementsByClassName("textBox__linkButton--showInfo")[0].onclick=function(){
    //     console.log("clicked");
    //     document.getElementsByClassName("tooltip")[0].classList.toggle("tooltip--show");
    // };
    //
    // document.getElementsByClassName("textBox__linkButton--showInfo")[1].onclick=function(){
    //     console.log("clicked");
    //     document.getElementsByClassName("tooltip")[1].classList.toggle("tooltip--show");
    // };
    //
    // document.getElementsByClassName("textBox__linkButton--showInfo")[2].onclick=function(){
    //     console.log("clicked");
    //     document.getElementsByClassName("tooltip")[2].classList.toggle("tooltip--show");
    // };

}, false);
animatedScrollTo(500);
