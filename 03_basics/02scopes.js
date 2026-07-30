let a=100;
if(true){
 let a=10;
const b=20;
var c=90;
console.log("Inner",a);
}
console.log(a);
// console.log(b);   do not get the value of b
console.log(c);


function one(){
    const username="diksha";
    function two(){
        const website="youtube"
        console.log(username);
    }
    two()
}
one();


//++++++++++interesting+++++++++
console.log(addone(5));
function addone(num){
    return num+1;
}

const addtwo=function(num){
    return num+2;
}
console.log(addtwo(5))