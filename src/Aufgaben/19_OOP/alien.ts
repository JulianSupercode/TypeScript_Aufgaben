class Alien {
    public name:string
    public planet:string = "";
    public galaxy:string = "";
    private _color:string;

constructor (name:string , color:string) {

this.name = name
this._color = color 
}

get color() {
    return this._color;
}

}
export default Alien;