const pageNumbers =[];

const section = document.querySelector('section.numbers')
const list = document.createElement('div')
const element = document.createElement('p')
list.appendChild(element)
list.classList.add('color')

list.append(pageNumbers.value)

for (let index = 0; pageNumbers.length < 5 ; index++) {
    let casualNumbers = randomNumbers()
    pageNumbers.push(casualNumbers)    
}
    console.log(pageNumbers)

// pageNumbers.innerHTML =

/** Funzione che genera un numero randomico tra 1 e 100
 * 
 * @returns random
 */
function randomNumbers(){
    let random = Math.floor(Math.random() * 101)
    return random;
}
