function calculator() {
	let buttons = document.querySelectorAll('button');
	// const button = document.querySelector('button');
	const screen = document.querySelector('.screen');
	const array = [];

	function actions() {
		return {
			clean() {
				if (array.includes('C')) return (array.length = 0);
			},
			printing() {
				screen.innerHTML = array.join('');
			},
			count() {
				// deixei dando erro mesmo
				let conta = array.join(parseInt(array));
				return conta;
			},
			igual() {
				if (array.includes('=')) {
					let result = this.count();
					screen.innerHTML = result;
					array.length = 0;
				}
			},
		};
	}
	for (let botoes of buttons) {
		botoes.addEventListener('click', function () {
			array.push(botoes.value);
			actions().clean();
			actions().printing();
			actions().igual();
		});
	}
}
calculator();
