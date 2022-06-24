onAction('fantasy-admin-add-users-wallet', 'createAndRedirect', function (formData) {
    let sum = parseInt(formData.wallet__value_add) + parseInt(formData.wallet__value)
	let wallet_id = parseInt(formData.wallet__wallet_id)
	let numberIdentifier = window.location.href
	numberIdentifier = numberIdentifier.toString()
    numberIdentifier = numberIdentifier.split('/')
    numberIdentifier = numbersOnly(numberIdentifier[numberIdentifier.length - 1])
    executeAction('update-wallet-value', null, {identifier: numberIdentifier, sum:sum, wallet_id: wallet_id}).then((result) => {
	}).catch(err => console.log(err))
 })
function numbersOnly(string)
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return numsStr.toString();
}

