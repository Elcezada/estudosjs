var idade = 68

console.log("Sistema de verificação para votos!")

if (idade < 16) {
    console.log(`Você tem ${idade} anos, Não vota!`)
} else {
    if (idade < 18 || idade > 65) {
        console.log(`Você tem ${idade} anos, Voto opcional!`)
    } else if (idade >= 18) {
        console.log(`Você tem ${idade} anos, Voto obrigatorio!`)
    }

}