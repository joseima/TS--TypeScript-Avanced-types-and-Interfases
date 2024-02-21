const prices: (number | string) [] = [1,2,3, 'as'];


let user : [string, number]; // tupla, limitating array content
user =  ['Name', 15];

const[username, age] = user; //destructuring

console.log(user, username, age);