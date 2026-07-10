console.log("Welcome to Day 11");
const paragraph=document.querySelector(".text");
const heading = document.getElementById("title");
heading.innerHTML="Welcome to Full Stack";
heading.style.color="red";

heading.style.fontSize="45px";
console.log(heading);

const para = document.querySelector(".text")
para.style.color="blue";
const button = document.getElementById("btn");
button.addEventListener("click",()=>{
    heading.style.color="green";
    para.style.color="orange";
    button.style.backgroundColor="lightgray";
    button.style.color="black";


});
// button.addEventListener("click",function(){
//     alert("Button Clicked");
// });

//and not altering afterdouble click

button.addEventListener("mouseover",()=>{
    button.style.backgroundColor="black";
    button.style.color="white";
});
//returning to previous state on click return the paragraph and heading to their original state
button.addEventListener("dblclick",()=>{
    button.style.backgroundColor="lightgray";
    button.style.color="black";
    heading.style.color="red";
    para.style.color="blue";
});
const button2 = document.getElementById("btn2");
button2.addEventListener("click",()=>{
    heading.innerHTML="button 2 clicked";
    // alert("Button 2 Clicked");
});
//on double click return to previous page
button2.addEventListener("dblclick",()=>{
    // returm to previous state of heading and paragraph
        // heading = document.getElementById("title");
        heading.innerHTML="Welcome to Full Stack";
        heading.style.color="red";
        heading.style.fontSize="45px";

    
});    // button.addEventListener("click",function(){//     alert("Button Clicked");// });console.log(paragraph.textContent); 

const input = document.getElementById("username");
const output = document.getElementById("output");
const show = document.getElementById("show");
show.addEventListener("click",function(){

output.innerHTML=input.value;

});
const li=document.createElement("li");
li.innerHTML="Study JavaScript";
document.getElementById("list").appendChild(li);
li.remove();


input.addEventListener("keyup",function(){

console.log(input.value);

});

button.addEventListener("mouseover",function(){

button.style.background="red";

});