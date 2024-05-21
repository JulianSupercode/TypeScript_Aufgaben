// ==Tuple 1_1==

// const starWarsActor: [string,string] = ["Luke Skywalker", "Mark Hamill"];

// let starWarsActors: [string, string][] = [
//     ["Luke Skywalker", "Mark Hamill"],
//     ["Darth Vader", "James Earl Jones"],
//     ["Yoda", "Frank Oz"],
//     ["Han Solo", "Harrison Ford"],
//     ["Princess Leia", "Carrie Fisher"]
// ];

// // for (let actor of starWarsActors) {
// //     console.log(`${actor[1]} spielt ${actor[0]}`);
// // }

// // for (let i = 0; i < starWarsActors.length; i++) {
// //     let actor = starWarsActors[i];
// //     console.log(`${actor[1]} spielt ${actor[0]}`);
// }

// ==Tuple 2_1==

// let Employee : [number, string, string, number];

// let employees:[number, string, string, number][] = [
//     [1, "Pius", "Entwicklung", 70000],
//     [2, "Christian", "Marketing", 60000],
//     [3, "Anna", "Vertrieb", 45000],
//     [4, "Lisa", "HR", 55000],
//     [5, "Dion", "Support", 50000]
// ];

// // for (let employee of employees) {
// //     console.log(`ID: ${employee[0]}, Name: ${employee[1]}, Abteilung: ${employee[2]}, Jahresgehalt: ${employee[3]}`);
// // }

// for (let i = 0; i < employees.length; i++) {
//     let employee = employees[i];
//     console.log(`ID: ${employee[0]}, Name: ${employee[1]}, Abteilung: ${employee[2]}, Jahresgehalt: ${employee[3]}`);
// }

// ==Aufgabe Enum 1_1==

// enum Weekday {
// Monday,
// Tuesday,
// Wednesday,
// Thursday,
// Friday,
// Saturday,
// Sunday,
// }
// console.log("Wochentage:");
// console.log("Monday:", Weekday.Monday);
// console.log("Tuesday:", Weekday.Tuesday);
// console.log("Wednesday:", Weekday.Wednesday);
// console.log("Thursday:", Weekday.Thursday);
// console.log("Friday:", Weekday.Friday);
// console.log("Saturday:", Weekday.Saturday);
// console.log("Sunday:", Weekday.Sunday);

// enum Month {
// Januar,
// Februar,
// März,
// April,
// Mai,
// Juni,
// Juli,
// August,
// September,
// Oktober,
// November,
// Dezember,
// }

// console.log("Monate:");
// for (let month in Month) {
//     console.log(`${month}: ${Month[month]}`);
// }

// ==TS-1_2==

// enum PizzaSize {
//     Small,
//     Medium,
//     Large,
//     Familie,
// }

// enum PizzaIngredients {
// Cheese,
// Onion,
// Salami,
// Olives,
// }

// type Pizza = {
//     size:PizzaSize
//     ingredients:PizzaIngredients[] 
// }

// let pizza1: Pizza = {
//     size: PizzaSize.Small,
//     ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion]
// };

// let pizza2: Pizza = {
//     size: PizzaSize.Medium,
//     ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Olives]
// };

// let pizza3: Pizza = {
//     size: PizzaSize.Large,
//     ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Olives,]
// };

// let pizza4: Pizza = {
//     size: PizzaSize.Familie,
//     ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Onion,]
// };

// ==Aufgabe 2_1==

// enum HtmlError {
//     OK = 200,
//     Redirect = 300,
//     BadRequest = 400,
//     InternalServerError = 500
// }
// // Schreibe eine Funktion showHtmlError()
// function showHtmlError() {
//     // Generiere eine zufällige Zahl zwischen 1 und 5 (Math.random gibt eine Zahl zwischen 0 und 1)
//     let randomNumber = Math.floor(Math.random() * 5) + 1;

//     // Wähle den entsprechenden HTML-Error basierend auf der zufälligen Zahl
//     switch (randomNumber) {
//         case 1:
//         case 2:
//             console.log("HTML-Error: " + HtmlError[HtmlError.OK] );
//             break;
//         case 3:
//             console.log("HTML-Error: " + HtmlError[HtmlError.Redirect]);
//             break;
//         case 4:
//             console.log("HTML-Error: " + HtmlError[HtmlError.BadRequest]);
//             break;
//         case 5:
//             console.log("HTML-Error: " + HtmlError[HtmlError.InternalServerError]);
//             break;
//         default:
//             console.log("Unbekannter Fehlercode!");
//             break;
//     }
// }


// showHtmlError();

// ==Aufgabe 2_2==

// Definiere ein Enum ClothingColor mit den Farbnamen und den entsprechenden Hex-Werten
enum ClothingColor {
    Gelb = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blau = "#0000FF",
    Lila = "#800080",
    Grau = "#808080"
}

// Array mit allen Farben
let allColors: ClothingColor[] = [
    ClothingColor.Gelb,
    ClothingColor.Orange,
    ClothingColor.Pink,
    ClothingColor.Blau,
    ClothingColor.Lila,
    ClothingColor.Grau
];

// Schleife, um Buttons für jede Farbe zu erstellen
for (let color of allColors) {
  
    let button = document.createElement("button");
    
    
    button.style.backgroundColor = color;
    
       
   
    document.body.appendChild(button);
}

// ==Set 1_1==

// Erstelle ein Set starWarsCharacters mit Anfangswerten
let starWarsCharacters = new Set(["Luke Skywalker", "Darth Vader", "Obi Wan Kenobi"]);

// Lass dir den Inhalt des Sets auf der Konsole ausgeben
console.log("Star Wars Charaktere (vor dem Hinzufügen von Leia Organa):");
starWarsCharacters.forEach(character => console.log(character));

// Füge "Leia Organa" zum Set hinzu
starWarsCharacters.add("Leia Organa");

// Lass dir den Inhalt des Sets auf der Konsole ausgeben
console.log("Star Wars Charaktere (nach dem Hinzufügen von Leia Organa):");
starWarsCharacters.forEach(character => console.log(character));

// Versuche erneut "Leia Organa" zum Set hinzuzufügen
starWarsCharacters.add("Leia Organa");

// Lass dir den Inhalt des Sets auf der Konsole ausgeben
console.log("Star Wars Charaktere (nach dem erneuten Hinzufügen von Leia Organa):");
starWarsCharacters.forEach(character => console.log(character));