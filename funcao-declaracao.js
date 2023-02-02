// Declarando a funcao com parametro
function imprimeNome(nome){
    console.log(nome)
}

// Executando a funcao (1 ou mais vezes)
imprimeNome("Pamella");
imprimeNome("Ana");

//__________________________________________
//Declarando a funcao sem parametro
function soma(){
    return 2 + 2;
} 
console.log(soma())

//___________________________________________
//Chamando uma funcao dentro de outra funcao
imprimeNome(soma())

//___________________________________________
//Exercicios

function texto(texto){
    console.log(texto);
}
texto("Aqui voce vai digitar entre aspas o que voce quiser que apareca na tela")

//

function cargo(cargo){
    console.log(cargo);
}

cargo("Programadora");
cargo("Recepcionista");
cargo("Engenheira Civil");

//

function pais(pais){
    console.log(pais)
}

pais("Brasil");
pais("Irlanda");
pais("Italia");

//

function cidade(cidade){
    console.log(cidade);
}

cidade("Sao Paulo");
cidade("Dublin");
cidade("Roma");

//

function produto(produto){
    console.log(produto);
}

produto("Batata");
produto("Celular");

//

function materia(materia){
    console.log(materia);
}

materia("Matematica");
materia("Portugues");

//

function idade(){
    return 2023 - 1990
}
console.log(idade())

//

function anoIntercambio(){
    return 2023 - 2019
}
console.log(anoIntercambio())

//

texto(idade());

//

//Estrutura da funcao
// function nomedafuncao(pode receber ou nao receber parametro aqui dentro){}

