/* FALTA IMPEDIR OS OPERADORES DE SE DUPLICAREM */
function calculator() {
	let buttons = document.querySelectorAll('button');
	const screen = document.querySelector('.screen');
	const defaultColor = getComputedStyle(screen).backgroundColor;
	// aqui é onde armazeno os valores que serao exibidos no HTML
	const array = [];
	// aqui é a factory function
	function actions() {
		return {
			// para escrever no HTML
			display() {
				screen.style.backgroundColor = defaultColor;
				const strings = array.join('');
				screen.innerHTML = strings;
			},
			// onde executa as contas
			count() {
				array.pop();
				let numerics = array.join('');
				const calc = eval(numerics);
				return calc;
			},
		};
	}
	// area dos botoes e seus respectivos valores, aqui eh onde tudo funciona
	for (let botoes of buttons) {
		botoes.addEventListener('click', function () {
			// this so funciona corretamente em tipo fuction e nao em array fuction
			array.push(this.value);
			// apaga tudo
			if (this.value === 'C') {
				screen.style.backgroundColor = defaultColor;
				array.length -= array.length;
			}
			// include checa a existencia de um valor e retorna booleano
			// apaga string por string
			if (array.includes('<<') && array.length > 1) {
				array.length -= 2;
			}
			// checa para ver se esta tudo certo
			try {
				if (this.value === '=') {
					let result = actions().count();
					screen.innerHTML = result;
					array.length = 0;
					array.push(result);
				}
			} catch (e) {
				array.length -= array.length;
				screen.style.backgroundColor = 'red';
				return (screen.innerHTML = 'ERRO - Por favor digite corretamente!');
			}
			actions().display();
		});
	}
}
calculator();
