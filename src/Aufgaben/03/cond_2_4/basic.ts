let randomNumber = Math.ceil(Math.random() * 77);
const randomNumber1 = Math.ceil(Math.random() * 77);



// if (randomNumber <= randomNumber1) {
    
//     console.log(randomNumber); 
//     console.log(randomNumber1);   
//     console.log('Zweite Zahl größer');
    
// }
// else if (randomNumber >= randomNumber1){
//     console.log(randomNumber);
//     console.log(randomNumber1);
//     console.log('Erste Zahl größer');
//     }

// else{
//     console.log('Was für ein Zufall');
// }


switch (true){
    case randomNumber <= randomNumber1:
        
      
      console.log('Zweite Zahl größer');
      break;
    case randomNumber >= randomNumber1 : 
            
      console.log('Erste Zahl größer');
      break;
     
    default:
      console.log('Was für ein Zufall');
      break;
  }


