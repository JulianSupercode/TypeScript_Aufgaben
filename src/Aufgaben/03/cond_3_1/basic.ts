const salesMonth = Math.ceil(Math.random()*12);
let salesMonth1

switch (salesMonth) {
    case 1 || 2 || 3:
        salesMonth1 = "Quartal 1";
        break;
    case 4 || 5 || 6:
        salesMonth1 = "Quartal 2";
        break;
    case 7 || 8|| 9:
        salesMonth1 = "Quartal 3";
        break;
    default:
        salesMonth1= "Quartal 4";
}

// console.log(salesMonth);


const totalSales = Math.floor(Math.random()* 9000) + 1000;

let totalSales1

switch (true){
    case totalSales >= 1000 && totalSales <= 2500:
     totalSales1 = "schlecht";
    break;
    case totalSales >= 2501 && totalSales <= 5000:
        totalSales1 = "mittelmäßig";
    break;
    case totalSales >= 5001 && totalSales <= 7500:
        totalSales1 = "hoch";
    break;
    default:
        totalSales1 = "unglaublich";

}

// console.log(totalSales1);
// console.log(totalSales);

console.log(`Im ${salesMonth1} war der Umsatz ${totalSales1}!`);
