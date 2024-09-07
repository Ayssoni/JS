// console.log("Helo");
// let Place = document.getElementById("heading");
// console.dir(Place);

// let Place = document.getElementsByClassName("heading");
// console.log(Place);
// console.dir(Place);

// let div = document.querySelector("div");
// console.dir(div);

// let para = document.querySelector(".para");
// console.dir(para);

// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText = h2.innerText + "from Apna College";

// let divs = document.querySelectorAll (".Box");
// // console.dir(divs);
// let idx = 1;
// for(let div of divs){
//     div.innerText = `the unique value is ${idx}`;   //for  multiple div we use thhe topic of loop 
//     idx++;
// }

// let newdiv = document.createElement("button");
// newdiv.innerText = "Java Script";
// console.log(newdiv);

// let div= document.querySelector("div");
// div.after  (newdiv);

// let newheading = document.createElement("Heading");
// newheading.innerHTML = "<i>JS</i>";
// console.log(newheading);

// let body = document.querySelector("body");
// body.before (newheading);

// let div = document.querySelector("div");
// div.remove();

// let button = document.createElement("button");
// button.innerText = "Click Me";
// button.style.color = "white";
// button.style.backgroundColor = "red";

// let body = document.querySelector("body");
// body.prepend(button);

// let para = document.querySelector("p"); 

// let btn1= document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("Btn is clicked");
//     let a = 24;
//     console.log(a);
 
// }

let div = document.querySelector("#mydiv");
console.dir(div);
div.onmouseover= (e) => {
    console.log(e);
    console.log(e.type);
    console.log("Mouse is Over");
};

let btn1= document.querySelector("#btn1");
btn1.addEventListener("click",() => {
    console.log("Hello!");

});
const handler2 = () => {
    console.log("Hello2!");
}; 

btn1.addEventListener("click",handler2);

btn1.addEventListener("click",() => {
    console.log("Hello3!");
});

btn1.removeEventListener("click", handler2);

//Backgroung Color Toggling(Changing From one state to another state)
let btn = document.querySelector("butt1");
let currmode = "light";
btn1.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
})
