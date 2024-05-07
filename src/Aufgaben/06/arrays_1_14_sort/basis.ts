const oldHollywoodActors :string [] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman","Doris Day"]; 

const actorsReference = oldHollywoodActors

oldHollywoodActors.push("Marylin Monroe")


const oldHollywoodActorsCopy = oldHollywoodActors.concat() ;
const oldHollywoodActorsCopy2 = oldHollywoodActors.slice() ;
const oldHollywoodActorsCopy3 =  [...oldHollywoodActors];

oldHollywoodActorsCopy [4] = "Brad Pitt";
oldHollywoodActorsCopy2 [2] = "Joaquin Phoenix";
oldHollywoodActorsCopy3.shift();

console.log(oldHollywoodActors);
console.log(oldHollywoodActorsCopy);
console.log(oldHollywoodActorsCopy2);
console.log(oldHollywoodActorsCopy3);

