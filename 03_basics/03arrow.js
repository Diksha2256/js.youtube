const user={
    username:"diksha",
    price:3453,
    welcomeMessage: function(){
      console.log(`${this.username},welcome to website`);  
    }
}
user.welcomeMessage();
 user.username="rahul"
user.welcomeMessage();

// function chai(){
//     console.log(this);   window is globally declared 
// }
// chai();
// const chai=function(){
//     console.log(this);
// }
// chai();

//arrow funtion gives empty set
const chai= () => {
    console.log(this);
}
chai();


// const addtwo=(num1,num2) =>{
//     return num1+num2;
// }

const addtwo=(num1,num2) =>  num1+num2;
console.log(addtwo(3,7));