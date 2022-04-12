async function getMarket(){
    setInterval(countdown, 1000)
}

function get_rodada(round){
	let x = list_ids()
	for (i=0; i<x.length ; i++){
		let div_mostrar_cronometro =  document.getElementsByClassName(round)[i].textContent
		return div_mostrar_cronometro
	}
}

function countdown() {
	let number_tables_div = list_ids()
	let i=0;
	number_tables_div.forEach(e => {

				horario_mercado_fecha = get_rodada(e)
				const mktclose = new Date(horario_mercado_fecha);
				const currentDate = new Date();
				const totalSeconds = (mktclose - currentDate) / 1000;
				const days = Math.floor(totalSeconds / 3600 / 24);
				const hour = Math.floor(totalSeconds / 3600) % 24;
				const min = Math.floor(totalSeconds / 60) % 60;
				const seconds = Math.floor(totalSeconds) % 60;

				let dias = days;
				let horas =  formatTIme(hour);
				let minutes = formatTIme(min);
				let segundos = formatTIme(seconds);

				let display = document.getElementById(e)
				display.innerHTMl = "<div id='{tables__table_id}'>{mercado_fecha}</div>"

				if (dias>0) {
					display.textContent = (dias + "d " + horas + "h " + minutes + "m " + segundos + "s")
					display.style.color = "green"
					return display
				}if (horas>12 && horas<=24){
					display.textContent = (horas + "h " + minutes + "m " + segundos + "s")
					display.style.color = "orange"
					return display
				}
				if (horas<=12 && horas>=2){
					display.textContent = (horas + "h " + minutes + "m " + segundos + "s")
					display.style.color = "orange"
					return display
				}
				if (horas<=2 && horas>=1) {
					display.textContent = (horas + "h " + minutes + "m " + segundos + "s")
					display.style.color = "red"
					return display
				}
				if (horas<=0 && minutes<=59 && minutes >=1) {
					display.textContent = (minutes + "m " + segundos + "s")
					display.style.color = "red"
					return display
				}
				if (segundos>=0 && segundos<=59) {
					display.textContent = (segundos + "s")
					display.style.color = "red"
					return display
				}
				display.textContent = ('MERCADO FECHADO !!!')
				display.style.color = "red"
				let butao = document.getElementById('btnscl')
				butao.textContent = ('')
				i++
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

getMarket()
