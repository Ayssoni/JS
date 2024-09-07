// let arr = ["Arhu","Rahul","Nayal","Biden"];
// console.log(Studentname);
// arr[3] = "Binod";
// console.log(arr);
// for(let i = 0; i<=3;i++){
//     console.log(arr[i]);
// }
// let i =0;
// while(i <=3){
// console.log(arr[i]);
// i++;
// }

//use the legth of the array to print in iteration
// for(let idx = 0; idx<=arr.length;idx++){
//     console.log(arr[idx]);
// }

//for of loop
// for(let Std of arr){
//     console.log(Std);
// }

/*let marks = [85,97,44,37,76,60];
let sum = 0;

for(let idx =0 ; idx <= marks.length;idx++){
    sum = sum + marks[idx];
}*/
// let length = arr.length;
// for(let val of marks){
//     sum +=val;
// }
// console.log(sum);

// console.log(sum/marks.length);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm","Netflix"];
// console.log(companies);
// console.log(companies.shift());
// console.log(companies);
// companies.splice(2,1,"Ola");
// console.log(companies);
// companies.push("amazon");
// console.log(companies);

//FUNCTIONS
// function add(a, b){
//     let c = a+b;
//     return c;
// }

// let sum = add(2,3);
// console.log(sum);

//Arrow functions
//  const arrowmultiplication=(a,b)=>{
//      console.log(a*b);
// }

//count vowels inn the string
// function countvowel(str){
//     let count = 0;
//    for(let i =0;i < str.lenth;i++){
//     if(str[i]==="a" || str[i]==="e" || str[i] ==="i" || a[i] ==="o" || a[i] ==="u" )
//         count++;
//    }
//    console.log(count);
// }
/*function countvowels(str){
    let count =0;
    for(const val of str){
      if(val==="a" || val ==="e" || val ==="i" || val ==="o" || val==="u"){
       count++;
      }
    }
    console.log(count);

}*/
// function vowelscount(str){
//     let count = 0 ;
// for(let i =0 ; i<str.length;i++){

//     // console.log(str[i]);
//   if(str[i]==="a" || str[i]==="e" || str[i] === "i"|| str[i] ==="0" || str[i] ==="u"){
//   count++;
//   }
  
// }
// console.log(count);
// }

// let arr = [1,2,3,4];
// arr.forEach((val)=>{
// val = val**2;
// console.log(val);
// }
// let arr = [["aapple","banana"],["banan","apple"]];
// console.log(arr);

//index of the no whose value sum is equal to the target val
// function add(arr,target){
//   for(let i=0;i<arr.length;i++){
//       for(let j=i+1;j<arr.length;j++){
//           if(arr[i]+arr[j]===target){
//              console.log(`Indices: ${i} and ${j}`);
//           }
//       }
//   }
// }

//   let arr = [1,2,3,3];
//   let target = 6; 
//   add(arr,target);
  // if (result) {
  //         console.log(`Indices: ${result[0]}, ${result[1]}`);
  //     } else {
  //         console.log("No pair found");
  // }

  //palindrome 
//  function palindrome(str){
//   let j = str.length-1;
//   for(let i = 0; i<str.length/2 ;i++){
//     if(str[i] != str[j]){
//     return false;
//     }
//     j--;
//   }
//     return true;
//  }
  
//  let str = "121";
//  let str2 = "noon";
//  console.log(palindrome(str));

// function index(target,arr){
// let n = arr.length;
// let i = 0;
// let j = n-1;
// while(i<j){
//   if(arr[i]+arr[j]==target){
//     console.log(`the indices are ${i} and ${j}`);
//     return;
//   }else if(arr[i]+arr[j]>target){
//     j--;
//   }else{
//     i++;
//   }
  
// }


// }
// let A = [5,14,33,40,42];
// let target = 19;
// index(target,A);



// function sum(arr){
//   b = [];
//   let sum =0 ;
//   for(let i =0 ;i<arr.length;i++){
  
//     sum = arr[i] + sum;  
//     b[i] = sum;
//   }
 
//   console.log(b);
//   return;
// }

// arr = [1,2,3,4,5];
// sum(arr);

function factorial(n){
  if(n==0){
    return 2;
  }
  else {
    return n *factorial(n-1);
    
  }
}

let a = factorial(0);
console.log(a);
