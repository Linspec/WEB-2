function limpar(){
    document.getElementById("visor").value='';
}
function preencher(valor){
    document.getElementById('visor').value+=valor;
}
function calcular(){
    var resultado=0;
    resultado=document.getElementById('visor').value;
	document.getElementById('visor').value='';
    document.getElementById('visor').value=eval(resultado);
}
//IMC


function calculate(){
	var kg=document.getElementById('kg').value;
	var metros=document.getElementById('metros').value;
	var cal=kg/(metros*metros);
	document.getElementById('resul').value=cal;
	
}