//class are the templete for creating class
// const Student = {
//    Name : "Ayan",
//    Rollno : 12,
//    id : 12473,
//    FatherName : "Radhey",
//    Marks : 87,
//    printmarks : function(){
//     console.log("Mark = ", this.Marks);  // this keyword arrows the same class object
//    }
// };

// const employee = {
//    tax(){
//       console.log("The Tax is 12%");
//    }
// }
// const karan = {
//    salary : 120000,
// };

// karan.__proto__ = employee;

// class car{
//    constructor(brand , color){         //constructor
//       this.brand = brand;
//       this.color = color;
//    }
//    color(){
//       console.log("Color is Aqua Blue");
//    }
//    silencer(){
//       console.log("Chiron");
//    }
//    setbrand(brand){
//       this.brand = brand;
//    }
// };

// let lexus = new car("lexus","blue");
// console.log(lexus);
// let swift = new car("swift","red");
// console.log(swift); 

// class parent{
//    hello(){
//       console.log("Hello World!");
//    }
// }
// class child extends parent{

// }
// let obj =new child(); 

// class person{
//    eat(){
//       console.log("eat");
//    }
//    sleep(){
//       console.log("sleep");
//    }
//    constructor(name){
//    this.species = "homosepians";
//    this.name = name;
//    }
//    work(){
//       console.log("Do Nothing")
//    }
// }
// class doctor extends person{
//    constructor(name){
//    super(name);
//    }
   
// work(){
//    super.eat();
//    console.log("Solve proble ms");

// }
// }
// let engobj = new doctor("Riya");
data = "This is my data";
class user{
   constructor(name,email){
      this.name = name ;
      this.emil = email;
   }
      viewdata(){
         console.log(data);
      }
}
// let user1 = new user("Ayan","ayan@`12234");

class admin extends user{
editdata(){
   data = "you can make ths data suitable";
   console.log(data);  
}
}

let admin1 = new admin("Ayan","Ayan@135");