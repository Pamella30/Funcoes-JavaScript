function soma(n1 = 0, n2 = 0){
    return n1 + n2;
}

console.log(soma(33, 35));
console.log(soma(33, 63));
console.log(soma(2023, -3));

// 
 function nomeIdade(nome, idade){
    console.log(`Meu nome e ${nome} e minha idade e ${idade}.`);
 }

 nomeIdade("Pamella", 33)

 //Uma funcao dentro da outra
 function multiplica(n1 = 1, n2 = 1){
    return n1 * n2
 }
 console.log(multiplica(soma(2, 3), soma(2, 3)))

 //

 function subtracao(n1 = 0, n2 = 0){
    return n1 - n2
 }
 console.log(subtracao(1990, 1960))

 //

 function divisao(n1 = 1, n2 = 1){
    return n1 / n2
 }
 console.log(divisao(25, 5))