const oldPainters :string [] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"];

const newPainters :string [] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe",];

const femalePainters:string[] = oldPainters.slice(1,3).concat(newPainters.slice(2,4));

// ========concat=========

// const oldPainterscopy:string[] = oldPainters.slice();
// oldPainterscopy.splice(1,2);
// console.log(oldPainterscopy);

// const newPainterscopy:string[] = newPainters.slice();
// newPainterscopy.splice(2,2);
// console.log(newPainterscopy);

// const malePainters:string [] = oldPainterscopy.concat(newPainterscopy);
// console.log({malePainters});

// ========Spread=======

// const oldPainterscopy:string[] = oldPainters.slice();
// oldPainterscopy.splice(1,2);
// console.log(oldPainterscopy);

// const newPainterscopy:string[] = newPainters.slice();
// newPainterscopy.splice(2,2);
// console.log(newPainterscopy);

// const malePainters:string [] = [...oldPainterscopy,...newPainterscopy];

// console.log(malePainters);



// ====slice======

const malePainters1:string[] = oldPainters.slice (0,1);
const malePainters2:string[] = oldPainters.slice (3,5);
const malePainters3:string[] = newPainters.slice (0,2);

// const malePainters:string[] = malePainters1.concat(malePainters2).concat(malePainters3);

const malePainters:string[] = [...malePainters1, ...malePainters2,...malePainters3];


console.log(femalePainters);
console.log(malePainters);

