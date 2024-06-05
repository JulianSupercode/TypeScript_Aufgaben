import { th } from "date-fns/locale"

class Activity {
    name:string = ""
    _difficulty:number [] = [1,2,3,4,5,6]

    get difficulty (){
        return this._difficulty
    }

    set difficulty (value:number[]){
        if (this._difficulty = value) {
            this._difficulty = value
        } else {console.log("Enter a number from 1-6");
            
        }
     }

     execute () : void {
        console.log(`"Executing"${this.name}`);
     }
}

export default Activity
