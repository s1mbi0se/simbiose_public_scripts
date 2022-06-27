/*Aqui eu adiciono restrições no input[9] de inserção do valor pra saque */
let databaseBalance = document.getElementsByClassName("input")[13]  //saldo da carteira
let currentBalance = document.getElementsByClassName("input")[9]   //valor que quero sacar
currentBalance.addEventListener('change', function (e) {
	if (parseFloat(currentBalance.value) <= parseFloat(databaseBalance.value) && parseFloat(currentBalance.value) >= 10) {

	} else {
		document.getElementsByClassName("input")[9].value = ""
		showToast('error', 'Valor de saque não permitido!')
	}
})

