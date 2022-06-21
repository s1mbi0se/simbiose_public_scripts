/*Chamadas de todas as funções*/
callAllFunctions()
statusFilter()
orderFilter()

function callAllFunctions(){
	get_player_click_buy()
	get_player_click()
	getClickBtn()
	getClickDeleteUniqueBtn()
	getClickDeleteUniqueBtn2()
	checkPlayersForHiddenModal()
	get_field_click()
	get_backArrow_click()
	searchPlayer()
	getCaptainInEdit()
}


let cost_team = 0
let bal_aval = 120000
let players_obj = {}
let players_obj_btn = []
let players_infos = [{}]
players_infos.shift()
let table_round_id = 1
let save_formation = '4-3-3'
var identifier_current_lineup= 0

//A funçao abaixo serve pare monitorar o input do nome da escalação. Caso o nome esteja vazio o modal não é redirecionado
let confirmNameModalBtn = document.getElementsByClassName('confirmNameModalBtn')
confirmNameModalBtn[0].addEventListener('click', function(){
	let inputNameModal = document.getElementsByClassName('inputConfirmNameModal')
	if(inputNameModal[0].value == ''){
		inputNameModal[0].setAttribute('placeholder', 'Digite um nome para a escalação')
		confirmNameModalBtn[0].children[0].setAttribute('href', '#confirmNameModal')
	}else{
		confirmNameModalBtn[0].children[0].setAttribute('href', '#saveLineupModal')
		saveLineup()
	}
})







function searchPlayer(){

	let searchStrikerPlayerInput = document.getElementById('searchStrikerPlayerInput')
	let searchMidfielderPlayerInput = document.getElementById('searchMidfielderPlayerInput')
	let searchGoalkeeperPlayerInput = document.getElementById('searchGoalkeeperPlayerInput')
	let searchDefenderPlayerInput = document.getElementById('searchDefenderPlayerInput')
	let searchBackPlayerInput = document.getElementById('searchBackPlayerInput')
	//TO-DO
	searchStrikerPlayerInput.addEventListener('keyup', function(){
		let strikerContainer = document.getElementsByClassName('insideinfoPlayerContainerStriker')
		let allStrikerPlayers = strikerContainer[0].children
		for(let j=0; j<allStrikerPlayers.length; j++){
			if(!(allStrikerPlayers[j].children[0].children[1].children[0].textContent.includes(searchStrikerPlayerInput.value) || allStrikerPlayers[j].children[0].children[1].children[1].children[2].textContent.includes(searchStrikerPlayerInput.value))){
				allStrikerPlayers[j].style.display = 'none'
			}else{
				allStrikerPlayers[j].style.display = 'block'
			}
		}
	})

	searchMidfielderPlayerInput.addEventListener('keyup', function(){
		let MidfielderContainer = document.getElementsByClassName('insideinfoPlayerContainerMidfielder')
		let allMidfieldersPlayers = MidfielderContainer[0].children
		for(let j=0; j<allMidfieldersPlayers.length; j++){
			if(!(allMidfieldersPlayers[j].children[0].children[1].children[0].textContent.includes(searchMidfielderPlayerInput.value) || allMidfieldersPlayers[j].children[0].children[1].children[1].children[2].textContent.includes(searchMidfielderPlayerInput.value))){
				allMidfieldersPlayers[j].style.display = 'none'
			}else{
				allMidfieldersPlayers[j].style.display = 'block'
			}
		}
	})

	searchGoalkeeperPlayerInput.addEventListener('keyup', function(){
		let goalkeeperContainer = document.getElementsByClassName('insideinfoPlayerContainerGoalkeeper')
		let allGoalkeepersPlayers = goalkeeperContainer[0].children
		for(let j=0; j<allGoalkeepersPlayers.length; j++){
			if(!(allGoalkeepersPlayers[j].children[0].children[1].children[0].textContent.includes(searchGoalkeeperPlayerInput.value) || allGoalkeepersPlayers[j].children[0].children[1].children[1].children[2].textContent.includes(searchGoalkeeperPlayerInput.value))){
				allGoalkeepersPlayers[j].style.display = 'none'
			}else{
				allGoalkeepersPlayers[j].style.display = 'block'
			}
		}
	})

	searchDefenderPlayerInput.addEventListener('keyup', function(){
		let defenderContainer = document.getElementsByClassName('insideinfoPlayerContainerDefender')
		let allDefendersPlayers = defenderContainer[0].children
		for(let j=0; j<allDefendersPlayers.length; j++){
			if(!(allDefendersPlayers[j].children[0].children[1].children[0].textContent.includes(searchDefenderPlayerInput.value) || allDefendersPlayers[j].children[0].children[1].children[1].children[2].textContent.includes(searchDefenderPlayerInput.value))){
				allDefendersPlayers[j].style.display = 'none'
			}else{
				allDefendersPlayers[j].style.display = 'block'
			}
		}
	})

	searchBackPlayerInput.addEventListener('keyup', function(){
		let backContainer = document.getElementsByClassName('insideinfoPlayerContainerBack')
		let allBacksPlayers = backContainer[0].children
		for(let j=0; j<allBacksPlayers.length; j++){
			if(!(allBacksPlayers[j].children[0].children[1].children[0].textContent.includes(searchBackPlayerInput.value) || allBacksPlayers[j].children[0].children[1].children[1].children[2].textContent.includes(searchBackPlayerInput.value))){
				allBacksPlayers[j].style.display = 'none'
			}else{
				allBacksPlayers[j].style.display = 'block'
			}
		}
	})
}

function resetSearchInput(position){
	/*Aqui eu limpo o input de pesquisa dos jogadores*/
	document.getElementById('searchStrikerPlayerInput').value = ''
	document.getElementById('searchMidfielderPlayerInput').value = ''
	document.getElementById('searchGoalkeeperPlayerInput').value = ''
	document.getElementById('searchDefenderPlayerInput').value = ''
	document.getElementById('searchBackPlayerInput').value = ''

	/*Aqui eu seto novamente o display block nos jogadores que estavam escondidos*/
	switch(position){
		case 'Atacantes':
			let strikerContainer = document.getElementsByClassName('insideinfoPlayerContainerStriker')
			let allStrikerPlayers = strikerContainer[0].children
			for(let j=0; j<allStrikerPlayers.length; j++){
				allStrikerPlayers[j].style.display = 'block'
			}
			break;
		case 'Meias':
			let midfielderContainer = document.getElementsByClassName('insideinfoPlayerContainerMidfielder')
			let allMidfieldersPlayers = midfielderContainer[0].children
			for(let j=0; j<allMidfieldersPlayers.length; j++){
				allMidfieldersPlayers[j].style.display = 'block'
			}
			break;
		case 'Laterais':
			let backContainer = document.getElementsByClassName('insideinfoPlayerContainerBack')
			let allBackPlayers = backContainer[0].children
			for(let j=0; j<allBackPlayers.length; j++){
				allBackPlayers[j].style.display = 'block'
			}
			break;
		case 'Zagueiros':
			let defenderContainer = document.getElementsByClassName('insideinfoPlayerContainerDefender')
			let allDefendersPlayers = defenderContainer[0].children
			for(let j=0; j<allDefendersPlayers.length; j++){
				allDefendersPlayers[j].style.display = 'block'
			}
			break;
		case 'Goleiros':
			let goalkeeperContainer = document.getElementsByClassName('insideinfoPlayerContainerGoalkeeper')
			let allGoalkeepersPlayers = goalkeeperContainer[0].children
			for(let j=0; j<allGoalkeepersPlayers.length; j++){
				allGoalkeepersPlayers[j].style.display = 'block'
			}
			break;
	}
}

function getCaptain(){
	let players = document.getElementsByClassName('playerContainer')
	let delBtn = document.getElementsByClassName('deletePlayer')
	let finalPosition = ''
	for(let i=0; i<players.length; i++){
		delBtn[i].addEventListener(('click'), function(){
			let test = event.path[1].id
			let test2 = test.split('_')
			finalPosition = 'span_' + test2[2] + '_' + test2[3]
		})
		players[i].addEventListener('click', function(event){
			let position = event.target.id
			let positionString = position.split('_')
			if(positionString[0] == 'p'){
				finalPosition = 'span_' + positionString[0] + '_' + positionString[1]
			}else if (positionString[0] == 'span'){
				finalPosition = positionString[0] + '_' + positionString[1] + '_' + positionString[2]
			}

			let player = document.getElementById(finalPosition)
			if(player.className.includes('preenchido')){
				if(event.target.parentNode.parentNode.children[3].getAttribute('style') == null ||  event.target.parentNode.parentNode.children[3].getAttribute('style') == 'display: none;'){
					event.target.parentNode.parentNode.children[3].setAttribute('style', 'display: flex;')
				} else if(event.target.parentNode.parentNode.children[3].getAttribute('style') == 'background-color: #F8B655; display: flex'){
					event.target.parentNode.parentNode.children[3].setAttribute('style', 'background-color: #F8B655; display: flex;')
				} else if(event.target.parentNode.parentNode.children[3].getAttribute('style') == 'background-color: #FFFFFF; display: none;'){
					event.target.parentNode.parentNode.children[3].setAttribute('style', 'display: flex;')
				}
			}

			if(event.path[0].className != 'captainContainer captain'){
				let captainContainer = document.getElementsByClassName('captainContainer')
				for(let j=0; j<captainContainer.length; j++){
					if(captainContainer[j].parentNode.id != event.target.id){
						let captainContainerAttr = captainContainer[j].getAttribute("style")
						 if(captainContainerAttr == 'display: flex;'){
							captainContainer[j].setAttribute('style', 'display: none;')
						}
					}
				}
			}

		})
	}

	let captainContainer = document.getElementsByClassName('captainContainer')
	for(let x=0; x<captainContainer.length; x++){
		captainContainer[x].addEventListener('click', function(){
			if(!captainContainer[x].getAttribute('style').includes('#F8B655')){
				captainContainer[x].setAttribute('style', 'background-color: #F8B655; display: flex;')
				captainContainer[x].parentNode.children[0].children[0].classList.add('captain')
			}else{
				captainContainer[x].parentNode.children[0].children[0].classList.remove('captain')
				captainContainer[x].setAttribute('style', 'background-color: #FFFFFF; display: none;')
			}

			//Aqui vou ter que varrer todos os captainContainers para verificar se já existe outro capitão e tornar ele um jogador comum
			for(let y=0; y<11; y++){
				//Esse for varre todos os captains containers. Aqui tenho que verificar se existe outro captain container amarelo e se ele existe, se o id dele é igual ao do cara que acabei de clicar. se o id for diferente, transformo o outro em branco e o que cliquei agora amarelo
				if(captainContainer[y].getAttribute('style') == 'background-color: #F8B655; display: flex;'){
					if(captainContainer[y].parentNode.id != captainContainer[x].parentNode.id){
						captainContainer[y].parentNode.children[0].children[0].classList.remove('captain')
						captainContainer[y].setAttribute('style', 'background-color: #FFFFFF; display: none;')
					}
				}
			}
		})
	}
}

function resetLabelsPlayers(){
	let playersContainers = document.getElementsByClassName('playerContainer')
	for (let i = 0; i < playersContainers.length; i++) {
		if (playersContainers[i].children[2].parentNode.className.includes('defender') && !playersContainers[i].children[2].className.includes('preenchido')) {
			playersContainers[i].children[2].textContent = 'ZAG'
		}
		if (playersContainers[i].children[2].parentNode.className.includes('leftBack') && !playersContainers[i].children[2].className.includes('preenchido')) {
			playersContainers[i].children[2].textContent = 'LAT'
		}
		if (playersContainers[i].children[2].parentNode.className.includes('rightBack') && !playersContainers[i].children[2].className.includes('preenchido')) {
			playersContainers[i].children[2].textContent = 'LAT'
		}
		if (playersContainers[i].children[2].parentNode.className.includes('midfielder') && !playersContainers[i].children[2].className.includes('preenchido')) {
			playersContainers[i].children[2].textContent = 'MEI'
		}
		if (playersContainers[i].children[2].parentNode.className.includes('attacker') && !playersContainers[i].children[2].className.includes('preenchido')) {
			playersContainers[i].children[2].textContent = 'ATA'
		}
	}
}


let playerContainer = document.getElementsByClassName('playerContainer')
let formationSelect = document.getElementsByClassName('formation')
formationSelect[0].addEventListener('change', save_lineups)
formationSelect[0].addEventListener('change', resetNames)
let formation343 = ['defender_One3-4-3', 'defender_Two3-4-3', 'defender_Three3-4-3', 'midfielder_One3-4-3', 'midfielder_Two3-4-3', 'midfielder_Three3-4-3', 'midfielder_Four3-4-3', 'attacker_One3-4-3', 'attacker_Two3-4-3', 'attacker_Three3-4-3']
let formation433 = ['defender_One4-3-3', 'defender_Two4-3-3', 'leftBack_4-3-3', 'rightBack_4-3-3', 'midfielder_One4-3-3', 'midfielder_Two4-3-3', 'midfielder_Three4-3-3', 'attacker_One4-3-3', 'attacker_Two4-3-3', 'attacker_Three4-3-3']
let formation352 = ['defender_One3-5-2', 'defender_Two3-5-2', 'defender_Three3-5-2', 'midfielder_One3-5-2', 'midfielder_Two3-5-2', 'midfielder_Three3-5-2', 'midfielder_Four3-5-2', 'midfielder_Five3-5-2', 'attacker_One3-5-2', 'attacker_Two3-5-2']
let formation424 = ['defender_One4-2-4', 'defender_Two4-2-4', 'leftBack_4-2-4', 'rightBack_4-2-4', 'midfielder_One4-2-4', 'midfielder_Two4-2-4', 'attacker_One4-2-4', 'attacker_Two4-2-4', 'attacker_Three4-2-4', 'attacker_Four4-2-4']
let formation442 = ['defender_One4-4-2', 'defender_Two4-4-2', 'leftBack_4-4-2', 'rightBack_4-4-2', 'midfielder_One4-4-2', 'midfielder_Two4-4-2', 'midfielder_Three4-4-2', 'midfielder_Four4-4-2', 'attacker_One4-4-2', 'attacker_Two4-4-2']
let formation451 = ['defender_One4-5-1', 'defender_Two4-5-1', 'leftBack_4-5-1', 'rightBack_4-5-1', 'midfielder_One4-5-1', 'midfielder_Two4-5-1', 'midfielder_Three4-5-1', 'midfielder_Four4-5-1', 'midfielder_Five4-5-1', 'attacker_One4-5-1']
let formation532 = ['defender_One5-3-2', 'defender_Two5-3-2', 'defender_Three5-3-2', 'leftBack_5-3-2', 'rightBack_5-3-2', 'midfielder_One5-3-2', 'midfielder_Two5-3-2', 'midfielder_Three5-3-2', 'attacker_One5-3-2', 'attacker_Two5-3-2']
let formation541 = ['defender_One5-4-1', 'defender_Two5-4-1', 'defender_Three5-4-1', 'leftBack_5-4-1', 'rightBack_5-4-1', 'midfielder_One5-4-1', 'midfielder_Two5-4-1', 'midfielder_Three5-4-1', 'midfielder_Four5-4-1', 'attacker_One5-4-1']
save_lineups()

function save_lineups() {
	let backReservation = document.getElementsByClassName('full-backReservation')
	//let reservationsPlayers = document.getElementsByClassName('playersReservations')
	//let aditionalMidfielderReservation = reservationsPlayers[0].children[2]
	switch (formationSelect[0].value){
		case '3-4-3':
			formations = formation343
			backReservation[0].children[0].children[0].style.backgroundColor = '#F8B655'
			//backReservation[0].style.display = 'none'
			break;
		case '4-3-3':
			formations = formation433
			backReservation[0].children[0].children[0].style.backgroundColor = '#33E130'
			//backReservation[0].style.display = 'flex'
			break;
		case '3-5-2':
			formations = formation352
			backReservation[0].children[0].children[0].style.backgroundColor = '#F8B655'
			//backReservation[0].style.display = 'none'
			break;
		case '4-2-4':
			formations = formation424
			backReservation[0].children[0].children[0].style.backgroundColor = '#33E130'
			//backReservation[0].style.display = 'flex'
			break;
		case '4-4-2':
			formations = formation442
			backReservation[0].children[0].children[0].style.backgroundColor = '#33E130'
			//backReservation[0].style.display = 'flex'
			break;
		case '4-5-1':
			formations = formation451
			backReservation[0].children[0].children[0].style.backgroundColor = '#33E130'
			//backReservation[0].style.display = 'flex'
			break;
		case '5-3-2':
			formations = formation532
			backReservation[0].children[0].children[0].style.backgroundColor = '#33E130'
			//backReservation[0].style.display = 'flex'
			break;
		case '5-4-1':
			formations = formation541
			backReservation[0].children[0].children[0].style.backgroundColor = '#33E130'
			//backReservation[0].style.display = 'flex'
			break;
	}

	for (let i = 1; i < 11; i++) {
		let nameClass = playerContainer[i].className.split(' ')
		playerContainer[i].classList.replace(nameClass[1], formations[i - 1]);
	}


	save_formation = formationSelect[0].value
	resetLabelsPlayers()
}




let numIdentifier = window.location.href
numIdentifier = numIdentifier.toString()
numIdentifier = numIdentifier.split('/')
numIdentifier = numbersOnly(numIdentifier[numIdentifier.length - 1])

function getCaptainInEdit(){
	let numIdentifier = window.location.href
	numIdentifier = numIdentifier.toString()
	numIdentifier = numIdentifier.split('/')
	numIdentifier = numbersOnly(numIdentifier[numIdentifier.length - 1])

	executeAction('query-select-captain-position-field', null, {identifier: numIdentifier}).then((result) => {
		if (window.location.href.includes('/fantasy-lineup-edit/')){
			let p_captain_position = result[0] != 'S' ? result[0].lineups_players__position_field : 0
			if(p_captain_position != 0 ){
				let captain = document.getElementById(p_captain_position)
				captain.children[0].children[0].classList.add('captain')
				captain.children[3].setAttribute('style', 'background-color: #F8B655; display: flex;')
			}
		}
	}).catch(err => console.log(err))
}

 executeAction('query-select-table-rules', null, {identifier: numIdentifier}).then((result) => {
	 	console.log('result', result)
	 	console.log('result[0]', result[0])
	 	console.log('result[0].table_rules__captain', result[0].table_rules__captain)
        if(result[0].table_rules__captain == 1 || result == 'Success' || result[0] == undefined){
			getCaptain()
		}
    }).catch(err => console.log(err))
/*A funçao abaixo e acionada quando clicamos no botao de salvar a escalacao*/


function saveLineup() {
	if (window.location.href.includes('/fantasy-lineup-edit/')){
		save_lineup_edit()
	}else {
		//Aqui eu pego o texto digitado no input de nome da formação
		let inputConfirmNameModal = document.getElementsByClassName('inputConfirmNameModal')[0].value

		let captainPlayer = ''
		//Esta parte da função serve para pegar o jogador capitão
		let allTitularPlayers = document.getElementsByClassName('playerContainer')
		for(let i=0; i<allTitularPlayers.length; i++){
			if(allTitularPlayers[i].children[0].children[0].className.includes('captain')){
				captainPlayer = allTitularPlayers[i].id
			}
		}
		for(let j=0; j<players_infos.length; j++){
			if(players_infos[j].position == captainPlayer){
				captainPlayer = players_infos[j].id
			}
		}
		//Aqui acaba a parte que pega o capitão
		//Tenho que salvar o captainPlayer (id do jogador) dentro de lineups__captain
		//table_rules__captain tem que ser igual a 1

		let length_list_save = players_infos.length
		let free_pos = 16 - length_list_save
		for (let i = 0; i < free_pos; i++) {
			players_infos.push({id: null})

		}
		let url = '';
		let div_table_round_id = document.getElementsByClassName('div_table_round_id')
		table_round_id = parseInt(div_table_round_id[0].textContent)
		//Aqui eu crio um array e populo com todas as posições do campo p_1, p_2... até p_15
		let positionsArr = []
		for(let x=0; x<16; x++){
			positionsArr.push(`p_${x}`)
		}

		//Aqui eu varro o array criado acima removendo dele as posiçoes que tenho jogadores comprados
		for(let y=0; y<players_infos.length; y++){
			for(let k=0; k<positionsArr.length; k++){
				if(positionsArr[k] == players_infos[y].position){
					positionsArr.splice(k, 1)
				}
			}
		}

		//Aqui tenho que inserir onde não tenho jogador comprado, o id=0 e cada position do array acima
		let pos = 16 - parseInt(positionsArr.length)
		for(let o=0; o<16; o++){
			if(!players_infos[o].id){
				players_infos[o].id = 0
				players_infos[o].position = positionsArr[o - pos]
			}
		}

		if (window.location.host == 'fantasy.localhost:3004') {
			let domain = window.location.origin.split(`:3004`)[0];
			let port = 8000;
			url = `${domain}:${port}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
		}else if(window.location.host == 'fantasydev.simbioseventures.com'){
			let domain = 'https://apidjangodev.simbioseventures.com'
			url = `${domain}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
		}else if(window.location.host == 'fantasystage.simbioseventures.com'){
			let domain = 'https://fastcrudapistage.simbioseventures.com/'
			url = `${domain}/screens/fantasy-lineup-save/9/fantasy-lineup-save?mode=api`
		}
		let autorizationToken = JSON.parse(localStorage.fct).accessToken
		let postParameters = {
			data: {
				"subscribe_users__user_id-0": '{current_user}',
				"subscribe_users__table_round_id-0": table_round_id,
				"lineups__user_fantasy_id-0": '{current_user}',
				"lineups__table_round_id-0": table_round_id,
				"lineups__formation-0": save_formation,
				"lineups__captain-0": captainPlayer,
				"lineups__lineup_name-0": inputConfirmNameModal,
				"lineups_players__player_id-0": players_infos[0].id,
				"lineups_players__position_field-0": players_infos[0].position,
				"lineups_players__player_id-1": players_infos[1].id,
				"lineups_players__position_field-1": players_infos[1].position,
				"lineups_players__player_id-2": players_infos[2].id,
				"lineups_players__position_field-2": players_infos[2].position,
				"lineups_players__player_id-3": players_infos[3].id,
				"lineups_players__position_field-3": players_infos[3].position,
				"lineups_players__player_id-4": players_infos[4].id,
				"lineups_players__position_field-4": players_infos[4].position,
				"lineups_players__player_id-5": players_infos[5].id,
				"lineups_players__position_field-5": players_infos[5].position,
				"lineups_players__player_id-6": players_infos[6].id,
				"lineups_players__position_field-6": players_infos[6].position,
				"lineups_players__player_id-7": players_infos[7].id,
				"lineups_players__position_field-7": players_infos[7].position,
				"lineups_players__player_id-8": players_infos[8].id,
				"lineups_players__position_field-8": players_infos[8].position,
				"lineups_players__player_id-9": players_infos[9].id,
				"lineups_players__position_field-9": players_infos[9].position,
				"lineups_players__player_id-10": players_infos[10].id,
				"lineups_players__position_field-10": players_infos[10].position,
				"lineups_players__player_id-11": players_infos[11].id,
				"lineups_players__position_field-11": players_infos[11].position,
				"lineups_players__player_id-12": players_infos[12].id,
				"lineups_players__position_field-12": players_infos[12].position,
				"lineups_players__player_id-13": players_infos[13].id,
				"lineups_players__position_field-13": players_infos[13].position,
				"lineups_players__player_id-14": players_infos[14].id,
				"lineups_players__position_field-14": players_infos[14].position,
				"lineups_players__player_id-15": players_infos[15].id,
				"lineups_players__position_field-15": players_infos[15].position,
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
			.then( response => response.json() )
			.then( response => {

			});
	}

	}

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
	let captainContainer = document.getElementsByClassName('captainContainer')
    for (var i = 0; i < field.length; i++) {
        field[i].addEventListener('click', function (event) {
            if (event.target.id == '') {
                for (i = 0; i < botoes.length; i++) {
                    botoes[i].style.display = 'none'
                }
				if(event.path[0].tagName != 'DIV'){
					for (let j=0; j<captainContainer.length; j++){

						if(!captainContainer[j].parentNode.children[0].children[0].className.includes('captain')){
							//captainContainer[j].style.display = 'none'
							captainContainer[j].setAttribute('style', 'background-color: #FFFFFF; display: none;')
						}
					}
				}
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
				let statusPlayer = els[i].parentNode.parentNode.parentNode.children[1].children[1].children[0].children[1].className
				joinPlayer(event.target.id, statusPlayer)
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

let table_id = ''
let tableidentifier = window.location.href
tableidentifier = tableidentifier.toString()
tableidentifier = tableidentifier.split('/')
tableidentifier = numbersOnly(tableidentifier[tableidentifier.length - 1])
if(window.location.href.includes('/fantasy-lineup-edit/')){
	executeAction('query-select-table-round-id', null, {identifier: tableidentifier}).then((result) => {
		table_id = result[0].table_rounds__table_round_id
	}).catch(err => console.log(err))
}
let viewLineupBtnEdit = document.getElementsByClassName('viewLineupBtn')
viewLineupBtnEdit[0].addEventListener('click', function (){
	let link = ''
	if (window.location.host == 'fantasy.localhost:3004') {
			link = 'http://fantasy.localhost:3004/fantasy-minhas-ligas-visualizar/' + table_id
		}else if(window.location.host == 'fantasydev.simbioseventures.com'){
			link = 'http://fantasydev.simbioseventures.com/fantasy-minhas-ligas-visualizar/' + table_id
		}else if(window.location.host == 'fantasystage.simbioseventures.com'){
			link = 'http://fantasystage.simbioseventures.com/fantasy-minhas-ligas-visualizar/' + table_id
		}

	window.location.href = link
})

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
	if(formationSelect[0].value == '3-4-3' || formationSelect[0].value == '3-5-2'){
		if (control_if == 15 || control_if == 0) {
			display_unique_del_player.textContent = "GOL"
		}
		if (control_if == 14 || control_if == 2 || control_if == 1) {
			display_unique_del_player.textContent = "ZAG"
		}
		if (control_if == 3 || control_if == 4) {
			display_unique_del_player.textContent = "LAT"
		}
		if (control_if == 12 || control_if == 5 || control_if == 6 || control_if == 7 || control_if == 13) {
			display_unique_del_player.textContent = "MEI"
		}
		if (control_if == 11 || control_if == 8 || control_if == 9 || control_if == 10) {
			display_unique_del_player.textContent = "ATA"
		}
	}else{
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
	}
    let elemento_del_unique = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild.firstElementChild
    elemento_del_unique.style.display = 'flex'
    let elemento_btn_cor_jogador = document.getElementById(get_player_click_variable).firstElementChild.firstElementChild
    elemento_btn_cor_jogador.classList.remove('saopaulo')

	//Aqui removo os botões de alert e captain
	let btn = document.getElementById(elemento_del_unique.id)
	btn.children[3].removeAttribute('style')
	btn.children[0].children[0].classList.remove('captain')
	btn.children[4].setAttribute('style', 'display:none')
	btn.children[0].children[0].classList.remove('alert')


	/*Return green color in button inside modal*/
	let player_id = ''
	players_infos.forEach(object =>{
		if(id_btn == object.position){
			player_id = object.id
		}
	});
	let btnBuySaleColor = document.getElementById(player_id).parentElement.parentElement.children[2].firstElementChild
	btnBuySaleColor.classList.remove('salleButton')
	btnBuySaleColor.classList.add('buyButton')

	//delete players_obj[id_btn]

	players_obj_btn.forEach(object =>{
		if(object == player_id){
			players_obj_btn.splice(players_obj_btn.indexOf(object), 1)
		}

	});

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
			resetSearchInput(arrowBacks[i].parentNode.children[1].children[0].textContent)
        })
    }
}

function resetPlayer(position){
	let player = document.getElementById(position)
	player.children[0].children[0].classList.remove('saopaulo')
	player.children[2].classList.remove('preenchido')
	player.children[0].children[0].children[0].style.display = 'flex'

	if(formationSelect[0].value == '4-3-3'){
		if(position == 'p_10' || position == 'p_8' || position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_5' || position == 'p_6' || position == 'p_7' || position == 'p_12'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_3' || position == 'p_4' || position == 'p_13'){
			player.children[2].textContent = 'LAT'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '3-4-3'){
		if(position == 'p_10' || position == 'p_8' || position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_4' || position == 'p_5' || position == 'p_6' || position == 'p_7' || position == 'p_12' || position == 'p_13'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_3'|| position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '3-5-2'){
		if(position == 'p_8' || position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_4' || position == 'p_5' || position == 'p_6' || position == 'p_7' || position == 'p_10'|| position == 'p_12' || position == 'p_13'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_3'|| position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '4-2-4'){
		if(position == 'p_7' || position == 'p_10' || position == 'p_8' || position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_5' || position == 'p_6' || position == 'p_12'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_3' || position == 'p_4' || position == 'p_13'){
			player.children[2].textContent = 'LAT'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '4-4-2'){
		if(position == 'p_8' || position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_5' || position == 'p_6' || position == 'p_7' || position == 'p_10'|| position == 'p_12'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_3' || position == 'p_4' || position == 'p_13'){
			player.children[2].textContent = 'LAT'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '4-5-1'){
		if(position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_5' || position == 'p_6' || position == 'p_7' || position == 'p_10'|| position == 'p_8' || position == 'p_12'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_3' || position == 'p_4' || position == 'p_13'){
			player.children[2].textContent = 'LAT'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '5-3-2'){
		if(position == 'p_8' ||position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_6' || position == 'p_7' || position == 'p_10'|| position == 'p_12'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_3' || position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_5' || position == 'p_4' || position == 'p_13'){
			player.children[2].textContent = 'LAT'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}
	if(formationSelect[0].value == '5-4-1'){
		if(position == 'p_9' || position == 'p_11'){
			player.children[2].textContent = 'ATA'
		}
		if(position == 'p_6' || position == 'p_7' || position == 'p_10'|| position == 'p_8' || position == 'p_12'){
			player.children[2].textContent = 'MEI'
		}
		if(position == 'p_1' || position == 'p_2' || position == 'p_3' || position == 'p_14'){
			player.children[2].textContent = 'ZAG'
		}
		if(position == 'p_5' || position == 'p_4' || position == 'p_13'){
			player.children[2].textContent = 'LAT'
		}
		if(position == 'p_0' || position == 'p_15'){
			player.children[2].textContent = 'GOL'
		}
	}

}

let j
//Função de venda de um jogador
function sallePlayer(player_id){
	let player_id_conserved = player_id
	for(let x=0; x<players_infos.length; x++){
		if(players_infos[x].id == player_id){
			player_id = players_infos[x].position
		}
	}

	let btn = document.getElementById(player_id)
	//Remove o CaptainContainer
	btn.children[3].removeAttribute('style')
	btn.children[0].children[0].classList.remove('captain')
	//Remove o AlertContainer
	btn.children[4].setAttribute('style', 'display:none')
	btn.children[0].children[0].classList.remove('alert')


	let salleBtn = document.getElementsByClassName('salleButton')
    for (let i = 0; i < salleBtn.length; i++) {
        salleBtn[i].addEventListener('click', function (event) {
            /*let btnBuyColor = event.target.parentElement.parentElement.children[2].firstElementChild
            btnBuyColor.classList.remove('salleButton')
            btnBuyColor.classList.add('buyButton')*/
            let posicao = players_obj_btn.indexOf(player_id_conserved)
            if(posicao > 0){
                players_obj_btn.splice(posicao, 1)
            }
        })
    }
    let btnBuySaleColor = document.getElementById(player_id_conserved).parentElement.parentElement.children[2].firstElementChild
    btnBuySaleColor.classList.remove('salleButton')
    btnBuySaleColor.classList.add('buyButton')
	players_infos.forEach(object =>{
		if(object.id === player_id_conserved){
			resetPlayer(object.position)
			balanceController(object.price, 'sale')
			players_infos.splice(players_infos.indexOf(object), 1)
		}
	});

	players_obj_btn.forEach(element => {
		if(element == player_id){
			let index = players_obj_btn.indexOf(element)
			players_obj_btn.splice(index, 1)
		}
	})
	enableButtons()
}

let id_player_for_edit = []
//Função de compra de um jogador
function joinPlayer(player_id, name) {
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
	let btnBuySaleColor = document.getElementById(player_id).parentElement.parentElement.children[2].firstElementChild
	btnBuySaleColor.classList.remove('buyButton')
	btnBuySaleColor.classList.add('salleButton')

    if (!display.classList.contains('preenchido')) {
        document.getElementById(span_).className += ' preenchido'
        display.textContent = document.getElementById(player_id).textContent
		player_value = document.getElementById(div_value_str).innerText
        player_value = parseFloat(player_value)
        players_obj = {...players_obj, [pos_player]: player_value}
		balanceController(player_value, 'purchase')
		if(window.location.href.includes('/fantasy-lineup-edit/')){
			id_player_for_edit.push({position: pos_player, id: player_id})
		}
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
		if(name.includes('pendurado') || name.includes('lesionado') || name.includes('suspenso')){
			let playerBtn = document.getElementById(elemento.id)
			playerBtn.children[4].setAttribute('style', 'display: flex')
			playerBtn.children[0].children[0].classList.add('alert')
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

		if(name.includes('pendurado') || name.includes('lesionado') || name.includes('suspenso')){
			let playerBtn = retorno[j]
			playerBtn.children[4].setAttribute('style', 'display: flex')
			playerBtn.children[0].children[0].classList.add('alert')
		}

		if(window.location.href.includes('/fantasy-lineup-edit/')){
			id_player_for_edit.push({position: retorno[j].id, id: player_id})
		}

		j += 1 //aqui j é incrementado para que na próxima função de comprar pegue a outra posição livre
		players_obj_btn.push(player_id)

		if(retorno[j] == undefined || retorno[j] == []){
			disableButtons()
		}


	}


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
	//O for abaixo serve para resetar o alertContainer dos jogadores
	for(let i=0; i<16;i++){
		let btn = document.getElementById(`p_${i}`)
		btn.children[4].setAttribute('style', 'display:none')
		btn.children[0].children[0].classList.remove('alert')
	}

	//Este outro for reseta o captainContainer dos jogadores
	for(let i=0; i<11;i++){
		let btn = document.getElementById(`p_${i}`)
		btn.children[3].removeAttribute('style')
		btn.children[0].children[0].classList.remove('captain')
	}

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
	let selectFormation = document.getElementsByClassName('formation')
	if(selectFormation[0].value == '3-4-3' || selectFormation[0].value == '3-5-2'){
    	display13.textContent = "MEI"
	}else{
		display13.textContent = "LAT"
	}
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
	resetLabelsPlayers()
	for(let i=0; i<6; i++){
		document.getElementsByClassName('balance_available')[i].innerText = '$120.000'
		document.getElementsByClassName('team_price')[i].innerText =  '$0'
		document.getElementsByClassName('balance_available')[i].style.color = '#444444'
	}

	document.getElementById("btn_save").style.backgroundColor = "#0D9876"
    bal_aval = 120000
    cost_team = 0
	players_obj = {}
	players_obj_btn = []
	players_infos = []
	enableButtons()

	let buttonsale = document.getElementsByClassName('button')
	buttonsale.forEach(element => {
		if(element.className.includes('salleButton')){
			element.classList.remove('salleButton')
			element.classList.add('buyButton')
		}
	})
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
        document.getElementById("btn_save").style.backgroundColor = "#0D9876"
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
	if (formationSelect[0].value == '4-3-3' || formationSelect[0].value == '3-4-3'){
		for(var i=8; i<12; i++){
			atackers.push(document.getElementById('p_' + i))
		}
	}
	if (formationSelect[0].value == '3-5-2' || formationSelect[0].value == '4-4-2' || formationSelect[0].value == '5-3-2'){
		atackers.push(document.getElementById('p_8'))
		atackers.push(document.getElementById('p_9'))
		atackers.push(document.getElementById('p_11'))
	}
	if (formationSelect[0].value == '4-2-4'){
		atackers.push(document.getElementById('p_7'))
		atackers.push(document.getElementById('p_10'))
		atackers.push(document.getElementById('p_8'))
		atackers.push(document.getElementById('p_9'))
		atackers.push(document.getElementById('p_11'))
	}
	if (formationSelect[0].value == '4-5-1' || formationSelect[0].value == '5-4-1'){
		atackers.push(document.getElementById('p_9'))
		atackers.push(document.getElementById('p_11'))
	}

	availableAtackers = []
	atackers.forEach(function(position) {
		if(!position.children[2].className.includes('preenchido')){
			availableAtackers.push(position)
		}
	})
	/*====================================================================*/
	const midfielders = []
	if (formationSelect[0].value == '4-3-3'){
		for(var i=5; i<8; i++){
		midfielders.push(document.getElementById('p_' + i))
		}
		midfielders.push(document.getElementById('p_12'))
	}
	if (formationSelect[0].value == '3-4-3'){
		for(var i=4; i<8; i++){
		midfielders.push(document.getElementById('p_' + i))
		}
		midfielders.push(document.getElementById('p_12'))
		midfielders.push(document.getElementById('p_13'))
	}
	if (formationSelect[0].value == '3-5-2'){
		for(var i=4; i<8; i++){
		midfielders.push(document.getElementById('p_' + i))
		}
		midfielders.push(document.getElementById('p_10'))
		midfielders.push(document.getElementById('p_12'))
		midfielders.push(document.getElementById('p_13'))
	}
	if (formationSelect[0].value == '4-2-4'){
		midfielders.push(document.getElementById('p_5'))
		midfielders.push(document.getElementById('p_6'))
		midfielders.push(document.getElementById('p_12'))
	}
	if (formationSelect[0].value == '4-4-2'){
		midfielders.push(document.getElementById('p_5'))
		midfielders.push(document.getElementById('p_6'))
		midfielders.push(document.getElementById('p_7'))
		midfielders.push(document.getElementById('p_10'))
		midfielders.push(document.getElementById('p_12'))
	}
	if (formationSelect[0].value == '4-5-1'){
		midfielders.push(document.getElementById('p_5'))
		midfielders.push(document.getElementById('p_6'))
		midfielders.push(document.getElementById('p_7'))
		midfielders.push(document.getElementById('p_10'))
		midfielders.push(document.getElementById('p_8'))
		midfielders.push(document.getElementById('p_12'))
	}
	if (formationSelect[0].value == '5-3-2'){
		midfielders.push(document.getElementById('p_6'))
		midfielders.push(document.getElementById('p_7'))
		midfielders.push(document.getElementById('p_10'))
		midfielders.push(document.getElementById('p_12'))
	}
	if (formationSelect[0].value == '5-4-1'){
		midfielders.push(document.getElementById('p_6'))
		midfielders.push(document.getElementById('p_7'))
		midfielders.push(document.getElementById('p_10'))
		midfielders.push(document.getElementById('p_8'))
		midfielders.push(document.getElementById('p_12'))
	}

	availableMidfielders = []
	midfielders.forEach(function(position){
		if(!position.children[2].className.includes('preenchido')){
			availableMidfielders.push(position)
		}
	})
	/*====================================================================*/
	const backs = []
	if (formationSelect[0].value == '5-3-2' || formationSelect[0].value == '5-4-1'){
		backs.push(document.getElementById('p_4'))
		backs.push(document.getElementById('p_5'))
		backs.push(document.getElementById('p_13'))
	}
	if(formationSelect[0].value == '4-5-1' || formationSelect[0].value == '4-2-4' || formationSelect[0].value == '4-3-3' || formationSelect[0].value == '4-4-2'){
		backs.push(document.getElementById('p_3'))
		backs.push(document.getElementById('p_4'))
		backs.push(document.getElementById('p_13'))
	}

	const availableBacks = []
	backs.forEach(function(position){
		if(!position.children[2].className.includes('preenchido')){
			availableBacks.push(position)
		}
	})
	/*====================================================================*/
	const defenders = []
	if (formationSelect[0].value == '4-3-3' || formationSelect[0].value == '4-2-4' || formationSelect[0].value == '4-4-2' || formationSelect[0].value == '4-5-1'){
		defenders.push(document.getElementById('p_1'))
		defenders.push(document.getElementById('p_2'))
		defenders.push(document.getElementById('p_14'))
	}
	if (formationSelect[0].value == '3-4-3' || formationSelect[0].value == '3-5-2' || formationSelect[0].value == '5-3-2' || formationSelect[0].value == '5-4-1'){
		defenders.push(document.getElementById('p_1'))
		defenders.push(document.getElementById('p_2'))
		defenders.push(document.getElementById('p_3'))
		defenders.push(document.getElementById('p_14'))
	}


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


	//let formationSelect = document.getElementsByClassName('formation')
		if(formationSelect[0].value == '3-4-3') {
			if (position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_10' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_4' || position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_12' || position_num == 'p_13') {
				return availableMidfielders
			}
			/*if(position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13'){
				return availableBacks
			}*/
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_3' || position_num == 'p_14') {
				return availableDefenders
			}

			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		} else if (formationSelect[0].value == '4-3-3') {
			if (position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_10' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_12') {
				return availableMidfielders
			}
			if (position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13') {
				return availableBacks
			}
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_14') {
				return availableDefenders
			}
			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		}else if(formationSelect[0].value == '3-5-2') {
			if (position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_4' || position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_10' || position_num == 'p_12' || position_num == 'p_13') {
				return availableMidfielders
			}
			/*if(position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13'){
				return availableBacks
			}*/
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_3' || position_num == 'p_14') {
				return availableDefenders
			}
			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		}else if (formationSelect[0].value == '4-2-4') {
			if (position_num == 'p_7' || position_num == 'p_10' || position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_12') {
				return availableMidfielders
			}
			if (position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13') {
				return availableBacks
			}
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_14') {
				return availableDefenders
			}
			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		}else if(formationSelect[0].value == '4-4-2') {
			if (position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_10' || position_num == 'p_12') {
				return availableMidfielders
			}
			if (position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13') {
				return availableBacks
			}
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_14') {
				return availableDefenders
			}
			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		}else if(formationSelect[0].value == '4-5-1') {
			if (position_num == 'p_9' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_5' || position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_10' || position_num == 'p_8' || position_num == 'p_12') {
				return availableMidfielders
			}
			if (position_num == 'p_3' || position_num == 'p_4' || position_num == 'p_13') {
				return availableBacks
			}
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_14') {
				return availableDefenders
			}
			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		}else if(formationSelect[0].value == '5-3-2') {
			if (position_num == 'p_8' || position_num == 'p_9' || position_num == 'p_11') {
				return availableAtackers
			}
			if (position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_10' || position_num == 'p_12') {
				return availableMidfielders
			}
			if (position_num == 'p_4' || position_num == 'p_5' || position_num == 'p_13') {
				return availableBacks
			}
			if (position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_3' || position_num == 'p_14') {
				return availableDefenders
			}
			if (position_num == 'p_0' || position_num == 'p_15') {
				return availableGoalkeepers
			}

		}else if(formationSelect[0].value == '5-4-1'){
				if(position_num == 'p_9' || position_num == 'p_11'){
					return availableAtackers
				}
				if(position_num == 'p_6' || position_num == 'p_7' || position_num == 'p_10' || position_num == 'p_8'|| position_num == 'p_12'){
					return availableMidfielders
				}
				if(position_num == 'p_4' || position_num == 'p_5' || position_num == 'p_13'){
					return availableBacks
				}
				if(position_num == 'p_1' || position_num == 'p_2' || position_num == 'p_3' || position_num == 'p_14'){
					return availableDefenders
				}
				if(position_num == 'p_0' || position_num == 'p_15'){
					return availableGoalkeepers
				}
		}

}
var numberIdentifier = 0;
function save_lineup_edit() {
	if (window.location.href.includes('/fantasy-lineup-edit/')) {
		numberIdentifier = window.location.href
		numberIdentifier = numberIdentifier.toString()
		numberIdentifier = numberIdentifier.split('/')
		numberIdentifier = numbersOnly(numberIdentifier[numberIdentifier.length - 1])
		saveLineupEditButton = document.getElementById('btn_save')


		let players_update = {}
		for (let i = 0; i < 16; i++) {
			let player = players_infos.find(element => element.position == `p_${i}`)
			if (player) {
				players_update[`player_id_${i}`] = player.id
			} else {
				players_update[`player_id_${i}`] = 0
			}
		}
		let formationSelect = document.getElementsByClassName('formation')

		players_update['identifier'] = numberIdentifier
		players_update['formation'] = formationSelect[0].value

		let captain_position = ''
		let captain_id = 0
		let allPlayers = document.getElementsByClassName('playerContainer')
		for(let j=0; j<11; j++){
			if(allPlayers[j].children[3].getAttribute('style') == 'background-color: #F8B655; display: flex;'){
				captain_position = allPlayers[j].getAttribute('id')
				for(let x=0; x<obj_players.length;x++){
					if(obj_players[x].pos_field == captain_position){
						captain_id = obj_players[x].player_Id
					}else if(obj_players[x].pos_field != captain_position){
						for(let y=0; y<id_player_for_edit.length; y++){
							if(id_player_for_edit[y].position == captain_position){
								captain_id = id_player_for_edit[y].id
							}
						}
					}
				}
			}
		}
		let inputConfirmNameModal = document.getElementsByClassName('inputConfirmNameModal')[0].value
		players_update['lineup_name'] = inputConfirmNameModal
		if(captain_id == 0){
			captain_id = 1
		}
		players_update['captain'] = captain_id
		executeAction('update-lineup-formation', numberIdentifier, players_update)
		// executeAction('update-lineup-formation', 1, { 'identifier': identifier_current_lineup, 'formation': formationSelect[0].value})

	}

	let count_lineup_edit = 0;
	control_identifier = numberIdentifier
}



function numbersOnly(string)
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return numsStr.toString();
}

	if (window.location.href.includes('/fantasy-lineup-edit/')){
		numberIdentifier = window.location.href

		numberIdentifier = numberIdentifier.toString()

		numberIdentifier = numberIdentifier.split('/')

		numberIdentifier = numbersOnly(numberIdentifier[numberIdentifier.length - 1])
		get_lineup(numberIdentifier)
	}
	function get_lineup(numberIdentifier) {
		numberIdentifier.toString()
		identifier_current_lineup = numberIdentifier

		executeAction('select-lineup-formation', null, {identifier: numberIdentifier}).then((result) => {
			tatic = result
			formationSelect[0].value = tatic[0].lineups__formation;
			save_lineups()
			//tatic = numbersOnly()

		}).catch(err => console.log(err))


		executeAction('select-lineups', null, {identifier: numberIdentifier}).then((result) => {

			obj_players = result

			for (i = 0; i < obj_players.length; i++) {
				conc_var = 'span_'
				result = conc_var + obj_players[i].pos_field
				document.getElementById(result).innerText = obj_players[i].players__player_name
				document.getElementById(result).className += ' preenchido'
				document.getElementById(obj_players[i].pos_field).firstElementChild.firstElementChild.className += ' saopaulo'
				elemento = document.getElementById(obj_players[i].pos_field).firstElementChild.firstElementChild.firstElementChild
				elemento.style.display = 'none'

				value_players = parseFloat(obj_players[i].team_players__player_value)

				balanceController(value_players, 'purchase')
				players_infos.push({
					position: obj_players[i].pos_field,
					id: obj_players[i].player_Id,
					price: obj_players[i].team_players__player_value,
					name: obj_players[i].players__player_name,
					situation: obj_players[i].situation
				})

				//Aqui verifico se algum jogador est com os status abaixo para colocar o simbolo de alerta no campo na tela de edicao
				if(players_infos[i].situation == 'pendurado' || players_infos[i].situation == 'lesionado' || players_infos[i].situation == 'suspenso'){
					let player = document.getElementById(players_infos[i].position)
					let position = players_infos[i].position.split('_')
					if(position[position.length - 1] < 11){
						player.children[4].setAttribute('style', 'display: flex')
						player.children[0].children[0].classList.add('alert')
					}else if(position[position.length - 1] > 10){
						player.children[3].setAttribute('style', 'display: flex')
						player.children[0].children[0].classList.add('alert')
					}

				}

				let btnBuySaleColor = document.getElementById(obj_players[i].player_Id).parentElement.parentElement.children[2].firstElementChild
				btnBuySaleColor.classList.remove('buyButton')
				btnBuySaleColor.classList.add('salleButton')
				players_obj_btn.push(obj_players[i].player_Id)
			}

		}).catch(err => console.log(err))

	getCaptainInEdit()
	}


function numbersOnly(string){
    var numsStr = string.replace(/[^0-9]/g,'');
    return numsStr.toString();
}

//A Função abaixo é responsável pelo filtro dos jogadores pelo status 'provável', 'dúvida', 'machucado' ou 'suspenso'
function statusFilter(){
	let statusFilter = document.getElementsByClassName('second-line')
	for(let i=0; i<5; i++){
		statusFilter[i].children[1].childNodes[1].addEventListener('change', function(){
			let allPlayers = statusFilter[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].children
			for(let j=0; j<allPlayers.length; j++){
				if(statusFilter[i].children[1].childNodes[1].value == 'todos'){
					allPlayers[j].style.display = 'block'
				}else if(!allPlayers[j].children[1].children[1].children[0].children[1].className.includes(statusFilter[i].children[1].childNodes[1].value)) {
					allPlayers[j].style.display = 'none'
				}else{
					allPlayers[j].style.display = 'block'
				}
			}
		})
	}
}

//A função abaixo é responsável pelo filtro de ordenação por 'maior preço', 'menor preço' ou 'melhor média'
function orderFilter(){
	let statusOrder = document.getElementsByClassName('second-line')
	for(let i=0; i<5; i++) {
		statusOrder[i].children[0].childNodes[1].addEventListener('change', function() {

			statusOrder[i].children[1].children[0].children[0].removeAttribute("selected")

			//As 4 linhas abaixo recuperam o identifier para passar como parâmetro na execute action
			numberIdentifier = window.location.href
			numberIdentifier = numberIdentifier.toString()
			numberIdentifier = numberIdentifier.split('/')
			numberIdentifier = numbersOnly(numberIdentifier[numberIdentifier.length - 1])

			if(statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].textContent == 'Atacantes'){
			statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = ''
				if(statusOrder[i].children[0].children[0].value == 'Menor Preço'){
					executeAction('query-select-to-order-atackers-asc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}else if(statusOrder[i].children[0].children[0].value == 'Maior Preço'){
					executeAction('query-select-to-order-atackers-desc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}
			}else if(statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].textContent == 'Meias'){
			statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = ''
				if(statusOrder[i].children[0].children[0].value == 'Menor Preço'){
					executeAction('query-select-to-order-midfielders-asc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}else if(statusOrder[i].children[0].children[0].value == 'Maior Preço'){
					executeAction('query-select-to-order-midfielders-desc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}
			}else if(statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].textContent == 'Laterais'){
			statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = ''
				if(statusOrder[i].children[0].children[0].value == 'Menor Preço'){
					executeAction('query-select-to-order-backs-asc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}else if(statusOrder[i].children[0].children[0].value == 'Maior Preço'){
					executeAction('query-select-to-order-backs-desc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}
			}else if(statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].textContent == 'Zagueiros'){
			statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = ''
				if(statusOrder[i].children[0].children[0].value == 'Menor Preço'){
					executeAction('query-select-to-order-defenders-asc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}else if(statusOrder[i].children[0].children[0].value == 'Maior Preço'){
					executeAction('query-select-to-order-defenders-desc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}
			}else if(statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].textContent == 'Goleiros'){
			statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = ''
				if(statusOrder[i].children[0].children[0].value == 'Menor Preço'){
					executeAction('query-select-to-order-goalkeepers-asc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}else if(statusOrder[i].children[0].children[0].value == 'Maior Preço'){
					executeAction('query-select-to-order-goalkeepers-desc', null, {identifier: numberIdentifier}).then((result) => {
						let playersList = ''
						for(let j=0; j<result.length; j++){
							playersList += `<div class="playersContainer"><div class="topContainer"><div class="teamContainer"><div class="team saopaulo"><p class="teamInitials initialsBlack">${result[j].team_initials}</p></div></div><div class="infos"><div class="name" id='{players__player_id}'>${result[j].players__player_name}</div><div class="teams"><p class="firstTeam">${result[j].matches__home_team}</p><p class="versus">x</p><p style='display:none'>${result[j].teams__team_name}</p><p class="secondTeam ">${result[j].matches__visitor_team}</p></div><div class="date"><div class="dateValue"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 5.1H2.22222V6.23333H3.33333V5.1ZM5.55556 5.1H4.44444V6.23333H5.55556V5.1ZM7.77778 5.1H6.66667V6.23333H7.77778V5.1ZM8.88889 1.13333H8.33333V0H7.22222V1.13333H2.77778V0H1.66667V1.13333H1.11111C0.494444 1.13333 0.00555555 1.64333 0.00555555 2.26667L0 10.2C0 10.8233 0.494444 11.3333 1.11111 11.3333H8.88889C9.5 11.3333 10 10.8233 10 10.2V2.26667C10 1.64333 9.5 1.13333 8.88889 1.13333ZM8.88889 10.2H1.11111V3.96667H8.88889V10.2Z" fill="#636363"/></svg><p>${result[j].matches__match_date}</p></div><div class="hour"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0.166672C2.774 0.166672 0.166504 2.78001 0.166504 6.00001C0.166504 9.22001 2.774 11.8333 5.994 11.8333C9.21984 11.8333 11.8332 9.22001 11.8332 6.00001C11.8332 2.78001 9.21984 0.166672 5.994 0.166672ZM5.99984 10.6667C3.4215 10.6667 1.33317 8.57834 1.33317 6.00001C1.33317 3.42167 3.4215 1.33334 5.99984 1.33334C8.57817 1.33334 10.6665 3.42167 10.6665 6.00001C10.6665 8.57834 8.57817 10.6667 5.99984 10.6667Z" fill="#636363"/><path d="M6.2915 3.08333H5.4165V6.58333L8.479 8.42083L8.9165 7.70333L6.2915 6.14583V3.08333Z" fill="#636363"/></svg><p>${result[j].matches__math_time}</p></div></div></div><div class="buttonContainer"><button class="button buyButton" id='${result[j].players__player_id}'></button></div></div><div class="lowerContainer"><div class="priceContainer"><div class="label">Preço</div><div class="value" id='${result[j].players__div_value}'>${result[j].team_player__player_value}</div></div><div class="sections"> <div class="status"><div class="label">Status</div><div class="value ${result[j].players__situation}"></div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="media"><div class="label">Média</div><div class="value">1.57</div></div><div class="divisor"><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.833496" y1="0.5" x2="0.833494" y2="36.5" stroke="#DADADA" stroke-linecap="round"/></svg></div><div class="matches"><div class="label">Partidas</div><div class="value">${result[j].match_player_status}</div></div></div></div></div>`
						}
						statusOrder[i].parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = playersList
						callAllFunctions()
					}).catch(err => console.log(err))
				}
			}

		})
	}
}

