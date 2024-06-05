import Unicorn from "./unicorn";
import ElectricCar from "./electric-car";
import Car from "./car";

class InstanceChecker {
   static isUnicorn (objectToCheck:any) {
        
        if (objectToCheck instanceof Unicorn ) {return console.log(true);
            
        } else {return console.log(false); }
    }

    static isCar (objectToCheck:any){

        if (objectToCheck instanceof Car)  {return true
            
        } else {return false}     
}
static isElectricCar (objectToCheck:any){

    if (objectToCheck instanceof ElectricCar)  {return true
        
    } else {return false}     
}

}

export default InstanceChecker