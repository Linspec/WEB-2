var afirmação;
var confirmação;
var yohu;
var hey;
var num=0;
//Efetue um programa em js que receba os valores de A, B, C e D. Efetue a soma entre A e C e a multiplicação entre B e D Verifique 
//se o resultado da soma é maior, menor ou igual ao da multiplicação. Usem o getElementById.

function informe(quadro){
	info="Seu Cálculo de número"+(++num)+"\n";
	info+="a soma de A e C e´: "+(parseInt(afirmação) + parseInt(yohu))+"\n";
	info+="a multiplicação entre B e D é:"+(parseInt(confirmação)*parseInt(hey))+"\n";
	if((afirmação)+(yohu)>(confirmação)*(hey)){
		info+="A soma de A e C";
	}
	else if((afirmação)+(yohu)<(confirmação)*(hey)){
		info+="A soma de A e C";
	}
	else
		info+="O valor é igual";
	quadro.value+=info;
}
	