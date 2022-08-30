//Declare uma variável para armazenar um **nome**, sem atribuir um valor.
let nome

//Declare uma variável para armazenar uma **idade**, sem atribuir um valor.
let idade

//Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log ("A variavel nome é do tipo:", typeof (nome))
console.log ("A variavel idade é do tipo:", typeof (idade))

//Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//Não havia nenhum valor atribuido as variaveis, dessa forma o JS reconhece como uma variavel do tipo undefined.

//Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores 
//às variáveis que acabou de criar.
nome = prompt ("Qual o seu nome?")
idade = prompt ("Qual a sua idade?")

//Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log ("A variavel nome é do tipo:", typeof (nome))
console.log ("A variavel idade é do tipo:", typeof (idade))

//Para finalizar, imprima na tela a mensagem: 
//"Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
console.log("Olá",nome,", você tem", idade, "anos!")