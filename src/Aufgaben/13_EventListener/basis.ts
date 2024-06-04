// ==Aufgabe 1_9==

// import { formatRFC7231 } from "date-fns";

// document.addEventListener('DOMContentLoaded', () => {
//     const selectElement = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
//     const button = document.getElementById('button') as HTMLButtonElement;
  
//     button.addEventListener('click', (event) => {
//       event.preventDefault(); 
  
//       const selectedIndex = selectElement.selectedIndex;
  
//       if (selectedIndex !== -1) {
//         selectElement.options[selectedIndex].remove();
//       }
//     });
//   });
  

// ==Aufgabe 2_2==

// const form = document.getElementById("form1");
// const inputVorname = document.getElementById("vorname") as HTMLInputElement;
// const inputNachname = document.getElementById("nachname") as HTMLInputElement;
// const selectCountry = document.getElementById("land") as HTMLSelectElement;

// form?.addEventListener("submit",(event: Event) => {
// event.preventDefault();
// // console.log(inputVorname.value)
// // console.log(inputNachname.value)
// // console.log(selectCountry.value)

// type SimplePerson = {
//     vorname: string;
//     nachname: string;
//     land:string;
// }

// const person: SimplePerson = {
//     vorname: inputVorname.value,
//     nachname: inputNachname.value,
// land: selectCountry.value
// }

// console.log(person);})

// ==Aufgabe 2_4==

// const chooseColor = document.getElementById("farbeAuswahlen") as HTMLSelectElement;
// const MediumOrchid = document.getElementById("1");
// const MintCream = document.getElementById("2");
// const DodgerBlue = document.getElementById("3");
// const Goldenrod = document.getElementById("4");
// const Wheat = document.getElementById("5");
// const MediumTurquoise= document.getElementById("6");
// const Moccasin = document.getElementById("7");
// const FireBrick = document.getElementById("8");
// const LimeGreen = document.getElementById("9");
// const SlateGray = document.getElementById("10");

// const button = document.getElementById("button");
 


//     button?.addEventListener("click", (event: Event) => {
//       event.preventDefault(); // Verhindert die Standardformularübermittlung
//       const body:any = document.getElementById("body") as HTMLElement;
//       const selectedOption = chooseColor.options[chooseColor.selectedIndex];
//       const selectedColor = selectedOption.textContent?.trim().toLowerCase();
//     //   console.log("Selected color:", selectedColor); // Ausgabe zur Überprüfung
//       body.style.backgroundColor = selectedColor;
//     });

let selectColor = document.getElementById("farbeAuswahlen") as HTMLSelectElement;
let colorChangeBtn = document.getElementById("button");
let docBody:any = document.querySelector("body");
colorChangeBtn?.addEventListener("click", (event: Event) => {
    event.preventDefault();
    let removeSpaces = selectColor.value.replace(/ /g,"");
    docBody.style.backgroundColor = removeSpaces;
});

// function changeBGColorOnClick(){
//     //docBody.style.backgroundColor = `${selectColor.value}`;
//     // wenn "richtiger" value im html hinterlegt
//     let removeSpaces = selectColor.value.replace(/ /g,"");
//     docBody.style.backgroundColor = removeSpaces;
// };
