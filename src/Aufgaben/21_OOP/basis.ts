// =Aufgabe 1_7=




// import InstanceChecker from "./instance-checker";
// import Unicorn from "./unicorn";


// console.log(InstanceChecker.isUnicorn (""));  


// const unicorn1 = new Unicorn 
// unicorn1.name = "Sara"
// unicorn1.colors = ["red","blue"];

// console.log (InstanceChecker.isUnicorn(unicorn1))



// ==Aufgabe 1_8==
// import Car from "./car"
// import ElectricCar from "./electric-car"
// import InstanceChecker from "./instance-checker"

// const car1 = new Car ()
// const car2 = new ElectricCar ()

// console.log(InstanceChecker.isCar (car1))
// console.log(InstanceChecker.isElectricCar (car1));
// console.log(InstanceChecker.isElectricCar (car2));


// ==Aufgabe 1_11==
// import Activity from "./activity";

// const Fussball = new Activity 
// Fussball.name = "Fussball"
// Fussball._difficulty = 5


// ==Aufgabe 2_6==

import { Beyonce, TaylorSwift , KingsofLeon, Sting} from "./interpreten";


const Beyonce1 = new Beyonce ("Beyonce");
const Taylor = new TaylorSwift ("Taylor Swift");
const Kings = new KingsofLeon ("Kings of Leon");
const Sting1 = new Sting ("Sting");
const Michael = ""

function letsSing (singer:any) {
    if (singer instanceof Beyonce)
     {return console.log (`👨🏻‍🦱 ${singer.name} sings ${singer.sing()} `)
        
    } else if (singer instanceof TaylorSwift) {return console.log (`👨🏻‍🦱 ${singer.name} sings ${singer.sing()} `)
        
    } else if (singer instanceof KingsofLeon) {return console.log (`👨🏻‍🦱 ${singer.name} sings ${singer.sing()} `)

    } else if (singer instanceof Sting) {return console.log (`👨🏻‍🦱 ${singer.name} sings ${singer.sing ()} `)
                
    } else {
        console.log("Unbekannter Interpret");
        return;
    }
}

letsSing(Beyonce1)
letsSing (Taylor)
letsSing (Kings)
letsSing (Sting1)
letsSing (Michael)









