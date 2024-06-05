import Activity from "./activity";


class yoga extends Activity {
    name: string = ""
    _difficulty: number[] = [1,2,3,4,5,6] ;
    type: Yoga = Yoga.Hatha

    
}


enum Yoga { 
    Hatha = "Hatha",
    Vinyasa = "Yinyasa",
    Ashtanga = "Astanga",
    Bikram = "Bikram",
}

