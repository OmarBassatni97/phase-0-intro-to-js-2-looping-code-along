// Code your solutions in this file
function writeCards(array,event){
    let eventArray =[]
    for (let index = 0; index < array.length; index++) {
        eventArray[index]=`Thank you, ${array[index]}, for the wonderful ${event} gift!`
    }
    return eventArray
}

function countDown(number){
    let i=0
    while(i<=number){
        console.log(number)
        number--
    
    }
    

}