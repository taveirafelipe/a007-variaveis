//Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
let a = 10
let b = 25

//Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
let troca = a
a = b
b = troca

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b) 