/*const pi  =  3.14;
let r ;
r = 12;
let isfollow = false;

console.log(isfollow);
console.log(pi*r^2);

    let age = 13;
    let name = "Rony";
    console.log(age,name);

{
let age = 12;
let name = "yam";
console.log(name,age);
}
 */
// let x = BigInt(123443324);
// let y = Symbol("Ello");
/*let student = {    //Student is denoted as object which has multiple parameter
    Name : "Ayush",
    id :13,
    age : 19,
    ispass : true,
    cgpa : 6.44
};
console.log(student.name);*/
/*const product={
    Name : "Parker Jotter Standard CT Ball Pen(Black)",
    Rating : 3,
    Price : 270,
    Discount : "58%"
};*/
/*const PRofile = {
    User_Name : "KharadhaKhapra",
    Followers : 569000,
    Post : 195,
    Following : 4,
    isfollow : true
};
console.log(PRofile);*/

//We are going to use operators
// let a = 10 ;
// let b = 12;
// console.log("a = ", a , " & b = ", b);
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);

//we are going to use unary operator
// let a = 12;
// a++;
// console.log(a++);//post increment 
// console.log(a);
// console.log(--a)//pre decrement
// console.log(a);

//Assignment operator
// let a = 19;
// a -= 4;
// console.log(a);
// let b = 3;
// a **=  b;
// a %=b;

// console.log(a);

//Coparison operator
// let a=5;
// let b="5";
// console.log("a==b",a==b);
// console.log("a!=b",a==b);
// a %=b;
// console.log(a);

// b %=a;
// console.log(b);
// console.log("a==b",a==b);
// console.log(a===b);

//logical operator
// let a = 12;
// let b = 23;
// console.log(a<b && b<a);  false(logical And)
//console.log(a<b || b<a); true(logiacal OR)
// console.log(!(a<b));

//Conditional statement
// let age = 18;
// let mode = "pink";
// let color;
// let a=12;
// if(age >= 18){
//     console.log("Eligible");
// }
// if(age<18){
//     console.log("Not Eligible");
// }
// if(mode=="dark"){
//      color= "black";
// }

// if(mode=="light"){
//     color = "white";
// }
// console.log(color);
// if(age>=18){
//     console.log("Yes");
// }
// else{
//     console.log(No);
// }
// if(a%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }
// let mode = "pink";
// let color;
// if(mode=="Dark") {
// color = "Black";
// } else if(mode=="light") {
//     color = "White";
// } else if(mode == "blue") {
//     color="Night light";
// } 
// else if(mode == "pink"){
//     color = "Matt";
// }
// console.log(color); 
// let result= age>=18?"Adult":"Not Adult";//Ternary operator
// console.log(result);

// alert("!hello");                 //popup

//Question(Multiple of 5)
// let num = prompt("Enter a number");     //used for taking input and gives a popup on website and then gives the outupt as pr the statement
// console.log(num);
// if(num%5===0){
//     console.log("MUltiple of 0");
// }
// else{
// console.log("not");
// }

//Question(Student grade)
// let grade;
// let score = 69;
// if(score>=80){
//    grade = "A";;
// }else if(70<=score && score<=79){
//     grade = "B";
// }else if(60<=score && score<=69){
//     grade = "C";
// }else if(50<=score && score<=59){
//     grade = "D";
// }
// else{
//     grade = fail;
// }
// console.log(grade);

//Loops
// for(let i =0;i<10;i++){
//     console.log("Hello world!");
// }
// console.log("Loop has ended");

//sum of 1 to 10
// let sum = 0;
// for(let i=1;i<=10;i++){
//     sum = sum + i;
// }
// console.log("sum = ",sum);


//while loop
// let i =12;
// while(i<=20){
//     console.log("Hello world!");
//     i++;
// }

//Do while looop
// let i=12;
// do{
//     console.log("Hellop world");
//     i++;
// }while(i>=20);

//for of loop
let str ="HelloWorld";
let size = 0;
for(let val of str){
    console.log(val);
    size++;
}
console.log("size is ",size);

//for in loop
// let student = {
//     name : "Rahul",
//     age : 22,
//     cgpa :6.7,
//     roll_no : 44
// };
// for(let key in student){
//     console.log("key = ",key , ", Value = ",student[key]);
// }

//Create a game where you start with any random game num. ask the user to  keep  guessing the num until he user enter a correct value

/*let GameNum = 34;
let UserNum = prompt("Guess any number:");
while(UserNum!=GameNum){
    UserNum=prompt("Wrong, Guess another num ");
}
console.log("Congrats,You have guess the correct num.");*/

//print all the even number between 0 to 100

for(let i =0;i<=100;i++){
   if(i%2==0){
    console.log(i);
   }
}











