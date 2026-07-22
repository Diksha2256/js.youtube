let mydate=new Date();
console.log(mydate);
console.log(typeof mydate);   //object
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let mycreateddate=new Date(2023,0,15,3,6);
console.log(mycreateddate.toLocaleString());
let mycdate=new Date("01-23-2026");
console.log(mycdate.toLocaleString());
//timestamp
let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(mycdate.getTime());
console.log(Math.floor(Date.now()/1000));   //convert to second 

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());   //day of week
console.log(newDate.getDate());   //day of month

// newDate.toLocalString('default',{
//     weekday:"long",
// })