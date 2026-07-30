function addtwonum(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
// const result=addtwonum(2,4);
// console.log(result);

// function loginusermessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return ;
//     }
//     return `${username} just logged in`
// }
// console.log(loginusermessage());
// console.log(loginusermessage("Diksha"));


function calculatecardprice(val1,val2,...num1){
     return num1;
}
console.log(calculatecardprice(23,90,25));


const user={
    username:"Diksha",
    price:256
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user);
handleobject({
    username:"sakshi",
    price:258
})

function handlearray(array){
    return array[0];
}
const array=[2,7,9,0];
console.log(handlearray(array));
console.log(handlearray([0,6,8,9]));