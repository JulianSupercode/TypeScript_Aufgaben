const johnHeight: number = 170; // John's height in cm
const johnAge: number = 22; // John's age in years

const meikeHeight: number = 168; // Meike's height in cm
const meikeAge: number = 34; // Meike's age in years

// Punkteberechnung
const calculatePoints = (height: number, age: number): number => {
    return age * 5 + height;
};

// John und Meike Punkte berechnen
const johnPoints: number = calculatePoints(johnHeight, johnAge);
const meikePoints: number = calculatePoints(meikeHeight, meikeAge);

console.log("John:");
console.log(`Höhe: ${johnHeight} cm`);
console.log(`Alter: ${johnAge} Jahre`);
console.log(`Punkte: ${johnPoints}`);

console.log("Meike:");
console.log(`Höhe: ${meikeHeight} cm`);
console.log(`Alter: ${meikeAge} Jahre`);
console.log(`Punkte: ${meikePoints}`);

// Gewinner bestimmen
if (johnPoints > meikePoints) {
    console.log(`John gewinnt mit ${johnPoints} Punkten.`);
} else if (meikePoints > johnPoints) {
    console.log(`Meike gewinnt mit ${meikePoints} Punkten.`);
} else {
    console.log(`Es ist ein Unentschieden mit ${johnPoints} Punkten.`);
}


