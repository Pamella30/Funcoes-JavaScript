const apresentarArrow = nome => `Meu nome e ${nome}`;
console.log(apresentarArrow("Pamella"))

//
const soma = (n1, n2) => n1 + n2;
console.log(soma(3, 3))

//
const somaNumerosPequenos = (n1, n2) => {
    if (n1 > 10 || n2 >10){
        return "Somente numeros pequenos"
    } else {
        return n1 + n2
    }
}
console.log(somaNumerosPequenos(5, 5))

//Exercicios
const nome = nome => `${nome}`;
console.log("Ana")

//
const idade = idade => `Minha idade e ${idade}`
console.log(idade(33))
//
const multiplicacao = (n1, n2) => n1 * n2;
console.log(multiplicacao(4, 4))

//
const saudacao = (opcao) => {
    if (opcao == 1){
        return `Bom dia`
    } if (opcao == 2) {
        return "Boa tarde"
    } else {
        return "Boa noite"
    }
}
console.log(saudacao(1))
console.log(saudacao(2))
console.log(saudacao(3))

//
