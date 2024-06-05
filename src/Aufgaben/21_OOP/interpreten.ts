import Singer from "./singer";

export class Beyonce extends Singer {

    constructor (name: string) {
    super (name);}

sing(): string {
    return "I´m a survivor, I´m gonna make it"
}
}

export class TaylorSwift extends Singer {

    constructor (name: string) {
    super (name);}

sing(): string {
    return "Cruel Summer"
}
}

export class KingsofLeon extends Singer {

    constructor (name: string) {
    super (name);}

sing(): string {
    return "Sex is on fire"
}
}

export class Sting extends Singer {

    constructor (name: string) {
    super (name);}

sing(): string {
    return "Desert Rose"
}
}