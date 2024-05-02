const susisStatus = 'Susi is going to codingschool'

const susisStatus1 = susisStatus.slice(0, 4);
console.log({ susisStatus1 });

const susisStatus2 = susisStatus.slice(5, 7);
console.log({ susisStatus2 });


const susisStatus3 = susisStatus.slice(5, 7);
console.log({ susisStatus3 });


const susisStatus4 = susisStatus.slice(5, 7);
const susihtml = document.getElementById ("susi1") 
if (susihtml) {
    susihtml.innerHTML = susisStatus4

}


console.log({ susisStatus4 });


const susisStatus5 = susisStatus.slice(12, 14);
console.log({ susisStatus5 });

console.log(`${susisStatus1} ${susisStatus2} ${susisStatus5}`);