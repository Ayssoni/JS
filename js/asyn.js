// let a = 12;
// let b =12;
// console.log("C = " , a+b);
// console.log("Helo");
// setTimeout(()=>{
//     console.log(a%b);
// },4000);

// function add(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,add){
//     add(a,b);
// }
// calculator(1,2,(a,b)=>{
// console.log(a+b);
// });

// const hello=()=>{
// console.log("Helo");
// };
// setTimeout(hello,2000);

// function getdata(dataid,nextdata){
//     setTimeout(() => {
//         console.log("data" , dataid);
//         if(nextdata){
//             nextdata();
//         }
//     }, 3000);
// }
// //callback hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
//     });
// })

// let promise = new Promise((resolve, reject) => {
//     console.log("Hello World");
//     resolve("Good Morning");
//   })

// function getData(dataid, nextdata) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(`Data ${dataid}`);
//         resolve("Success");
//         if (nextdata) {
//           nextdata();
//         }
//       }, 3000);
//     });
//   }

// function getpromise(){
// return new Promise((resolve,reject)=>{
// console.log("It's promise");
// resolve("Success");
// });
// };

// let promise= getpromise();
// promise.then((res)=>{
//     console.log("won",res);     
// })
// async function hello(){
//     console.log("Hello World!");
// }

// async function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },4000)
//     })
// };

// async function givedata(){
//     await getdata(1);
//     await getdata(3);
// }

// (givedata)();//iife 

// const url = "https://cat-fact.herokuapp.com/facts";
// const para = document.querySelector("#para");
// const btn = document.querySelector("#btn");

//Api through async await
// const getfacts = async()=>{
// console.log("getting data!");
// let response = await fetch(url);
// console.log(response);
// let data = await response.json();
// para.innerText = data[0].text;
// }

//through promise chaining
// function getfacts(){
//     fetch(url)
//     .then((response)=>{
//     return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         para.innerText = data[2].text;
//     })
// }
// btn.addEventListener("click",getfacts);


