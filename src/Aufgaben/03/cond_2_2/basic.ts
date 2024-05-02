let isOnline: boolean = Math.random() <= 0.5; 
let isPremiumUser: boolean = Math.random() <= 0.5; 
let isAdult: boolean = Math.random() <= 0.5; 

let monthlyFee : number

const messageIsOnline: string = isOnline ? "online" : "offline";
console.log(messageIsOnline);
console.log(isOnline);

const messageIsPremiumUser: number = isPremiumUser ? monthlyFee = 19.99 : monthlyFee = 12.99;
console.log(messageIsPremiumUser);
console.log(isPremiumUser);

const messageIsAdult = isAdult ? window.confirm ("Willkommen") : window.alert ("Keine Berechtigung");


console.log(isAdult);




