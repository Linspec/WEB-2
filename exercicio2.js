/*1.Mostrar a situação do aluno de acordo com a sua média: Aprovado,reprovado, a média é 7. 
2. Aplicar 10% de desconto no preço de um produto.
3. Construir em JS, um programa que leia 2 números e efetue a adição.Caso o valor somado seja maior que 20, este deverá ser apresentado somando-se a ele mais 8;
 caso o valor somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.
4. Efetue um algorítmo JS que receba um valor digitado pelo usuário e imprima o texto "o valor é maior que 10" caso isso seja verdade, senão imprima "o valor é
 menor que 10".
5. Efetue um algorítmo JS que receba a altura e o sexo de uma pessoa, calcule e imprima o seu peso ideal, utilizando as seguintes fórmulas:
• para homens: (72.7 * H) - 58 • para mulheres: (62.1 * H) – 44.7 */
//essa é a 1
var nota=parseInt(prompt("Nota 1?"));

var nota1=parseInt(prompt("Nota 2?"));

var media=Math.abs((nota+nota1)/2);

var x=(media>=7.00)?"aprovado":"reprovado";

alert("Você está :\u00A0"+x);



/*
var media=prompt("Qual sua média?");

var x=(media>=7.00)?"aprovado":"reprovado";

alert("Você está :\u00A0"+x); 
*/

//essa é a 2

var valor=prompt("Valor do produtdo?");

var y=Math.abs(valor*10/100);

var u=Math.abs(valor-y);

alert("o preço com desconto será de:\u00A0"+u);

//essa é a 3
var num1=parseInt(prompt("Valor 1?"));

var num2=parseInt(prompt("Valor 2?"));

var z=Math.abs(num1+num2);

var w=((z>20)?(z+8):(z-5));

alert("o valor final é:\u00A0"+w);
/*var x = parseInt(prompt("Digite o valor de x: "));
var y = parseInt(prompt("Digite o valor de y: "));
var soma = x + y;
if(soma <= 20){
    soma = soma -5;
    document.write("<br>O valor é igual a\u00A0"+ soma);
}
else{
    soma = soma + 8;
    document.write("<br>O valor é igual a\u00A0"+ soma);
}*/

//essa é a 4
var num3=prompt("Valor?");

var p=(num3>10)?"o valor é maior que 10":"o valor é menor que 10";

alert(p); 

//essa é a 5

var alt=prompt("Sua altura?");

var sex=prompt("Seu sexo?(Ex:m/f)");

var v=(sex=="m")?((72.7*alt)-58):((62.1*alt)-44.7);

alert("seu peso ideal é:\u00A0"+v);





