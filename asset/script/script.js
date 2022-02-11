function calculator() {
	let buttons = document.querySelectorAll('button');
	// const button = document.querySelector('button');
	const screen = document.querySelector('.screen');

	function actions(button = '', symbols = '',acumulator = '') {
		return {
			button,
			symbols,
			acumulator,
			clean() {
				if (symbols === 'C') screen.innerHTML = '';
				// button !== 'C' ? (screen.innerHTML += button) : (screen.innerHTML = '');
			},
			count() {
				if (this.symbols === '+') {
					const soma = this.button + this.acumulator;
					screen.innerHTML = `${this.button} + ${this.button}`;
					return soma;
				}
			},
			igual() {
				let result = count();
				return (screen.innerHTML = result);
			},
		};
	}
	for (let botoes of buttons) {
		botoes.addEventListener('click', function () {
			let valor = botoes.value;
			let numercis = actions().button;
			numercis =
				valor !== '+' ||
				valor !== '-' ||
				valor !== '/' ||
				valor !== '*' ||
				valor !== '**' ||
				valor !== '.' ||
				valor !== 'C'
					? valor
					: '';
			let operador = actions().symbols;
			operador =
				valor === '+' ||
				valor === '-' ||
				valor === '/' ||
				valor === '*' ||
				valor === '**' ||
				valor === '.' ||
				valor === 'C'
					? valor
					: '';
			screen.innerHTML += valor
			actions(numercis, operador).clean();
			actions(numercis, operador).count();
		});
	}
}
calculator();
