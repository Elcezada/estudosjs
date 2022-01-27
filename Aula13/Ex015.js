var pizza = 4
console.log(`Obtido uma pizza de ${pizza} pedaços.`)

function comerpizza() {
    pizza--
}


/* com do while*/

do {
    comerpizza()
    console.log(`Comeu uma fatia, restando ${pizza} pedaços!`)
} while (pizza > 0)
