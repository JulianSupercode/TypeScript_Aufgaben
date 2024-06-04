//Aufgabe 1_1//

import { hoursToMinutes } from "date-fns";

// function intro1(): void {
//     console.log("Hello World")
// };


// const intro1 = () => {
//     console.log("Hello World");
// };
// intro1()

// const intro2 = ()=> console.log("HEllo");
// intro2()

//Aufgabe 1_2

// function sayHello() {
//     const hello = document.getElementById("sayHello")
// if (hello){hello.innerHTML = "Hallo";
// }
// }
// sayHello()

const sayHello = () => {
    const hello = document.getElementById("sayHello")
    if (hello){hello.innerHTML = "Hallo";
    }
}
sayHello()


// function summe() {
//       const sum = 15 + 15;
//       console.log(sum)
//         }
    
// summe()

//Aufgabe 1_2

// const summe1 = () => { 
//       console.log(19+15)
// }
// summe1()


// function alert() {
//     const sum = 2*2
//     window.alert(sum);
// }
// alert()

// const alert1 = ()=> {
//     window.alert(2*2)
// }
// alert1()

// function object(keys:object) {
//     console.log(keys);
// }
// const beispiel = {
//     name:"Julian",
//     age: 30,
//     city: "New York",
// }

// object(beispiel)


//Aufgabe 1_2 Function

// let person = {
//     vorname: 'Anton',
//     nachname: 'Fish',
//     alter: 34,
//     familienstand: 'ledig',
//     groesse: 1.78,
//     zeigeProfil: function () {
//          console.log(`${this.vorname} ${this.nachname} ist ${34} Jahre alt ${this.familienstand} und ${this.groesse} groß!`);
//      }
//  };
// person.zeigeProfil();
// // document.getElementById("person").innerHTML = person.profil();

// let person2 = {
//     vorname: 'Antonia',
//     nachname: 'Fish',
//     alter: 32,
//     familienstand: 'ledig',
//     groesse: 1.67,
//     zeigeProfil: () => {
//          console.log(`Antonia ist die Schwester von Anton`);
//      }
//  };
//  person2.zeigeProfil ()

//Aufgabe Functions 1_6


// Definition des Typs Monster mit den erforderlichen Eigenschaften
// type Monster = {
//     name: string;
//     type: string;
//     health: number;
//     strength: number;
//     speed: number;
//   }
  
//   // Funktion createMonster mit Default-Parametern für health, strength und speed
//   const createMonster = (
//     name: string, 
//     type: string, 
//     health: number = 100, 
//     strength: number = 50, 
//     speed: number = 25
//   ): Monster => {
//     return {
//       name,
//       type,
//       health,
//       strength,
//       speed
//     };
//   }
  
//   // Erstellung mehrerer Monster mit verschiedenen Parametern
//   const monster1 = createMonster("Goblin", "Earth");
//   const monster2 = createMonster("Dragon", "Fire", 200);
//   const monster3 = createMonster("Troll", "Mountain", 150, 75);
//   const monster4 = createMonster("Phoenix", "Air", 180, 60, 40);
  
//   // Ausgabe der erzeugten Monsterobjekte in der Konsole
//   console.log(monster1);
//   console.log(monster2);
//   console.log(monster3);
//   console.log(monster4);

//Aufgabe 1_6


  // Functions-TS-Level-2_2

  type NewCustomer = {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
  };
  
  function greetNewUser1(customer: NewCustomer): string {
    const { firstName, lastName, email, phone } = customer;
    if (email && phone) {
      return `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}`;
    } else if (email) {
      return `Hello ${firstName} ${lastName}. We will contact you via ${email}`;
    } else if (phone) {
      return `Hello ${firstName} ${lastName}. We will contact you via ${phone}`;
    } else {
      return `Hello ${firstName} ${lastName}. We will not contact you`;
    }
  }
  
  function greetNewUser2(firstName: string, lastName: string, email?: string, phone?: string): string {
    if (email && phone) {
      return `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}`;
    } else if (email) {
      return `Hello ${firstName} ${lastName}. We will contact you via ${email}`;
    } else if (phone) {
      return `Hello ${firstName} ${lastName}. We will contact you via ${phone}`;
    } else {
      return `Hello ${firstName} ${lastName}. We will not contact you`;
    }
  }
  
  
  document.getElementById('customerForm')!.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    
    const newCustomer: NewCustomer = {
      firstName,
      lastName,
      email: email || undefined,
      phone: phone || undefined
    };
  
    const greeting1 = greetNewUser1(newCustomer);
    const greeting2 = greetNewUser2(firstName, lastName, email || undefined, phone || undefined);
  
    console.log(greeting1);
  
    const greetingOutput = document.getElementById('greetingOutput')!;
    greetingOutput.textContent = greeting2;
  });
  