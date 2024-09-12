// let str = "Hello    World!";
// for(let i = 1;i<=10;i++){
// console.log(str);
// }
// let a = str.length;
// console.log(a)
// console.log(str[0],str[9]);

//Template Literals
// let a = `she is your mom`;
// console.log(a);

// let obj={
//     item: "book",
//     cost: 40
// };

// let str =`The price of the ${obj.item} is ${obj.cost}ruppees`;
// console.log(str);
// console.log(typeof str);
// let str =`The sum of the num is ${2134234+4324}.`;
// console.log(str);

// let str = `hello\tworld`;
// let str2 = `My Job`;
// console.log(str);
// let a = str.length;
// console.log(str.length);
// console,log(str2)

// let num = 12;

//creation on username through name and length startu=ign with @
let user_name = prompt("Enter your name: ");
user_name = user_name.toLowerCase();
let a = user_name.length;
user_name = "@"+user_name;
 
let username =user_name.concat(a);

console.log(username);
