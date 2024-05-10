// ==Aufgabe 1_2==

// const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

// const upperDrinks = drinks.map((drink: string) => {
//     return drink.toUpperCase();
// });

// console.log ({upperDrinks});

// drinks.map((drink:string) => console.log(`I Like ${drink}`));

// ==Aufgabe 1_4==

// let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

// const translateCelcius = fahrenheit.map((fahrenTemp: number) => { 
//     return Math.round((fahrenTemp - 32) / 1.8 )});

//     console.log(translateCelcius);

// ==Aufgabe 1_5==

// let checkNumber: number[] = [
//     18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
// ];

// let processedNumbers: number[] = checkNumber.map((num: number) => {
//     if (num % 3 === 0) {
//         return num + 100;
//     } else {
//         return num;
//     }
// });

// console.log(processedNumbers);

// ==Aufgabe 1_6==

// let album: string[] = [
//     "holidays.jpg",
//     "Restaurant.jpg",
//     "desktop",
//     "rooms.GIF",
//     "DOGATBEACH.jpg"
// ];

// let filenames: string[] = ["document.txt", "image.jpg", "music.mp3", "video", "presentation.pptx", "dog"];

// let modifiedFilenames: string[] = [];

// filenames.forEach((filename: string) => {
//     let dotIndex = filename.lastIndexOf('.');
//     if (dotIndex !== -1) { 
//         let nameWithoutExtension = filename.substring(0, dotIndex).toLowerCase();
//         modifiedFilenames.push(nameWithoutExtension);
//     } else { // 
//         modifiedFilenames.push("invalid");
//     }
// });

// console.log(modifiedFilenames);

// ==Aufgabe 1_7==

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎'];

let fruitJuice: string[] = fruits.map((fruit: string) => {
    return fruit + "🥤";
});

console.log(fruitJuice);
