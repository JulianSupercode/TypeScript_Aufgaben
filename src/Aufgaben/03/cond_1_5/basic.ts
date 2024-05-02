let weekDayAsNumber:number = Number (window.prompt("Please insert Number between 1 and 7"));
let weekDayAsString 

switch (true) {
    case weekDayAsNumber === 1:
        weekDayAsString = "Montag";
        break;
    case weekDayAsNumber === 2:
        weekDayAsString = "Dienstag";
        break;
    case weekDayAsNumber === 3:
        weekDayAsString = "Mittwoch";
        break;
    case weekDayAsNumber === 4:
        weekDayAsString = "Donnerstag";
        break;
    case weekDayAsNumber === 5:
        weekDayAsString = "Freitag";
        break;
    case weekDayAsNumber === 6:
        weekDayAsString = "Samstag";
        break;
    case weekDayAsNumber === 7:
        weekDayAsString = "Sonntag";
        break;
    default:
        console.log("Weekday must be a number between 1 and 7!");
        break;
}

console.log(weekDayAsString);

// switch (weekDayAsNumber) {
//     case 1:
//         weekDayAsString = "Monday";

//         break;
//     case 2:
//         weekDayAsString = "Dienstag";
//         break;
//     case 3:
//         weekDayAsString = "Mittwoch";
//         break;
    
//     default:
//         weekDayAsString = "Weekday must be a number between 1 and 7!";
//         break;
// }

// console.log(weekDayAsString);

