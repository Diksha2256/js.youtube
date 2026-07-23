//singleton  :made from constructor
//object.create

//object literals
const mysym=Symbol("key1");
const Jsuser={
    name:"Diksha",
    age:19,
    [mysym]:"mykey1",
    location:"satara",
    email:"dikshaa2@gmail.com",
    isLoggedIn:false
}
// console.log(Jsuser.name);
// console.log(Jsuser["email"]);
// console.log(Jsuser[mysym]);  //we are not written square bracket then type is string
// console.log(typeof mysym);    //symbol
//change value
Jsuser.age="20";
//Object.freeze(Jsuser);    //changes are not accepted
Jsuser.name="sakshi";
console.log(Jsuser);
//add values
Jsuser.greeting=function(){
  console.log("hello JS user");  
}
Jsuser.greeting2=function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());