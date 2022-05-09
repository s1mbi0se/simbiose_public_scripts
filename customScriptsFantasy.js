/*Chamadas de todas as funções*/
get_player_click_buy()
get_player_click()
getClickBtn()
getClickDeleteUniqueBtn()
getClickDeleteUniqueBtn2()
checkPlayersForHiddenModal()
get_field_click()
get_backArrow_click()

let cost_team = 0
let bal_aval = 120000
let players_obj = {}
let players_obj_btn = []
let players_infos = [{}]
players_infos.shift()
let table_round_id = 1

/*A funçao abaixo e acionada quando clicamos no botao de salvar a escalacao*/

	let saveLineupButton = document.getElementById('btn_save')
	saveLineupButton.addEventListener('click', function saveLineup(){
		let length_list_save = players_infos.length
		let free_pos = 16 - length_list_save
		for(let i = 0; i < free_pos; i++ ) {
    		players_infos.push( {id: null})

	}

	let url = '';
	let div_table_round_id = document.getElementsByClassName('div_table_round_id')
	table_round_id = parseInt(div_table_round_id[0].textContent)
	if(window.location.host == 'fantasy.localhost:3004'){
		//let domain = window.location.origin.split(`:3004`)[0];
		//let port = 8000;
		//url = `${domain}:${port}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
		let domain = '209.126.12.92'
		url = `${domain}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
	}else if(window.location.host == 'fantasydev.simbioseventures.com'){
		let domain = 'https://fantasydev.simbioseventures.com'
		url = `${domain}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
	}else if(window.location.host == 'fantasystage.simbioseventures.com'){
		let domain = 'https://fastcrudapistage.simbioseventures.com/'
		url = `${domain}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
	}
	let autorizationToken = JSON.parse(localStorage.fct).accessToken
	let postParameters = { data:{
		"subscribe_users__user_id-0" : '{current_user}',
		"subscribe_users__table_round_id-0": table_round_id,
		"lineups__user_fantasy_id-0": '{current_user}',
		"lineups__table_round_id-0": table_round_id,
		"lineups_players__player_id-0": players_infos[0].id,
		"lineups_players__player_id-1": players_infos[1].id,
		"lineups_players__player_id-2": players_infos[2].id,
		"lineups_players__player_id-3": players_infos[3].id,
		"lineups_players__player_id-4": players_infos[4].id,
		"lineups_players__player_id-5": players_infos[5].id,
		"lineups_players__player_id-6": players_infos[6].id,
		"lineups_players__player_id-7": players_infos[7].id,
		"lineups_players__player_id-8": players_infos[8].id,
		"lineups_players__player_id-9": players_infos[9].id,
		"lineups_players__player_id-10": players_infos[10].id,
		"lineups_players__player_id-11": players_infos[11].id,
		"lineups_players__player_id-12": players_infos[12].id,
		"lineups_players__player_id-13": players_infos[13].id,
		"lineups_players__player_id-14": players_infos[14].id,
		"lineups_players__player_id-15": players_infos[15].id
		}
	};
	const options = {
		method: 'POST',
		body: JSON.stringify( postParameters ),
		headers: new Headers({
			'Authorization': `Bearer ${autorizationToken}` ,
		})
	};
	fetch( url, options )
		.then( response => {
			response.json()
			console.log('Funcionou 2')
		} )
		.then( response => {
			console.log('Funcionou')
		});

})


/*Esta função recebe dois parâmetros "valor" e "operação" /compra ou venda/ e ela faz todos os cálculos/débitos e injeta no html*/
function balanceController(price, operation){

	if(operation == 'purchase'){ //compra
		bal_aval -= price
		cost_team += price
	} else if(operation == 'sale'){ //venda
		bal_aval += price
		cost_team -= price
	}

	for(let i=0; i < 6; i++){
		document.getElementsByClassName('balance_available')[i].innerText = '$' + bal_aval
		document.getElementsByClassName('team_price')[i].innerText = '$' + cost_team
	}

}

/*Esta função captura o click no campo para tirar o x do jogador selecionado*/
function get_field_click() {
    let field = document.getElementsByClassName('field')
    let botoes = document.getElementsByClassName('deletePlayer')
    for (var i = 0; i < field.length; i++) {
        field[i].addEventListener('click', function (event) {
            if (event.target.id == '') {
                for (i = 0; i < botoes.length; i++) {
                    botoes[i].style.display = 'none'
                }
            } else {
            }
        })
    }
}

/*Captura o click do botão Comprar*/
function get_player_click_buy() {
	let els = document.getElementsByClassName('button')
	for(let i=0; i<els.length; i++){
		els[i].addEventListener('click', function (event) {
			if(els[i].className.includes('buyButton')){
				joinPlayer(event.target.id)
			}else if(els[i].className.includes('salleButton')){
				sallePlayer(event.target.id)
			}
		})
	}
}

var get_player_click_variable = '';
/*Função que captura o click no botão do jogador*/
function get_player_click() {
    var playersBtn = document.getElementsByClassName('player')
    for (var i = 0; i < playersBtn.length; i++) {
        playersBtn[i].addEventListener('click', function (event) {
            checkAllDeleteButtons()
            return get_player_click_variable = event.target.id
        })
    }
}

function checkAllDeleteButtons(){
    let playersBtn = document.getElementsByClassName('deletePlayer')
    let playersBtnReservation = document.getElementsByClassName('deletePlayerReservation')
    let allBtn = [...playersBtn, ...playersBtnReservation]
    for(i=0; i<allBtn.length; i++){
        let svgBtn = allBtn[i]
        let svgBtnAttr = svgBtn.getAttribute("style")
        if(svgBtnAttr == 'display: flex;'){
            allBtn[i].setAttribute('style', 'display: none;')
        }
    }
}


// Esta função vende o jogador através do x na tela do campo
function del_unique_player(id_btn) {
	btn_str = "btn_del_"
    btn_str += id_btn
    span_str = "span_"
    span_str += id_btn
    control_if = id_btn.replace(/[^0-9]/g, '')
    let display_unique_del_player = document.getElementById(span_str)
    let display_btn_unique_del_player = document.getElementById(btn_str)
    display_btn_unique_del_player.style.display = 'none'
    display_unique_del_player.classList.remove("preenchido")
    if (control_if == 15 || control_if == 0) {
        display_unique_del_player.textContent = "GOL"
    }
    if (control_if == 14 || control_if == 2 || control_if == 1) {
        display_unique_del_player.textContent = "ZAG"
    }
    if (control_if == 13 || control_if == 3 || control_if == 4) {
        display_unique_del_player.textContent = "LAT"
    }
    if (control_if == 12 || control_if == 5 || control_if == 6 || control_if == 7) {
        display_unique_del_player.textContent = "MEI"
    }
    if (control_if == 11 || control_if == 8 || control_if == 9 || control_if == 10) {
        display_unique_del_player.textContent = "ATA"
    }
    let elemento_del_unique = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique.style.display = 'flex'
    let elemento_btn_cor_jogador = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild
    elemento_btn_cor_jogador.classList.remove('saopaulo')

	//delete players_obj[id_btn]

	//let indexForBalanceController
	players_infos.forEach(object =>{
		if(object.position === id_btn){
			balanceController(object.price, 'sale')
			players_infos.splice(players_infos.indexOf(object), 1)
		}
	});
}

//Esta função desabilita todos os botões dos jogadores que não estão comprados
function disableButtons(){
	let disableButton = document.querySelectorAll('.button');
	disableButton.forEach(element => {
		if(!players_obj_btn.includes(element.id)){
			element.setAttribute('disabled', '')
			element.classList.remove('buyButton')
			element.classList.add('disabledButton')
		}
	})
}

//Esta função habilita todos os botões na tela de jogadores
function enableButtons(){
	let enableButton = document.querySelectorAll('.button');
	enableButton.forEach(element => {
		if(element.className.includes('disabledButton')){
			element.removeAttribute('disabled', '')
			element.classList.remove('disabledButton')
			element.classList.add('buyButton')
		}
	})
}

//Esta função habilita os botões quando clicamos na seta de voltar para o campo
function get_backArrow_click() {
    let arrowBacks = document.getElementsByClassName('arrowbackContainer')
    for (let i = 0; i < arrowBacks.length; i++) {
        arrowBacks[i].addEventListener('click', function (event) {
            enableButtons()
        })
    }
}

let j
//Função de venda de um jogador
function sallePlayer(player_id){
	let salleBtn = document.getElementsByClassName('salleButton')
	for (let i = 0; i < salleBtn.length; i++) {
        salleBtn[i].addEventListener('click', function (event) {
			let btnBuyColor = event.target.parentElement.parentElement.children[2].firstElementChild
			btnBuyColor.classList.remove('salleButton')
			btnBuyColor.classList.add('buyButton')
			let posicao = players_obj_btn.indexOf(player_id)
			if(posicao > 0){
				players_obj_btn.splice(posicao, 1)
			}
        })
    }
	let btnBuySaleColor = document.getElementById(player_id).parentElement.parentElement.children[2].firstElementChild
	btnBuySaleColor.classList.remove('salleButton')
	btnBuySaleColor.classList.add('buyButton')


	players_infos.forEach(object =>{
		if(object.id === player_id){
			balanceController(object.price, 'sale')
			players_infos.splice(players_infos.indexOf(object), 1)
		}
	});
}

//Função de compra de um jogador
function joinPlayer(player_id) {
	j = 0
	let div_value_str = player_id + 'value'
    let display_btn_buy = ''
    let display_btn = ''
    let str_btn = 'btn_del_'
    let span_ = 'span_'
    let btn_str_buy = 'btn_buy_'
    pos_player = get_player_click_variable
    str_btn += String(pos_player)
    span_ += String(pos_player)
    btn_str_buy += String(pos_player)
    display_btn = document.getElementById(str_btn)
    display = document.getElementById(span_)
	let retorno = countAvailablePlayers(pos_player)

    if (!display.classList.contains('preenchido')) {
        document.getElementById(span_).className += ' preenchido'
        display.textContent = document.getElementById(player_id).textContent
		player_value = document.getElementById(div_value_str).innerText
        player_value = parseFloat(player_value)
        players_obj = {...players_obj, [pos_player]: player_value}
		balanceController(player_value, 'purchase')
        pos_player = ''

        /*Esta parte faz com que o + no botão do jogador desapareça quando escolhemos um jogador*/
        let elemento = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild.firstElementChild
        elemento.style.display = 'none'
        // o codigo abaixo muda a cor do botao do jogador
        let elemento_btn_cor_jogador = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild
        elemento_btn_cor_jogador.className += ' saopaulo'
		j += 1
		players_obj_btn.push(player_id)

		players_infos.push({position: elemento.id, id: player_id, price: player_value, name: display.textContent})

		if(retorno[j] == undefined || retorno[j] == []){
			disableButtons()
		}

    } else if(display.classList.contains('preenchido') && retorno.length != 0){
		retorno[j].children[2].className+= ' preenchido'
		retorno[j].children[2].textContent = document.getElementById(player_id).textContent
		retorno[j].children[0].firstChild.className += ' saopaulo'
		retorno[j].firstElementChild.firstElementChild.firstElementChild.style.display = 'none'
		player_value = document.getElementById(div_value_str).innerText
        player_value = parseFloat(player_value)
        players_obj = {...players_obj, [retorno[j].id]: player_value, [retorno[j].id + 'x2']: player_id}
		balanceController(player_value, 'purchase')

		players_infos.push({position: retorno[j].id, id: player_id, price: player_value, name: retorno[j].children[2].textContent})

		j += 1 //aqui j é incrementado para que na próxima função de comprar pegue a outra posição livre
		players_obj_btn.push(player_id)

		if(retorno[j] == undefined || retorno[j] == []){
			disableButtons()
		}

	}

	let btnBuySaleColor = document.getElementById(player_id).parentElement.parentElement.children[2].firstElementChild
	btnBuySaleColor.classList.remove('buyButton')
	btnBuySaleColor.classList.add('salleButton')

}

/*Script para deletar todos os jogadores */
/* Esta função é responsável por capturar o click do botão "Limpar Tudo" */
function getClickBtn() {
    let els = document.getElementsByClassName('btnClear')
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (event) {
            resetNames(event.target.id)
        })
    }
}

/*Esta função é responsável por resetar os nomes e a classe preenchido de cada jogador quando clicamos no botão "Limpar Tudo" */
function resetNames() {
    let elemento_btn_cor_jogador_0 = document.getElementById('p_0').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_0.classList.remove('saopaulo')
    let elemento_del_unique_0 = document.getElementById('p_0').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_0.style.display = 'flex'
    let display0 = document.getElementById('span_p_0')
    let displayBtn0 = document.getElementById('btn_del_p_0')
    displayBtn0.style.display = 'none'
    display0.textContent = "GOL"
    display0.classList.remove("preenchido")
    let elemento_btn_cor_jogador_1 = document.getElementById('p_1').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_1.classList.remove('saopaulo')
    let elemento_del_unique_1 = document.getElementById('p_1').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_1.style.display = 'flex'
    let display1 = document.getElementById('span_p_1')
    let displayBtn1 = document.getElementById('btn_del_p_1')
    displayBtn1.style.display = 'none'
    display1.textContent = "ZAG"
    display1.classList.remove("preenchido")
    let elemento_btn_cor_jogador_2 = document.getElementById('p_2').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_2.classList.remove('saopaulo')
    let elemento_del_unique_2 = document.getElementById('p_2').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_2.style.display = 'flex'
    let display2 = document.getElementById('span_p_2')
    let displayBtn2 = document.getElementById('btn_del_p_2')
    displayBtn2.style.display = 'none'
    display2.textContent = "ZAG"
    display2.classList.remove("preenchido")
    let elemento_btn_cor_jogador_3 = document.getElementById('p_3').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_3.classList.remove('saopaulo')
    let elemento_del_unique_3 = document.getElementById('p_3').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_3.style.display = 'flex'
    let display3 = document.getElementById('span_p_3')
    let displayBtn3 = document.getElementById('btn_del_p_3')
    displayBtn3.style.display = 'none'
    display3.textContent = "LAT"
    display3.classList.remove("preenchido")
    let elemento_btn_cor_jogador_4 = document.getElementById('p_4').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_4.classList.remove('saopaulo')
    let elemento_del_unique_4 = document.getElementById('p_4').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_4.style.display = 'flex'
    let display4 = document.getElementById('span_p_4')
    let displayBtn4 = document.getElementById('btn_del_p_4')
    displayBtn4.style.display = 'none'
    display4.textContent = "LAT"
    display4.classList.remove("preenchido")
    let elemento_btn_cor_jogador_5 = document.getElementById('p_5').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_5.classList.remove('saopaulo')
    let elemento_del_unique_5 = document.getElementById('p_5').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_5.style.display = 'flex'
    let display5 = document.getElementById('span_p_5')
    let displayBtn5 = document.getElementById('btn_del_p_5')
    displayBtn5.style.display = 'none'
    display5.textContent = "MEI"
    display5.classList.remove("preenchido")
    let elemento_btn_cor_jogador_6 = document.getElementById('p_6').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_6.classList.remove('saopaulo')
    let elemento_del_unique_6 = document.getElementById('p_6').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_6.style.display = 'flex'
    let display6 = document.getElementById('span_p_6')
    let displayBtn6 = document.getElementById('btn_del_p_6')
    displayBtn6.style.display = 'none'
    display6.textContent = "MEI"
    display6.classList.remove("preenchido")
    let elemento_btn_cor_jogador_7 = document.getElementById('p_7').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_7.classList.remove('saopaulo')
    let elemento_del_unique_7 = document.getElementById('p_7').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_7.style.display = 'flex'
    let display7 = document.getElementById('span_p_7')
    let displayBtn7 = document.getElementById('btn_del_p_7')
    displayBtn7.style.display = 'none'
    display7.textContent = "MEI"
    display7.classList.remove("preenchido")
    let elemento_btn_cor_jogador_8 = document.getElementById('p_8').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_8.classList.remove('saopaulo')
    let elemento_del_unique_8 = document.getElementById('p_8').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_8.style.display = 'flex'
    let display8 = document.getElementById('span_p_8')
    let displayBtn8 = document.getElementById('btn_del_p_8')
    displayBtn8.style.display = 'none'
    display8.textContent = "ATA"
    display8.classList.remove("preenchido")
    let elemento_btn_cor_jogador_9 = document.getElementById('p_9').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_9.classList.remove('saopaulo')
    let elemento_del_unique_9 = document.getElementById('p_9').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_9.style.display = 'flex'
    let display9 = document.getElementById('span_p_9')
    let displayBtn9 = document.getElementById('btn_del_p_9')
    displayBtn9.style.display = 'none'
    display9.textContent = "ATA"
    display9.classList.remove("preenchido")
    let elemento_btn_cor_jogador_10 = document.getElementById('p_10').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_10.classList.remove('saopaulo')
    let elemento_del_unique_10 = document.getElementById('p_10').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_10.style.display = 'flex'
    let display10 = document.getElementById('span_p_10')
    let displayBtn10 = document.getElementById('btn_del_p_10')
    displayBtn10.style.display = 'none'
    display10.textContent = "ATA"
    display10.classList.remove("preenchido")
    let elemento_btn_cor_jogador_11 = document.getElementById('p_11').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_11.classList.remove('saopaulo')
    let elemento_del_unique_11 = document.getElementById('p_11').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_11.style.display = 'flex'
    let display11 = document.getElementById('span_p_11')
    let displayBtn11 = document.getElementById('btn_del_p_11')
    displayBtn11.style.display = 'none'
    display11.textContent = "ATA"
    display11.classList.remove("preenchido")
    let elemento_btn_cor_jogador_12 = document.getElementById('p_12').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_12.classList.remove('saopaulo')
    let elemento_del_unique_12 = document.getElementById('p_12').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_12.style.display = 'flex'
    let display12 = document.getElementById('span_p_12')
    let displayBtn12 = document.getElementById('btn_del_p_12')
    displayBtn12.style.display = 'none'
    display12.textContent = "MEI"
    display12.classList.remove("preenchido")
    let elemento_btn_cor_jogador_13 = document.getElementById('p_13').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_13.classList.remove('saopaulo')
    let elemento_del_unique_13 = document.getElementById('p_13').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_13.style.display = 'flex'
    let display13 = document.getElementById('span_p_13')
    let displayBtn13 = document.getElementById('btn_del_p_13')
    displayBtn13.style.display = 'none'
    display13.textContent = "LAT"
    display13.classList.remove("preenchido")
    let elemento_btn_cor_jogador_14 = document.getElementById('p_14').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_14.classList.remove('saopaulo')
    let elemento_del_unique_14 = document.getElementById('p_14').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_14.style.display = 'flex'
    let display14 = document.getElementById('span_p_14')
    let displayBtn14 = document.getElementById('btn_del_p_14')
    displayBtn14.style.display = 'none'
    display14.textContent = "ZAG"
    display14.classList.remove("preenchido")
    let elemento_btn_cor_jogador_15 = document.getElementById('p_15').firstElementChild.firstElementChild
    elemento_btn_cor_jogador_15.classList.remove('saopaulo')
    let elemento_del_unique_15 = document.getElementById('p_15').firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique_15.style.display = 'flex'
    let display15 = document.getElementById('span_p_15')
    let displayBtn15 = document.getElementById('btn_del_p_15')
    displayBtn15.style.display = 'none'
    display15.textContent = "GOL"
    display15.classList.remove("preenchido")

	for(let i=0; i<6; i++){
		document.getElementsByClassName('balance_available')[i].innerText = '$120.000'
		document.getElementsByClassName('team_price')[i].innerText =  '$0'
		document.getElementsByClassName('balance_available')[i].style.color = '#444444'
	}

	document.getElementById("btn_save").style.backgroundColor = "#66BC2A"
    bal_aval = 120000
    cost_team = 0
	players_obj = {}
	players_obj_btn = []
	players_infos = []
	enableButtons()

}

/*Função que captura o click dos botões de excluir individualmente*/
function getClickDeleteUniqueBtn() {
    let element = document.getElementsByClassName('deletePlayer')
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function (event) {
            del_unique_player(event.path[2].id)
        })
    }
}

/*Função que captura o click dos botões de excluir do banco de reservas individualmente*/
function getClickDeleteUniqueBtn2() {
    let element2 = document.getElementsByClassName('deletePlayerReservation')
    for (var j = 0; j < element2.length; j++) {
        element2[j].addEventListener('click', function (event) {
            del_unique_player(event.path[2].id)
        })
    }
}

/*Esta função checa se já existe jogador escolhido para trocar o modal pelo botão x*/
function checkPlayersForHiddenModal() {
    var playersButtons = document.getElementsByClassName('player')
    for (var i = 0; i < playersButtons.length; i++) {
        playersButtons[i].addEventListener('click', function (event) {
            let span = 'span_'
            let id = event.target.id
            let aElement = document.getElementById(id)
            span += id
            spanElement = document.getElementById(span)
            if (spanElement.className.includes('preenchido')) {
                let href = aElement.firstElementChild.removeAttribute('href')
                let btndel = 'btn_del_'
                btndel += id
                btndelElement = document.getElementById(btndel)
                btndelElement.style.display = 'flex'
            } else if (!spanElement.className.includes('preenchido') && spanElement.textContent == 'ATA') {
                aElement.firstElementChild.setAttribute('href', '#abrirModalStriker')
            }else if(!spanElement.className.includes('preenchido') && spanElement.textContent == 'MEI'){
				aElement.firstElementChild.setAttribute('href', '#abrirModalMidfielder')
			}else if(!spanElement.className.includes('preenchido') && spanElement.textContent == 'ZAG'){
				aElement.firstElementChild.setAttribute('href', '#abrirModalDefender')
			}else if(!spanElement.className.includes('preenchido') && spanElement.textContent == 'GOL'){
				aElement.firstElementChild.setAttribute('href', '#abrirModalGoalkeeper')
			}else if(!spanElement.className.includes('preenchido') && spanElement.textContent == 'LAT'){
				aElement.firstElementChild.setAttribute('href', '#abrirModalBack')
			}
        })
    }
}

function balance_available(discount){

	for(let i=0; i<6; i++){
		element_html_show_balance = document.getElementsByClassName('balance_available')[i].innerText
	}

	//Aqui tenho que remover o $ para ficar só o número e não retornar NaN
	let balanceArray = element_html_show_balance.split('')
	if(balanceArray[0] == '$'){
		balanceArray.shift()
	}

	function removeDots(value){
		return value != '.'
	}

	balanceArray = balanceArray.filter(removeDots)
	element_html_show_balance = balanceArray.join('')
    element_html_show_balance = parseFloat(element_html_show_balance)
    discount = parseFloat(discount)
    bal_aval -= parseFloat(discount)

	for(let j=0; j < 6; j++){
		document.getElementsByClassName('balance_available')[j].innerText = '$' + parseFloat(bal_aval)//.toFixed(3)
	}

    if (element_html_show_balance <= 0){
		for(let k=0; k < 6; k++){
			document.getElementsByClassName('balance_available')[k].style.color = "red"
		}
        document.getElementById("btn_save").style.backgroundColor = '#626262'
    }

	if (element_html_show_balance > 0){
		for(let x=0; x < 6; x++){
			document.getElementsByClassName('balance_available')[x].style.color = "#444444"
		}
        document.getElementById("btn_save").style.backgroundColor = "#66BC2A"
    }

}

function team_price(value_player){
    value_player = parseFloat(value_player)

	if(cost_team == 0){
    	cost_team = value_player
	}else{
		let value1 = parseFloat(value_player)
		let value2 = parseFloat(cost_team)
		let sum = parseFloat(value1) + parseFloat(value2)
		cost_team = sum
	}

	for(let i=0; i<6; i++){
		element_html_show_team_price = document.getElementsByClassName('team_price')[i].innerText
		document.getElementsByClassName('team_price')[i].innerText = '$' + cost_team
	}

    element_html_show_team_price = parseFloat(element_html_show_team_price)

}

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
		let horas = formatTime(hour);
		let minutes = formatTime(min);
		let segundos = formatTime(seconds);
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
	})
}

function formatTime(time) {
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


/*Aqui começa o código que conta os jogadores por posição*/
function countAvailablePlayers(position_num){
	const atackers = []
	for(var i=8; i<12; i++){
		atackers.push(document.getElementById('p_' + i))
	}
	availableAtackers = []
	atackers.forEach(function(position) {
		if(!position.children[2].className.includes('preenchido')){
			availableAtackers.push(position)
		}
	})
	/*====================================================================*/
	const midfielders = []
	for(var i=5; i<8; i++){
		midfielders.push(document.getElementById('p_' + i))
	}
	midfielders.push(document.getElementById('p_12'))
	availableMidfielders = []
	midfielders.forEach(function(position){
		if(!position.children[2].className.includes('preenchido')){
			availableMidfielders.push(position)
		}
	})
	/*====================================================================*/
	const backs = []
	backs.push(document.getElementById('p_3'))
	backs.push(document.getElementById('p_4'))
	backs.push(document.getElementById('p_13'))
	const availableBacks = []
	backs.forEach(function(position){
		if(!position.children[2].className.includes('preenchido')){
			availableBacks.push(position)
		}
	})
	/*====================================================================*/
	const defenders = []
	defenders.push(document.getElementById('p_1'))
	defenders.push(document.getElementById('p_2'))
	defenders.push(document.getElementById('p_14'))
	const availableDefenders = []
	defenders.forEach(function(position){
		if (!position.children[2].className.includes('preenchido')){
			availableDefenders.push(position)
		}
	})
	/*====================================================================*/
	const goalkeepers = []
	goalkeepers.push(document.getElementById('p_0'))
	goalkeepers.push(document.getElementById('p_15'))
	availableGoalkeepers = []
	goalkeepers.forEach(function(position){
		if(!position.children[2].className.includes('preenchido')){
			availableGoalkeepers.push(position)
		}
	})
	/*====================================================================*/

	if(position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_10' || position_num == 'p_11'){
		return availableAtackers
	}
	if(position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_12'){
		return availableMidfielders
	}

	if(position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13'){
		return availableBacks
	}

	if(position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_14'){
		return availableDefenders
	}

	if(position_num == 'p_0' || position_num == 'p_15'){
		return availableGoalkeepers
	}
}
