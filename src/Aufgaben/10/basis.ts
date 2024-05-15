// ==Aufgabe 1_4==

// const luckyNumbers5:Number  = Math.min(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488);

// // console.log(luckyNumbers5);

// const luckyNumbers5:Number  = Math.max(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488);

// console.log(luckyNumbers5);


// ==Aufgabe 2_1==

// function roundTo (Zahl:number, Genauigkeit:number):number  {

//     return parseFloat(Zahl.toFixed(Genauigkeit));

// }

// console.log(roundTo(3.1415926535, 3));

// ==Aufgabe 3_1==

// type Apple = {
//     color: string;
//     size: string;
//     isSweet:boolean;
//   };
  
//   let redApple: Apple = { color: 'red', size: 'big', isSweet:true };
//   let greenApple: Apple = { color: 'green', size: 'small', isSweet:false };
//   let yellowApple: Apple = { color: 'yellow', size: 'big', isSweet:true };
  
//   let apples: Apple[] = [redApple, greenApple, yellowApple,];

// for (let index = 0; index < apples.length; index++) {
    
//     console.log(apples[index].size);
// }

// apples.forEach(apple => {console.log(apple.color);});

// console.log(apples.length);

// let pinkApple:Apple ={color:"pink", size:"small",isSweet:true};

// apples.push (pinkApple)
// console.log(apples.length);

// ==Aufgabe 1_4==



// type Pet = {
//     tiertyp: string;
//     namen: string[];
//   };
  
//   let unsereHaustiere: Pet[] = [
//     {
//       tiertyp: 'Katze',
//       namen: ['Gipsy', 'Nala', 'Dinky']
//     },
//     {
//       tiertyp: 'Hunde',
//       namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
//     }
//   ];

// console.log(unsereHaustiere[0].namen[1]);
// console.log(unsereHaustiere[1].namen[1]);
// console.log(unsereHaustiere[1].namen);


// unsereHaustiere[1].namen[2] = "Snoppy"
// unsereHaustiere[0].namen[2] = "Pinky"

// const Hamster:Pet = {

//     tiertyp: "Hamster",
//     namen: ["Lio","Leo","lili"]

// }

// unsereHaustiere.push(Hamster)
// console.log(unsereHaustiere[2].namen);

//  ==Aufgabe 1_5==

// type Lager = {
//     schreibtisch: {
//         schublade: string;
//     };
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: string;
//             Ordner2: string;
//         };
//         "Untere Schublade": string;
//     };
// };

// let unserLager: Lager = {
//     schreibtisch: {
//         schublade: "Hefter"
//     },
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: "Dokumente",
//             Ordner2: "Geheimnisse"
//         },
//         "Untere Schublade": "Cola"
//     }
// };

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade);

// ==Aufgabe 1.6==

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

  console.log(meineTopVier[0].kunstler);
  console.log(meineTopVier[1].formate[3]);
  console.log(meineTopVier[1].gold);
  console.log(meineTopVier[2].release_jahr +" "+ "und"+" "+ + meineTopVier[3].release_jahr);
  console.log(meineTopVier[3].formate[2]);
  console.log(meineTopVier[3].title.slice(17,21));


//   const bestMusic:Musik = {
//     kunstler: "KingsofLeon",
//     title:"Sex is on fire",
//     release_jahr: 1999,
//     formate: ["CD","Download"],
//     gold:true
//   }

//   meineTopVier.push(bestMusic)
//   console.log(meineTopVier[4]);