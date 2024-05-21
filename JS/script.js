const pageNumbers =[];

for (let index = 0; index < 5 ; index++) {
    let casualNumbers = randomNumbers()
    pageNumbers.push(casualNumbers)    
}
console.log(pageNumbers)

const section = document.querySelector('section.numbers')
const list = document.createElement('div')
section.appendChild(list)
list.classList.add('color')

for (let index = 0; index < pageNumbers.length; index++) {
    const element = document.createElement('p')
    element.append(pageNumbers[index])
    list.appendChild(element)
}
// element.append(pageNumbers)


// pageNumbers.innerHTML =

/** Funzione che genera un numero randomico tra 1 e 100
 * 
 * @returns random
 */
function randomNumbers(){
    let random = Math.floor(Math.random() * 101)
    return random;
}
