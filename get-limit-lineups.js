/* Função para desabilitar botão de escalação na tela lineup caso tenha atingido limite de lineups da mesa */
disableBtnLineup()
disableBtnMinhasLigas()
function disableBtnLineup() {


	let user = document.getElementById('logged_user').innerText
	executeAction('get-limit-lineups', null, {identifier: user}).then((result) => {

		for (let i = 0; i < result.length; i++) {
			if ((result[i].user_lineups === result[i].limit_lineups) && (window.location.href.includes('/fantasy-lineup/' + result[i].table_round_id))) {
				let btn_sv_ln = document.getElementById("btn_save")
				btn_sv_ln.setAttribute("disabled", "disabled");
				btn_sv_ln.style.cssText = 'border: 1px solid #999999;' + 'color: #666666;' + 'background-color: #cccccc;' + 'cursor: not-allowed'
				btn_sv_ln.addEventListener("click", function (event) {
					event.preventDefault();
				}, false);
				let playersContainers = document.getElementsByClassName('playerContainer')
				for (let i = 0; i < playersContainers.length; i++) {
					playersContainers[i].setAttribute("disabled", "disabled");
					playersContainers[i].style.cssText = 'cursor: not-allowed'
					playersContainers[i].addEventListener("click", function (event) {
						event.preventDefault();
					}, false);
				}
				let reservContainers = document.getElementsByClassName('reservationsContainer')
				for (let i = 0; i < playersContainers.length; i++) {
					reservContainers[i].setAttribute("disabled", "disabled");
					reservContainers[i].style.cssText = 'cursor: not-allowed'
					reservContainers[i].addEventListener("click", function (event) {
						event.preventDefault();
					}, false);
				}


			}
		}
	}).catch(err => console.log(err))
	}


/* Função para desabilitar botão de escalação na tela Minhas Ligas caso tenha atingido limite de lineups da mesa */
function disableBtnMinhasLigas() {
	if (window.location.href.includes('/fantasy-minhas-ligas-visualizar')) {
		let user = document.getElementById('logged_user').innerText
		executeAction('get-limit-lineups', null, {identifier: user}).then((result) => {
			for (let i = 0; i < result.length; i++) {
				if ((result[i].user_lineups === result[i].limit_lineups) && (window.location.href.includes('/fantasy-minhas-ligas-visualizar/' + result[i].table_round_id))) {
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
