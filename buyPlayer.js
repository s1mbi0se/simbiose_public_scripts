/*Chamadas de todas as funções*/
get_player_click_buy()
get_player_click()
getClickBtn()
getClickDeleteUniqueBtn()
getClickDeleteUniqueBtn2()
checkPlayersForHiddenModal()
get_field_click()

var cost_team = 0.00
var bal_aval = 120.00
var players_obj = {}

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
    var els = document.getElementsByClassName('buyButton')
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (event) {
            joinPlayer(event.target.id)
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
    /*FUNÇÃO TESTE */
    var playersBtn = document.getElementsByClassName('deletePlayer')
    var playersBtnReservation = document.getElementsByClassName('deletePlayerReservation')
    var allBtn = [...playersBtn, ...playersBtnReservation]
    for(i=0; i<allBtn.length; i++){
        let svgBtn = allBtn[i]
        let svgBtnAttr = svgBtn.getAttribute("style")
        //console.log('Botao ', i, svgBtnAttr)
        if(svgBtnAttr == 'display: flex;'){
            allBtn[i].setAttribute('style', 'display: none;')
        }
    }
    /*FUNÇÃO TESTE */

}


// Esta funçao tem como finalidade apagar do campo o jogador que foi clicado .
function del_unique_player(id_btn) {
	cost_team  -= parseFloat(players_obj[id_btn]).toFixed(2)
    bal_aval += parseFloat(players_obj[id_btn].toFixed(2))
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

	document.getElementsByClassName('balance_available')[0].innerText = bal_aval
	document.getElementsByClassName('balance_available')[1].innerText = bal_aval
	document.getElementsByClassName('balance_available')[2].innerText = bal_aval
	document.getElementsByClassName('balance_available')[3].innerText = bal_aval
	document.getElementsByClassName('balance_available')[4].innerText = bal_aval
	document.getElementsByClassName('balance_available')[5].innerText = bal_aval
    document.getElementsByClassName('team_price')[0].innerText =  cost_team
	document.getElementsByClassName('team_price')[1].innerText = cost_team
	document.getElementsByClassName('team_price')[2].innerText = cost_team
	document.getElementsByClassName('team_price')[3].innerText = cost_team
	document.getElementsByClassName('team_price')[4].innerText = cost_team
	document.getElementsByClassName('team_price')[5].innerText = cost_team

}

function joinPlayer(player_id) {
	let div_value_str = player_id + 'value'
    let display_btn_buy = ''
    let display_btn = ''
    let str_btn = 'btn_del_'
    let span_ = 'span_'
    let btn_str_buy = 'btn_buy_'
    pos_player = get_player_click_variable
    //console.log(document.querySelectorAll(`[id="${pos_player}"]`)[3].id)
    str_btn += String(pos_player)
    span_ += String(pos_player)
    btn_str_buy += String(pos_player)
    display_btn = document.getElementById(str_btn)
    /*display_btn.style.display = 'flex'*/
    display = document.getElementById(span_)
    // Condiçao para inserir o jogador no momento ele so válida e nao tiver prenchido entra
    // no if , mas ainda deve procurar outras posiçoes livres caso a primeira esteja ocupada
    if (!display.classList.contains('preenchido')) {
        document.getElementById(span_).className += ' preenchido'
        display.textContent = document.getElementById(player_id).textContent

		player_value = document.getElementById(div_value_str).innerText
        player_value = parseFloat(player_value)
        players_obj = {...players_obj, [pos_player]: player_value}

        balance_available(player_value)
        team_price(player_value)
        //display_btn_buy = document.getElementById('btn_buy_p_1')
        // display_btn_buy.style.background='red'
        pos_player = ''
        /*Esta parte faz com que o + no botão do jogador desapareça quando escolhemos um jogador*/
        let elemento = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild.firstElementChild
        elemento.style.display = 'none'
        // o codigo abaixo mudar a cor do botao do jogador
        let elemento_btn_cor_jogador = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild
        elemento_btn_cor_jogador.className += ' saopaulo'
    }

}


function first_avaliable() {
    let avaliable_players = []
    const players = list_class()
    players.forEach(element => {
        if (!element.className.includes('preenchido')) {
            avaliable_players.push(element.id)
        }
    });

    return avaliable_players.length ? avaliable_players[0] : ''
}


function list_class() {
    let number_tables_div = []
    const getClasses = document.getElementsByClassName('playerName');
    for (i = 0; i < getClasses.length; i++) {
        number_tables_div.push(getClasses[i])
    }
    return number_tables_div
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

	document.getElementsByClassName('balance_available')[0].innerText = parseFloat(120.00.toFixed(2))
	document.getElementsByClassName('balance_available')[1].innerText = parseFloat(120.00.toFixed(2))
	document.getElementsByClassName('balance_available')[2].innerText = parseFloat(120.00.toFixed(2))
	document.getElementsByClassName('balance_available')[3].innerText = parseFloat(120.00.toFixed(2))
	document.getElementsByClassName('balance_available')[4].innerText = parseFloat(120.00.toFixed(2))
	document.getElementsByClassName('balance_available')[5].innerText = parseFloat(120.00.toFixed(2))
    document.getElementsByClassName('team_price')[0].innerText =  parseFloat(0.00.toFixed(2))
	document.getElementsByClassName('team_price')[1].innerText =  parseFloat(0.00.toFixed(2))
	document.getElementsByClassName('team_price')[2].innerText =  parseFloat(0.00.toFixed(2))
	document.getElementsByClassName('team_price')[3].innerText =  parseFloat(0.00.toFixed(2))
	document.getElementsByClassName('team_price')[4].innerText =  parseFloat(0.00.toFixed(2))
	document.getElementsByClassName('team_price')[5].innerText =  parseFloat(0.00.toFixed(2))
    document.getElementById("btn_save").style.backgroundColor = "#66BC2A"
    document.getElementsByClassName('balance_available')[0].style.color = "black"
	document.getElementsByClassName('balance_available')[1].style.color = "black"
	document.getElementsByClassName('balance_available')[2].style.color = "black"
	document.getElementsByClassName('balance_available')[3].style.color = "black"
	document.getElementsByClassName('balance_available')[4].style.color = "black"
	document.getElementsByClassName('balance_available')[5].style.color = "black"

    bal_aval = parseFloat(0.00.toFixed(2))
    cost_team = parseFloat(0.00.toFixed(2))
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
    element_html_show_balance = document.getElementsByClassName('balance_available')[0].innerText
	element_html_show_balance = document.getElementsByClassName('balance_available')[1].innerText
	element_html_show_balance = document.getElementsByClassName('balance_available')[2].innerText
	element_html_show_balance = document.getElementsByClassName('balance_available')[3].innerText
	element_html_show_balance = document.getElementsByClassName('balance_available')[4].innerText
	element_html_show_balance = document.getElementsByClassName('balance_available')[5].innerText

    element_html_show_balance = parseFloat(element_html_show_balance)
    discount = parseFloat(discount.toFixed(2))
    bal_aval = parseFloat(bal_aval.toFixed(2))
    element_html_show_balance -=  parseFloat(discount.toFixed(2))

    bal_aval -= parseFloat(discount.toFixed(2))

    document.getElementsByClassName('balance_available')[0].innerText = parseFloat(element_html_show_balance.toFixed(2))
	document.getElementsByClassName('balance_available')[1].innerText = parseFloat(element_html_show_balance.toFixed(2))
	document.getElementsByClassName('balance_available')[2].innerText = parseFloat(element_html_show_balance.toFixed(2))
	document.getElementsByClassName('balance_available')[3].innerText = parseFloat(element_html_show_balance.toFixed(2))
	document.getElementsByClassName('balance_available')[4].innerText = parseFloat(element_html_show_balance.toFixed(2))
	document.getElementsByClassName('balance_available')[5].innerText = parseFloat(element_html_show_balance.toFixed(2))
    if (element_html_show_balance<=0){
        document.getElementsByClassName('balance_available')[0].style.color = "red"
		document.getElementsByClassName('balance_available')[1].style.color = "red"
		document.getElementsByClassName('balance_available')[2].style.color = "red"
		document.getElementsByClassName('balance_available')[3].style.color = "red"
		document.getElementsByClassName('balance_available')[4].style.color = "red"
		document.getElementsByClassName('balance_available')[5].style.color = "red"
        document.getElementById("btn_save").style.backgroundColor = "gray"
    }

}

function team_price(value_player){
    value_player = parseFloat(value_player)
    cost_team += value_player
    element_html_show_team_price = document.getElementsByClassName('team_price')[0].innerText
	element_html_show_team_price = document.getElementsByClassName('team_price')[1].innerText
	element_html_show_team_price = document.getElementsByClassName('team_price')[2].innerText
	element_html_show_team_price = document.getElementsByClassName('team_price')[3].innerText
	element_html_show_team_price = document.getElementsByClassName('team_price')[4].innerText
	element_html_show_team_price = document.getElementsByClassName('team_price')[5].innerText
    element_html_show_team_price = parseFloat(element_html_show_team_price)
    document.getElementsByClassName('team_price')[0].innerText = cost_team
	document.getElementsByClassName('team_price')[1].innerText = cost_team
	document.getElementsByClassName('team_price')[2].innerText = cost_team
	document.getElementsByClassName('team_price')[3].innerText = cost_team
	document.getElementsByClassName('team_price')[4].innerText = cost_team
	document.getElementsByClassName('team_price')[5].innerText = cost_team
}
