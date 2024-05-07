

function reverse (a:string):string {
   let atoArray = a.split("")
atoArray.reverse();

let backString = atoArray.join("")

return backString
}



const sergioReverse = reverse ("Ella mag alle Bohnen");
console.log(sergioReverse);
