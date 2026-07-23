//const tinderuser=new Object(); //singleton
const tinderuser={};
tinderuser.id="123abc";
tinderuser.name="sakshi";
tinderuser.isLoggedIn=false;
console.log(tinderuser);

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
           firstname:"Diksha",
           lastname:"Jadhav" 
        }
    }
}
console.log(regularuser.fullname);
const obj1={1:"a" ,2:"r"}
const obj2={3:"b",4:"c"}
const obj3=Object.assign({},obj1,obj2);
//const obj3={...obj1,...obj2};
console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));



const course={
    name:"js in hindi",
    price:"999",
    courseinstructor:"diksha"
}
const {courseinstructor:instructor} = course
console.log(instructor);

//JSON-Javascript object notation
// {
//     "name" : "diksha",
//     "coursename":"Js in hindi",
//     "price":"free"
// }