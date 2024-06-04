// import Circle from "./frontend/circle";
// import Rectangle from "./frontend/rectangle";

// const circle1 = new Circle ("Circle", "blue", 20, true)
// const circle2 = new Circle ("Circle", "red", 30, true)
// const circle3 = new Circle ("Circle", "red", 30, true)

// circle1.draw ();
// circle2.draw ();
// circle3.draw ();

// const rectangle1 = new Rectangle ("Rectangle", "Red", 23, 24, false)

// rectangle1.draw ()

import Subordinate from "./frontend/subordinate";
import Manager from "./frontend/manager";

const sub1 = new Subordinate("Michael", 32, "Manager");
const sub2 = new Subordinate ("Sebastian", 39, "Developer");
const sub3 = new Subordinate ( "Lukas", 43, "Worker");

const Manager1 = new Manager ("Alexander", 45, "Manager");

Manager1.addSubordinate(sub1);

console.log(Manager1);