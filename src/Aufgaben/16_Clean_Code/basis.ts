const textEingabe = document.getElementById ("text") as HTMLInputElement;
const Buttons = document.getElementById("Buttons");
const buttonBigLetter = document.getElementById
("bigLetters");
const spaceBetween = document.getElementById("spaceBetween");
const vokale = document.getElementById("vokale");
const Output = document.getElementById("output") as HTMLDivElement;

buttonBigLetter?.addEventListener ("click", () => {
    let valueInput = textEingabe.value;
    let summeGroßbuchstabe = 0;
    for (let index = 0; index < valueInput.length; index++) {
        
        const buchstabe = valueInput[index];
        if (buchstabe >= "A" && buchstabe <= "Z") {
            summeGroßbuchstabe++;
        }
    }
Output.textContent = summeGroßbuchstabe.toString();    
}) 

spaceBetween?.addEventListener ("click", () => {
    let valueInput = textEingabe.value;
    
    let summeLeerzeichen = 0;
    for (let index = 0; index < valueInput.length; index++) {
        const leerzeichen = valueInput[index];
        if (leerzeichen === " " ) { 
            summeLeerzeichen++           
        }        
    }
Output.textContent = summeLeerzeichen.toString();
})

vokale?.addEventListener ("click", () => {
let valueInput = textEingabe.value;
let summeVokale =0;
for (let index = 0; index < valueInput.length; index++) {
    const vokale = "aeiouAEIOU";
    if (vokale.includes(valueInput[index])) {
        summeVokale++
    }
} 
Output.textContent = summeVokale.toString();
})


// function clickButton () {
//     
//     if (condition) {
        
//     } else {
        
//     }
// }
 
