class SchoolClass {
    id = 0;
    name = "3A";
    endDate?:Date ;

    constructor (id:number, name="2A")
{
    this.id = id;
    this.name = name;
    
    console.log("School Class creation successful")
}
}

export default SchoolClass;

