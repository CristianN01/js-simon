const pageNumbers =[];
let userSeconds = 5;


for (let index = 0; index < 5 ; index++) {
    let casualNumbers = randomNumbers();
    pageNumbers.push(casualNumbers);
}
// console.log(pageNumbers);

// ? Selezionato la section nel file html, creato un elemento div al suo interno aggiungendolo con append, e poi aggiunti tutti i p all'interno del div con il ciclo for.
const section = document.querySelector('section.numbers');
const list = document.createElement('div');
section.appendChild(list);
list.classList.add('color');

/** Funzione per crreare un p per ogni index presente nell'array
 * 
 */
for (let index = 0; index < pageNumbers.length; index++) {
    const element = document.createElement('div');
    element.classList.add('square')
    element.append(pageNumbers[index]);
    list.appendChild(element);
}

/** Funzione che genera un numero randomico tra 1 e 100
 * 
 * @returns random
 */
function randomNumbers(){
    let random = Math.floor(Math.random() * 101);
    return random;
}

const timer = setInterval( function(){
    userSeconds--; // % sottrai un secondo al timer 
    console.log(userSeconds);
    if( userSeconds <= 0){ // > se il timer ha raggiunto un numero di secondi uguale o minore a 0
        document.querySelector('section.numbers').innerHTML = "";
        clearInterval(timer);
    }
}, 1000);

function responses(){
    let clientNumbers =[];
    for (let index = 0; index < pageNumbers.length; index++) {
        let asks = Number.parseInt(prompt('Scrivi i numeri  che prima sono comparsi in pagina :D'), 10);
        clientNumbers.push(asks);
    }
    console.log('I tuoi numeri sono:' +' '+ clientNumbers);
    console.log('I numeri casuali in pagina erano:' +' '+ pageNumbers);
    console.log(correctAnswers(pageNumbers, clientNumbers));
    return clientNumbers;
}

function correctAnswers(numbers, guesses){
    const answers =[];
    for (let index = 0; index < numbers.length; index++) {
        if(guesses.includes(numbers[index]) === true){
            answers.push(true);
        } else {
            answers.push(false);
        }
        
    }
        return answers;

}

setTimeout( responses, 6000);

