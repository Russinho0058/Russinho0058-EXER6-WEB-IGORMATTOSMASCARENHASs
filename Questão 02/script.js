const inputNumero = document.getElementById('numero');
const inputNome = document.getElementById('nome');
const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
	if (inputNumero.value === '' || isNaN(inputNumero.value)) {
		mensagem.textContent = 'Por Favor, insira um número válido.';
	} else if (inputNumero.value === '5') {
		if (inputNome.value === '') {
			mensagem.textContent = 'Por Favor, insira seu nome.';
		} else {
			const lista = [];
			for (let i = 1; i <= 5; i++) {
				lista.push(`${i}. ${inputNome.value}`);
			}
			mensagem.innerHTML = `<ul><li>${lista.join('</li><li>')}</li></ul>`;
		}
	} else {
		mensagem.textContent = 'Número inválido.';
	}
});