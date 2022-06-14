handleBalance()
let identifier = getObjectId()
async function handleBalance() {
	try {
		let data = await executeAction('betting-balance',null,{identifier:identifier})
		console.log(data)
	} catch (err) {
		console.log(err)
		showToast('error', 'SALDO INSUFICIENTE!')
	}
}

