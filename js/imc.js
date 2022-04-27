
const calcular = document.getElementById('calcular');


function imc () {

	const nome = document.getElementById('nome').value;
	const peso = document.getElementById('peso').value;
	const altura = document.getElementById('altura').value;
	const resultado = document.getElementById('resultado');

	if (nome !== '' && altura !== '' && peso !== '') {
		const valorIMC = (peso / (altura * altura)).toFixed(2);


		let classificação = '';

		if (valorIMC < 18.5){
			classificação = 'Abaixo do peso.';
		} else if (valorIMC < 25) {
			classificação = 'com peso ideal. Parabéns';
		} else if (valorIMC < 30) {
			classificação = 'Levemente acima do peso';
		} else if (valorIMC < 35) {
			classificação = 'Com obesidade grau I';
		} else if (valorIMC < 40) {
			classificação = 'Com obesidade grau II';
		} else  {
			classificação = 'Com obesidade grau III. Cuidado';
		}
		
		

		resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`;
	} else {
		
		resultado.textContent = 'Preencha todos os campos!';
	}	
}

	calcular.addEventListener('click', imc);