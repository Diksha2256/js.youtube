const myarray=[2,3,4,5,8];
console.log(myarray[0]);

const arr2=new Array(4,6,8,9);
console.log(arr2[2]);

//Array methods
arr2.push(8);
arr2.push(10);
arr2.pop();
arr2.unshift(4);  //add to start
console.log(arr2);
arr2.shift();
console.log(arr2);

const newarr=arr2.join;
console.log(newarr);
console.log(typeof newarr);
//slice,splice
console.log("A ",arr2);
const myn1=arr2.slice(1,3);
console.log("B",myn1);

const myn2=arr2.splice(2,3);
console.log("C",myn2);




