import { differenceInYears } from "date-fns";


function calculateAge(birthday:Date) :number {

    const age = differenceInYears(new Date(), birthday);
console.log('age ', age);

return age;

}
const birthday = new Date('1992-04-25');
calculateAge(birthday)




