// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }
// for (let age = 6; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
// const gifts = ["Teddy Bear", "drone", "doll"];
// function wrapGifts(gifts){
//     for (let i=0; i<gifts.length; i++){
//         console.log(`Wrapped ${gifts[1]} and added a bow!`);
//         debugger
//     }
//     return gifts
// }
// wrapGifts(gifts);

function writeCards( names= ["Guadalupe", "Ollie", "Aki"], surprise = "surprise"){
    let Cards = []
    for ( let i = 0; i < names.length; i++ ) {
      Cards.push( `Thank you, ${names[i]}, for the wonderful ${surprise} gift!` )
    }
    return Cards
  }
  
  function countDown( start ) {
    while ( start > 0 ) {
      console.log( start );
      start -= 1;
    }
    console.log( start );
  }

