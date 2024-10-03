const inputNome = document.getElementById('nome');
const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
	if (inputNome.value === '') {
		mensagem.textContent = 'Por Favor, insira seu nome.';
	} else {
		mensagem.textContent = `Olá, ${inputNome.value}! Seja bem-vindo à página do Igor.`;
	}
});