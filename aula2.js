//metodo de confirmação 
confirm("Tem certeza que deseja salvar?");
/*Operador ternário é representado pela expressão;variavel=condição?verdadeiro:falso */

var idade=prompt("Qual a sua idade?");

var x=(idade>=18?"maior de idade":"menor de idade");

alert("Você é :\u00A0"+x);

//método Math-para executar os comandos dos operadores
//abs-para transformar o numero negativo em positivo

var valor=Math.abs(-25);
alert("O resultado é:\u00A0"+valor);
document.write("O resultado é \u00a0:"+valor);

//max-para mostrar o maior valor
var valor=Math.max(12,36);
alert("O maior valor é:\u00A0"+valor);
document.write("<br>O maior valor é:\u00A0"+valor);

//min-para retornar o menor valor
var valor=Math.min(12,36);
alert("O menor valor é :\u00A0"+valor);
document.write("<br>o menor valor é:\u00A0"+valor);

//pow-potencia
var valor=Math.pow(12,2);/*o primeiro valor é o numero,o segundo valor é a potencia*/
alert("O menor valor é:\u00A0"+valor);
document.write("<br>o menor valor é:\u00A0"+valor);

//round para arredondar  matematicamente
var valor=Math.round(30.4);
alert("O menor valor é:\u00A0"+valor);
document.write("<br> o menor valor é:\u00A0"+valor);

//ceil obrigatoriamente arredondar para cima 
var valor=Math.ceil(30.1);
alert("O menor valor é:\u00A0"+valor);
document.write("<br> o menor valor é;\u00A0"+valor);

//floor-obrigatoriamente arredonda para baixo 
var valor=Math.floor(30.9);
alert("O menor valor é:\u00A0"+valor);
document.write("<br> o menor valor é:\u00A0"+valor);

//random-para trabalhar com valores aleatórios
var valor=Math.random()*80;//trás numeros entre 0 e 80 
alert("O menor valor é:\u00A0"+valor);
document.write("<br> o menor valor é:\u00A0"+valor);

//sqrt-raiz quadrada
var valor=Math.sqrt(49);
alert("O valor da raiz é:\u00A0"+valor);
document.write("<br> o menor valor é :\u00A0"+valor);

//cbrt-raiz cubica
var valor=Math.cbrt(8);
alert("O valor da raiz cubica é:\u00A0"+valor);

//Operadores de comparação
//operador igual ==(verifica somente os dados)

var x=6;
var y="6";
alert(x==y);//reposta true

//OPERADOR DE identidade igual ===(verifica se os dados e o tipo são iguais)

var x=6;
var y="6";
alert(x==y);//reposta false

//operador diferente !=(verofoca se os dados são diferentes)
var a=6;
alert("O valor é igual?\u00A0"+(a!=6));

//operador identidade diferente !==
var b=6;
alert("O valor é igual?\u00A0"+(b=="6"));

//operador maior>
var c=prompt("entre com um valor");
alert("O valor é maior que 20?"+(c>20));

//operador menor<
var d=prompt ("entre com um valor");
alert("O valor é menor que 10?"+(d<10));

//operador maior igual>=
var e=prompt("entre com um valor");
alert("o valor é menor  e igual a 20?"+(e<=20));

//operador menor igual<=
var f=prompt("entre com um valor");
alert("o valor é menor e igual a 10?"+(f<=10));

//operadores lógicos-and &&,or ||,not !
var g=4;
alert("O valor é:"+((g>=1)&&(g<=10)));

//exemplo do and &&
var h=4;
alert("O valor é:"+((g>=1)&&(g<=10)));

var h=prompt ("entre com um valor");
alert("O valor é:"+((g>=1)&&(g<=10)));

//exemplo do or ||
var i=4;
alert("O valor é:"+((i>=1)||(i<=5)));

var h=prompt("entre com um valor");
alert("o valor é:"+((i>=1)||(i>=1)));

/*Exercícios
1.ler dois valores a partir do prompt,calcular e imprimir na tela:
a)A soma destes dois valores;
b)O quociente entre eles;
c)O quociente entre eles;
d)A diferença entre eles.

2.Elabore um programa em JS que calcule a média aritmética de duas notas e exiba o resultado na tela.

3.desenvolva um programa em JS em que a variavel 1 recebe o valor ,a variavel2 recebe 3,a variavel3 recebe o resultado
da subtração de var1 e var2 e mostra na tela a frase "Resultado da subtração é:concatenado com o valor do resultado.