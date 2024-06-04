class Animal {
    private _species: string = "Unbekannt";
    private _age: number = 0;
    private _color : string = "Unbekannt";


get species() {
    return this._species;
}

set species (value:string) {

    this._species = value
}



get age() {
    return this._age;
}

set age (value:number) {

    this._age = value
} 



get color() {
    return this._species;
}

set color (value:string) {

    this._color = value
}

}


class Person {

    private _name:string;
    private _birthday:Date;
    private _gender:Gender;

    get gender () {
        return this._gender;
    }

    set gender (value:string) {
        this.gender = value
    }

    get name () {
        return this.name
    }

    set name (value:string) {
this.name = value
    }


    constructor (name:string, birthday:Date, gender:Gender,) {
        this._name = name;
        this._birthday = birthday;
        this._gender = gender;
    }
}

enum Gender {
    Male = "male",
    Female ="female",
    Other = "other" 
}

const person1 = new Person("Julian",new Date(),Gender.Male)

person1.name = "Sami"
person1.name = "Teo"

console.log(person1.name);





