var pizza = 4
console.log(`Obtido uma pizza de ${pizza} pedaços.`)
function comerpizza() {
    pizza--
}
/* com while*/

while (pizza > 0) {
    comerpizza()
    console.log(`Comeu uma fatia, restando ${pizza} pedaços!`)
}
