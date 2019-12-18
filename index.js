var campos = [
	document.querySelector("#nomeBem"),
	document.querySelector("#valor"),
	document.querySelector("#taxa")
];

console.log(campos);
var tBody = document.querySelector("table tbody");
 document.querySelector(".form").addEventListener("submit",function(){
 	event.preventDefault();
	var tr = document.createElement("tr");
	campos.forEach(function(campo){
		var td = criaTd();
		td.textContent = campo.value;
		console.log(campo.value);
		adicionaFilhoTr(tr,td);
	})
	var taxaMes = criaTd();
	taxaMes.textContent = (campos[2].value/12).toFixed(6);
	adicionaFilhoTr(tr,taxaMes);
	console.log(taxaMes.textContent);

	var tempoAnos = criaTd();
	tempoAnos.textContent = contaDeTres(campos[2].value);
	adicionaFilhoTr(tr,tempoAnos);

	var tempoMes = criaTd();
	tempoMes.textContent = tempoAnos.textContent * 12;
	adicionaFilhoTr(tr,tempoMes);

	var valorDepreciacao = criaTd();
	valorDepreciacao.textContent = calculaValorDepreciacao(taxaMes.textContent);
	adicionaFilhoTr(tr,valorDepreciacao);

	var valorDepreciavel = criaTd();
	valorDepreciavel.textContent = calculaValorDepreciavel(taxaMes.textContent);
	adicionaFilhoTr(tr,valorDepreciavel);

	tBody.appendChild(tr);
	this.reset();
	campos[0].focus();

});

 function contaDeTres(valor){
 	var resultado = 100/valor;
 	return resultado;
 }
 function criaTd(){
 	return document.createElement("td");
 }
 function adicionaFilhoTr(tr,td){
 	tr.appendChild(td);
  }
  function calculaValorDepreciacao(taxaMes){
  	return ((taxaMes/100) * campos[1].value).toFixed(6);
  }
  function calculaValorDepreciavel(taxaMes){
  	return (campos[1].value - calculaValorDepreciacao(taxaMes)).toFixed(6);  
  }
