import IEmployee from "../contracts/IEmployee";

class Manager implements IEmployee {
    name: string;
    age: number;
    position: string;
    private assignedEmployees:IEmployee[] = [];

constructor (name:string, age:number, position:string) {
    this.name = name
    this.age = age
    this.position = position
}

addSubordinate (subordi:IEmployee) :void {
this.assignedEmployees.push(subordi);
}

}

export default Manager