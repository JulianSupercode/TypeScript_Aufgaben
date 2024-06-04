import IShape from "../contracts/IShape";

class Circle implements IShape {
    name: string;
    color: string;
    radius:number
    isRound: boolean;
    

constructor (name:string, color:string, radius:number, isRound:boolean)
{
    this.name = name;
    this.color = color;
    this.radius = radius;
    this.isRound = isRound;
}
    

public draw (): void {
    console.log("Drawing circle");
}

}

export default Circle