/*1. Construir um programa em JS que leia uma informação compreendida entre 1 e 12 e imprima o mês correspondente.
 Caso seja digitada uma informação inválida, imprimir uma mensagem esclarecedora.

2. Calcular a quantidade de dinheiro gasta por um fumante. Dados: o número de anos que ele fuma, o número de cigarros fumados por dia e o
 preço de uma carteira.

3. Sabendo que Amália tem x anos e Joaquim y anos, fazer um programa JS que verifique a idade dos 2 amigos e exiba o nome do mais velho na
 tela.

4. Faça uma página JS que sorteie um número aleatório entre 1 e 14 e verifique se ele é múltiplo de 3 ou 5. 

5. O triângulo é uma figura geométrica composta por três retas.Ele pode ser classificado conforme sua proporcionalidade.
Equilátero Isósceles Escaleno
Faça um prompt no qual o usuário informará três números que representam cada um dos lados de um triângulo e determine sua classificação 
de proporcionalidade.
*/
var mes=prompt("Entre com um numero");
switch(mes){
	case"1":
	alert("janeiro");
	break;
	case"2":
	alert("feveiro");
	break;
	case"3":
	alert("março");
	break;
	case"4":
	alert("abril");
	break;
	case"5":
	alert("maio");
	break;
	case"6":
	alert("junho");
	break;
	case"7":
	alert("julho");
	break;
	case"8":
	alert("agosto");
	break;
	case"9":
	alert("setembro");
	break;
	case"10":
	alert("outubro");
	break;
	case"11":
	alert("novembro");
	break;
	case"12":
	alert("dezembro");
	break;
	default:
	alert("uma mensagem esclarecedora");
}
/*2. Calcular a quantidade de dinheiro gasta por um fumante. Dados: o número de anos que ele fuma, o número de cigarros fumados por dia e o
 preço de uma carteira.*/
 var anos=prompt("entre com tempo que você fuma em anos");
 var cigarros=prompt("entre com a quantidade de cigarros que você fuma por dia");
 var preço=prompt("entre com o preço da sua cartela de cigarros");
 
 var dinheiro=(anos*(cigarros/20)*preço);
 alert("você já gastou R$"+dinheiro);
	
/*3. Sabendo que Amália tem x anos e Joaquim y anos, fazer um programa JS que verifique a idade dos 2 amigos e exiba o nome do mais velho
 na tela.*/
 var ama=prompt("entre com a idade de Amália");
 var joa=prompt("entre com a idade de joaquim");
 
 if(ama>joa){
	 alert("amália é mais velha");
 }
 else{
	 alert("joaquim é mais velho");
 }
 /*4. Faça uma página JS que sorteie um número aleatório entre 1 e 14 e verifique se ele é múltiplo de 3 ou 5.*/
 var valor=Math.random()*14;
 alert(valor);
 if(valor%3==0 || valor%5==0){
	 
alert("O valor aleatorio é \u00A0"+ valor+"e é multiplo de 3 ou 5");
 }
 else{
	 alert("o valor n é multiplo de 3 ou 5");
 } var valor=Math.random()*14;
 alert(valor);
 if(valor%3==0 || valor%5==0){
	 
alert("O valor aleatorio é \u00A0"+ valor+"e é multiplo de 3 ou 5");
 }
 else{
	 alert("o valor n é multiplo de 3 ou 5");
 }
 /*5. O triângulo é uma figura geométrica composta por três retas.Ele pode ser classificado conforme sua proporcionalidade.
Equilátero Isósceles Escaleno
Faça um prompt no qual o usuário informará três números que representam cada um dos lados de um triângulo e determine sua classificação 
de proporcionalidade.*/
var lado1=prompt("de o tamanho do lado 1");
var lado2=prompt("do o tamanho do lado 2");
var lado3=prompt("de o tamanho do lado 3");



if(lado1==lado2&&lado2==lado3){
	alert("o triangulo é equilátero");
}
 else if(lado1==lado2 && lado2!=lado3){
	 alert("o triangulo é isósceles");
 }
 else if(lado3==lado2 && lado2!=lado1){
	 alert("o triangulo é isósceles");
 }
 else if(lado1==lado3 && lado3!=lado2){
	 alert("o triangulo é isósceles");
 }
 else{
	 alert("o triangulo é escaleno");
 }

