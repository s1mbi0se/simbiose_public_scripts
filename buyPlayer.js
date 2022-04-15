var els = document.getElementsByClassName('buyButton')
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('click', function (event) {
      console.log(event.target.id)
      joinPlayer(event.target.id)
  })
}


function joinPlayer(player_id){
    display = document.querySelector(`#${first_avaliable()}`)
    document.getElementById(`${first_avaliable()}`).className += ' ocupado'
    display.textContent = document.getElementById(player_id).textContent
}


function first_avaliable(){
    let avaliable_players = []
    const players = list_class()
    players.forEach(element => {

        if (!element.className.includes('ocupado')){
            avaliable_players.push(element.id)
        }
    });

    return avaliable_players.length ? avaliable_players[0]: ''
}


function list_class(){
    let number_tables_div = []
    const getClasses = document.getElementsByClassName('playerName');
    for (i=0; i<getClasses.length ; i++){
        number_tables_div.push(getClasses[i])
    }
    return number_tables_div
} 
