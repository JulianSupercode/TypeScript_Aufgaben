let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

function sortAscending(a:number, b:number) {
    return a - b;
}

console.log(numArray1.sort(sortAscending));

function sortDescending(a:number, b:number) {
    return b - a;
}

console.log(numArray1.sort(sortDescending));

