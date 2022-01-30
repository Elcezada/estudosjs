let num = [0, 5, 3, 6]

console.log(`Nossos vetores são: ${num} !`)

num.push(7)

console.log(num[4])
console.log(num.length)
console.log(num.sort())



for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for (let pos in num) {
    console.log("C1=" + num[pos])
}

console.log(num.indexOf(7)) /* busca no indice o valor e mostra a posição. -1 significa que ele buscou mas não achou, resumindo é falha.*/