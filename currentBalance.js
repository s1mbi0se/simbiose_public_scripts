onAction('fantasy-cash-out', 'createAndRedirect', function (formData) {
	let result = formData.user_fantasy__balance - formData.wallet_process__coin_value

	components.user_fantasy__balance.value = result
})


let databaseBalance = document.getElementsByClassName("input")[13]  //saldo da carteira
let currentBalance = document.getElementsByClassName("input")[9]    //valor que quero sacar
currentBalance.addEventListener('change', function (e) {
	console.log(currentBalance.value, "currentBalance");
	console.log(databaseBalance.value, "dataBalance");
	if (parseFloat(currentBalance.value) <= parseFloat(databaseBalance.value) && parseFloat(currentBalance.value) >= 10) {
		// currentBalance.style.color="red"
		console.log('Aqui', document.getElementsByClassName("input")[9].textContent);
		console.log("Pode Sacar");
		console.log(typeof currentBalance.value)
		console.log(typeof databaseBalance.value)
	} else {
		console.log("Não pode Sacar")
		document.getElementsByClassName("input")[9].value = ""
		// alert("Valor de saque não permitido")
		showToast('error', 'Valor de saque não permitido!')
	}
})

