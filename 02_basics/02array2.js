const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allhero=marvel_heros.concat(dc_heros);
console.log(allhero);

//spread
const all_new_hero=[...marvel_heros,...dc_heros]
console.log(all_new_hero);

const another_array=[1,2,4,[5,8,9],8,[6,9,0,[5,9]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Diksha"));
console.log(Array.from("Diksha"));

let score1=400;
let score2=490;
let score3=455;
console.log(Array.of(score1,score2,score3));


