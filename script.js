// Curso Udemy - JavaScript e JQuery

// exibindo Olá Mundo
var mensagem = "Olá Mundo!";
//alert(mensagem);

// variáveis e operações
var a = 10;
var b = 5;

var soma = a + b;
var subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;

//alert('soma = '+soma);
//alert('subtracao = '+subtracao);
//alert('multiplicacao = '+multiplicacao);
//alert('divisao = '+divisao);

//alert('modulo/resto = '+(9 % 2));

// condicionais
if (a%b == 1) {
    //alert('Numero ímpar');
} 
else if (a%b == 0) {
    //alert('Numero par');
}
else {
    //alert('Valor inválido');
}

// laços - WHILE
var i = 0;
while (i < 3) {
    //alert(i);
    i++;
}

// laços - FOR
for (var j = 0; j < 3; j++) {
    //alert(j);
}

// tipos de dados
var int = 10;
var float = 4.5;
var string = "Olá mundo";
var array = ["laranja", "maçã", "banana", 1234];
//alert(array);

for (i in array) {
    //alert(array[i]);
}

// console.log
console.log("Olá Mundo!");