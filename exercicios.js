/*Exercícios
1.ler dois valores a partir do prompt,calcular e imprimir na tela:
a)A soma destes dois valores;
b)O produto entre eles;
c)O quociente entre eles;
d)A diferença entre eles.

2.Elabore um programa em JS que calcule a média aritmética de duas notas e exiba o resultado na tela.

3.desenvolva um programa em JS em que a variavel 1 recebe o valor 5 ,a variavel2 recebe 3,a variavel3 recebe o resultado
da subtração de var1 e var2 e mostra na tela a frase "Resultado da subtração é:concatenado com o valor do resultado.*/

var a=prompt("entre com um valor A");
var b=prompt("entre com o valor B");
a = parseInt(a);
b = parseInt(b);
document.write("<br>a soma dos valores de A+B é:\u00A0"+(a+b));

document.write("<br>o produto entre eles é:\u00A0"+(a*b));

document.write("<br>o quociente entre eles é:\u00A0"+(a/b));

document.write("<br>a diferença entre eles é:\u00A0"+(a-b));

var c=parseInt(prompt("entre com um valor C"));
var d=parseInt(prompt("entre com o valor de D"));

document.write("<br>a média entre eles é:\u00A0"+((c+d)/2));

var e=5;
var f=3;
var g=(e-f);

document.write("<br>Resultado da subtração é:concatenado com o valor do resultado:\u00A0"+ g );
