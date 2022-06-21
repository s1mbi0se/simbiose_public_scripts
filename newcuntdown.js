//Esse arquivo é exclusivamente para o funcionamento do cronômetro na tela fantasy-listagem-mesas

disableBtnListagemMesas()
disableBtnMinhasLigas()
getMarket()

async function getMarket(){
    setInterval(countdown, 1000)
}

function get_round(round){
	let x = list_ids()
	for (i=0; i<x.length ; i++){
		let div_shown_countdown =  document.getElementsByClassName(round)[i].textContent
		return div_shown_countdown
	}
}

function countdown() {
	let verify_if = '';
	let number_tables_div = list_ids()
	let i = 0;
	number_tables_div.forEach(e => {

			horario_mercado_fecha = get_round(e)
			const mktclose = new Date(horario_mercado_fecha);
			const currentDate = new Date();
			const totalSeconds = (mktclose - currentDate) / 1000;
			const days = Math.floor(totalSeconds / 3600 / 24);
			const hour = Math.floor(totalSeconds / 3600) % 24;
			const min = Math.floor(totalSeconds / 60) % 60;
			const seconds = Math.floor(totalSeconds) % 60;

			let dias = days;
			let horas = formatTIme(hour);
			let minutes = formatTIme(min);
			let segundos = formatTIme(seconds);
			let display_modal = document.querySelectorAll('.class_id_modal');


			let display = document.getElementById(e)
			display.innerHTMl = "<div id='{tables__table_id}'>{mercado_fecha}</div>"

			if (dias > 0) {
				display.textContent = (dias + "d " + horas + "h " + minutes + "m " + segundos + "s")
				display.style.color = "green"
				display_modal.forEach(element => {
					element.textContent =(dias + "d " + horas + "h " + minutes + "m " + segundos + "s")
					element.style.color = "green"
				})
				return display
			}
			if (horas > 12 && horas <= 24) {
				display.textContent = (horas + "h " + minutes + "m " + segundos + "s")
				display.style.color = "orange"
				display_modal.forEach(element => {
					element.textContent = (horas + "h " + minutes + "m " + segundos + "s")
					element.style.color = "orange"
				})
				return display
			}
			if (horas <= 12 && horas >= 2) {
				display.textContent = (horas + "h " + minutes + "m " + segundos + "s")
				display.style.color = "orange"
				display_modal.forEach(element => {
					element.textContent = (horas + "h " + minutes + "m " + segundos + "s")
					element.style.color = "orange"
				})
				return display
			}
			if (horas <= 2 && horas >= 1) {
				display.textContent = (horas + "h " + minutes + "m " + segundos + "s")
				display.style.color = "red"
				display_modal.forEach(element => {
					element.textContent = (horas + "h " + minutes + "m " + segundos + "s")
					element.style.color = "red"
				})
				return display
			}
			if (horas <= 0 && minutes <= 59 && minutes >= 1) {
				display.textContent = (minutes + "m " + segundos + "s")
				display.style.color = "red"
				display_modal.forEach(element => {
					element.textContent = (minutes + "m " + segundos + "s")
					element.style.color = "red"
				})
				return display
			}
			if (segundos >= 0 && segundos <= 59) {
				display.textContent = (segundos + "s")
				display.style.color = "red"
				display_modal.forEach(element => {
					element.textContent = (segundos + "s")
					element.style.color = "red"
				})
				return display
			}
			display.textContent = ('MERCADO FECHADO !!!')
			display.style.color = "red"
			let button = document.getElementById(e + 'btn')
			button.disabled = true
			i++
			display_modal.forEach(element => {
				element.textContent = ('MERCADO FECHADO !!!')
			})
			return display
		}
	)
}

function formatTIme(time) {
    return time < 10 ? `0${time}` : time;
}

function list_ids(){
	let number_tables_div = []
	let get_id = document.getElementsByClassName('class_id')
	for (i=0; i<get_id.length ; i++){
		number_tables_div.push(get_id[i].id)
	}
	return number_tables_div
}


/* Função para desabilitar botão de escalação na tela Listagem Mesas caso tenha atingido limite de lineups da mesa */
function disableBtnListagemMesas() {
	if (window.location.href.includes('/fantasy-listagem-mesas')) {
		let user = document.getElementById('logged_user').innerText
		executeAction('get-limit-lineups', null, {identifier: user}).then((result) => {
			for (let i = 0; i < result.length; i++) {
				if (result[i].user_lineups === result[i].limit_lineups) {
					let btns = document.querySelectorAll('button')
					for (let j = 0; j < btns.length; j++) {
						if (btns[j].id === result[i].table_round_id + 'btn') {
							btns[j].disable = true
							btns[j].style.cssText = 'border: 1px solid #999999;' + 'color: #666666;' + 'background-color: #cccccc;' + 'cursor: not-allowed'
							btns[j].addEventListener("click", function (event) {
								event.preventDefault();
							}, false);
						}
					}


				}
			}

		}).catch(err => console.log(err))

	}
}

/* Função para desabilitar botão de escalação na tela Minhas Ligas caso tenha atingido limite de lineups da mesa */
function disableBtnMinhasLigas() {
	if (window.location.href.includes('/fantasy-minhas-ligas-visualizar')) {
		let user = document.getElementById('logged_user').innerText

		executeAction('get-limit-lineups', null, {identifier: user}).then((result) => {

			for (let i = 0; i < result.length; i++) {
				if ((result[i].user_lineups === result[i].limit_lineups) && (window.location.href === ('http://fantasy.localhost:3004/fantasy-minhas-ligas-visualizar/' + result[i].table_round_id))) {
					let intro = document.getElementsByTagName('button');
					intro[0].disabled = true
					intro[0].addEventListener("click", function (event) {
						event.preventDefault();
					}, false);
				}

			}

		}).catch(err => console.log(err))
	}


}

