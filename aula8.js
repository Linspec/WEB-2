function changeText(id){
	id.innerHTML="E NUNCA MAIS VOLTOU";
}
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
	
}
function mOver(obj){
		obj.innerHTML="Se souberem onde ela está";
}
function mOut(obj){
		obj.innerHTML="Digam-me e eu vou lá buscá-la";
}
function mOut(obj){
		obj.innerHTML="Digam-me e eu vou lá buscá-la";
}
function paodebatata(obj){
	obj.style.backgroundColor="#91FFCE";
	obj.innerHTML="TU-RU-RU-RU";
	
}
function ceu(obj){
	obj.style.backgroundColor="#8AE879";
	obj.innerHTML="Vou pedir pra você ficar";
	
}
var afirmação;
var confirmação;
var num=0;

function informe(quadro){
	info="Braços abertos sempre a esperar usuário:"+(++num)+"\n";
	info+="\n"+afirmação+" Que isso bb :"+"\n";
	info+="\n"+confirmação+" LANÇAMENTO!!"+"\n";
	quadro.value+=info;
	
}

function Azul_da_cor_du_mar(cor){
	document.bgColor=cor;
}

