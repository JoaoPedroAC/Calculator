function calculator() {
	let buttons = document.querySelectorAll('button');
	// const button = document.querySelector('button');
	const screen = document.querySelector('.screen');
	// aqui é onde armazeno os valores que serao exibidos no HTML
	const array = [];

	function actions() {
		return {
			// funcao para limpar os numeros
			clean() {
				if (array.includes('C')) return (array.length = 0);
				if (array.includes('<<')) {
					return (array.length -= 2);
				}
			},
			// para escrever no HTML
			printing() {
				screen.innerHTML = array.join('');
			},
			// area das contas
			// ainda ta dando um problema que ele não soma
			count() {
				array.pop();
				let acumulator = array.join('');
				let conta = parseInt(acumulator);
				return conta;
			},
			// ao apertar o botao '=' sera efetuado a conta e aparecerá na tela, fora q tbm salvara no array
			igual() {
				if (array.includes('=')) {
					let result = this.count();
					screen.innerHTML = result;
					array.length = 0;
					array.push(result);
				}
			},
		};
	}
	// area dos botoes e seus respectivos valores, aqui eh onde tudo funciona
	for (let botoes of buttons) {
		botoes.addEventListener('click', function () {
			// essa const é para caso de NaN ele retornará o os valores nao numericos
			const errors = !parseInt(botoes.value)
				? botoes.value
				: parseInt(botoes.value);
			array.push(errors);
			// declaracao das functions
			actions().clean();
			actions().printing();
			actions().igual();
		});
	}
}
calculator();
