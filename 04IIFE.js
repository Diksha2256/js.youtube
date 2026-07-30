//Immediately Invoked function Expression
//they stop global scope pollution
(function chai(){
    console.log("DB Connected");
})();     //named IIFE

( (name) => {
    console.log(`DB connected Two ${name}`);
})("diksha")     //unnamed and paraet IIFE
