let nome = []
let idade = []
let altura = []
let peso = []
let imc = []

let alunos = [45]
let soma = 0.0
for(let i = 0; i <= 45; i++) {
    nome[i] = prompt("Qual o seu nome?")
    idade[i] = prompt("Qual a sua idade?")
    altura[i] = Number(prompt("Qual a sua altura? (em metros)"))
    peso[i] = Number(prompt("Qual o seu peso? (em kilogramas)"))
    try {
        if(peso[i] == 0){
            let error = new Error
            error("Peso = 0")
        }
    } catch(error) {
        document.write(error.message)
        alert("O peso não pode ser 0")
    }

    imc[i] = peso[i]/(altura[i] * altura[i])
    
    soma += altura[i]

    document.write(imc[i] +" | ")
}



let maior = Math.max(...imc)
document.write("O maior IMC é " +maior +" | ")

let menor = Math.min(...imc)
document.write("O menor IMC é " +menor +" | ")

let media = soma / altura.length
document.write("A média de alturas é " +media)