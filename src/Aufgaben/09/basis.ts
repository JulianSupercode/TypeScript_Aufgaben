// ==Aufgabe 1_11==

// import { max } from "date-fns";

// function getHighestNumber(numbers:number []):number {

// let highest = 0

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers [index] > highest) {
 
//         highest = numbers [index];
//     }


    
// }

// return highest;

// }
  
// getHighestNumber([5,6,15,22])
// let highNumber = getHighestNumber ([5,6,15,22]) 
// console.log(highNumber);


// ==Aufgabe 1_11==

// function calculateSum (maxNumber:number):number {
//     let sum = 0

//     for (let index = 1; index <= maxNumber; index++) {
//         sum += index;
        
//     }
//         return sum;
//     }

//     console.log(calculateSum(15));

// ==Aufgabe 2_3==

// function getNumberOfVowels(string:string):number {
   
//     const vokale = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

   
//     let count = 0;

//     // Schleife, um jeden Buchstaben im übergebenen String zu durchgehen
//     for (let index = 0; index < string.length; index++) {
//         // Prüfen, ob der aktuelle Buchstabe ein Vokal ist
//         if (vokale.includes(string[index])) {
//             // Wenn ja, erhöhe die Zählervariable
//             count++;
//         }
//     }

//     // Gib die Anzahl der Vokale zurück
//     return count;
// }

// // Test der Funktion mit verschiedenen Strings
// console.log(getNumberOfVowels("Hello World")); // Ausgabe: 3 (e, o, o)
// console.log(getNumberOfVowels("Hallo Alte Schule"));


// ==Aufgabe 2_4==

// function addToFifty() {
//     let sum = 0;
//     let iteration = 0;

//     while (sum <= 50) {
//         const randomNumber = Math.floor(Math.random() * 10) + 1; // Zufallszahl zwischen 1 und 10 generieren
//         console.log(randomNumber); // Zufallszahl auf der Konsole ausgeben
//         sum += randomNumber; // Zufallszahl zur Summe hinzufügen
//         iteration++; // Anzahl der Iterationen erhöhen
//     }

//     console.log(`${sum} > 50. Stopping right here.`);
// }

// // Funktion aufrufen
// addToFifty();

function addToFifty(): void {
    let sum = 0;
    while (sum <= 50) {
        let randomNumber = Math.ceil(Math.random()*10);
        console.log('The random number is: ' + randomNumber);
        sum += randomNumber;
        console.log('and the sum is: ' + sum);
    }
}

addToFifty()
