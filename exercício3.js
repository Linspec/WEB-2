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
var mes=prompt("entre com um número");
switch(mes){
	case"1":
	alert("janeiro");
	break:
	case"2":
	alert("feveiro");
	break:
	case"3":
	alert("março");
	break:
	case"4":
	alert("abril");
	break:
	case"5":
	alert("maio");
	break:
	case"6":
	alert("junho");
	break:
	case"7":
	alert("julho");
	break:
	case"8":
	alert("agosto");
	break:
	case"9":
	alert("setembro");
	break:
	case"10":
	alert("outubro");
	break:
	case"11":
	alert("novembro");
	break:
	case"12":
	alert("dezembro");
	break:
	default:
	alert("uma mensagem esclarecedora");
}
	

