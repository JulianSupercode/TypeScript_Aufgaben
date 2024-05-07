let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

function sortAlphabetically (a:string, b:string) {
    return a.localeCompare(b);
}

console.log(languages.sort(sortAlphabetically));


let europeanCountries: string [] = ["France", "Germany", "Sweden", "Czech"]; 
console.log(europeanCountries);
console.log(europeanCountries.sort(sortAlphabetically));