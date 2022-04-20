/*Chamadas de todas as funções*/
get_player_click_buy()
get_player_click()
getClickBtn()

function get_player_click_buy() {
    var els = document.getElementsByClassName('buyButton')
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (event) {
            joinPlayer(event.target.id)
        })
    }
}

var get_player_click_variable = '';
function get_player_click() {
    var playersBtn = document.getElementsByClassName('player')
    for (var i = 0; i < playersBtn.length; i++) {
        playersBtn[i].addEventListener('click', function (event) {
            return get_player_click_variable = event.target.id
        })
    }
}

/*Esta função é responsável por excluir um jogador individualmente*/
function click_del_unique_player() {
    let del_Btn = document.getElementsByClassName('deletePlayer')
    for (var i = 0; i < playersBtn.length; i++) {
        del_Btn[i].addEventListener('click', function (event) {
            return del_unique_player(event.target.id)
        })
    }
}

// Esta funçao tem como finalidade apagar do campo o jogador que foi clicado
function del_unique_player(id_btn){
    console.log(document.querySelectorAll(`[id="${id_btn}"]`))
    display_field = document.getElementById(str_btn)

}

function joinPlayer(player_id) {

    let display_btn = ''
    let str_btn = 'btn_del_'
    let span_ = 'span_'
    pos_player = get_player_click_variable
    str_btn += String(pos_player)
    span_ += String(pos_player)
    display_btn = document.getElementById(str_btn)
    display_btn.style.display = 'flex'
    display = document.getElementById(span_)

    if (!display.classList.contains('preenchido')){
        document.getElementById(span_).className += ' preenchido'
        display.textContent = document.getElementById(player_id).textContent
        pos_player = ''
    }
}


/*Função responsável por capturar todas as labels com os nomes dos jogadores*/
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
function getClickBtn(){
    let els = document.getElementsByClassName('btnClear')
    for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function (event) {
        resetNames(event.target.id)
    })
    }
}


/*Esta função é responsável por resetar os nomes e a classe preenchido de cada jogador quando clicamos no botão "Limpar Tudo" */
function resetNames(){
    let display0 = document.getElementById('span_p_0')
    let displayBtn0 = document.getElementById('btn_del_p_0')
    displayBtn0.style.display = 'none'
    display0.textContent = "GOL"
    display0.classList.remove("preenchido")
    let display1 = document.getElementById('span_p_1')
    let displayBtn1 = document.getElementById('btn_del_p_1')
    displayBtn1.style.display = 'none'
    display1.textContent = "ZAG"
    display1.classList.remove("preenchido")
    let display2 = document.getElementById('span_p_2')
    let displayBtn2 = document.getElementById('btn_del_p_2')
    displayBtn2.style.display = 'none'
    display2.textContent = "ZAG"
    display2.classList.remove("preenchido")
    let display3 = document.getElementById('span_p_3')
    let displayBtn3 = document.getElementById('btn_del_p_3')
    displayBtn3.style.display = 'none'
    display3.textContent = "LAT"
    display3.classList.remove("preenchido")
    let display4 = document.getElementById('span_p_4')
    let displayBtn4 = document.getElementById('btn_del_p_4')
    displayBtn4.style.display = 'none'
    display4.textContent = "LAT"
    display4.classList.remove("preenchido")
    let display5 = document.getElementById('span_p_5')
    let displayBtn5 = document.getElementById('btn_del_p_5')
    displayBtn5.style.display = 'none'
    display5.textContent = "MEI"
    display5.classList.remove("preenchido")
    let display6 = document.getElementById('span_p_6')
    let displayBtn6 = document.getElementById('btn_del_p_6')
    displayBtn6.style.display = 'none'
    display6.textContent = "MEI"
    display6.classList.remove("preenchido")
    let display7 = document.getElementById('span_p_7')
    let displayBtn7 = document.getElementById('btn_del_p_7')
    displayBtn7.style.display = 'none'
    display7.textContent = "MEI"
    display7.classList.remove("preenchido")
    let display8 = document.getElementById('span_p_8')
    let displayBtn8 = document.getElementById('btn_del_p_8')
    displayBtn8.style.display = 'none'
    display8.textContent = "ATA"
    display8.classList.remove("preenchido")
    let display9 = document.getElementById('span_p_9')
    let displayBtn9 = document.getElementById('btn_del_p_9')
    displayBtn9.style.display = 'none'
    display9.textContent = "ATA"
    display9.classList.remove("preenchido")
    let display10 = document.getElementById('span_p_10')
    let displayBtn10 = document.getElementById('btn_del_p_10')
    displayBtn10.style.display = 'none'
    display10.textContent = "ATA"
    display10.classList.remove("preenchido")
    let display11 = document.getElementById('span_p_11')
    let displayBtn11 = document.getElementById('btn_del_p_11')
    displayBtn11.style.display = 'none'
    display11.textContent = "ATA"
    display11.classList.remove("preenchido")
    let display12 = document.getElementById('span_p_12')
    let displayBtn12 = document.getElementById('btn_del_p_12')
    displayBtn12.style.display = 'none'
    display12.textContent = "MEI"
    display12.classList.remove("preenchido")
    let display13 = document.getElementById('span_p_13')
    let displayBtn13 = document.getElementById('btn_del_p_13')
    displayBtn13.style.display = 'none'
    display13.textContent = "LAT"
    display13.classList.remove("preenchido")
    let display14 = document.getElementById('span_p_14')
    let displayBtn14 = document.getElementById('btn_del_p_14')
    displayBtn14.style.display = 'none'
    display14.textContent = "ZAG"
    display14.classList.remove("preenchido")
    let display15 = document.getElementById('span_p_15')
    let displayBtn15 = document.getElementById('btn_del_p_15')
    displayBtn15.style.display = 'none'
    display15.textContent = "GOL"
    display15.classList.remove("preenchido")
}
