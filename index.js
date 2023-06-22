// Code your solutions in this file
function writeCards(names, event) {

    const messages = [];
    for (let n = 0; n < names.length; n++) {
      const gratitude = `Thank you, ${names[n]}, for the wonderful ${event} gift!`;
      messages.push(gratitude);
    }

    return messages;
  }

function countDown(Number){
    for (let n = Number; n>=0; n--) {
    console.log(n);
    
}

}