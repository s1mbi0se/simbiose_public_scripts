async function getData() {
	const selectRound = components.table_rounds__round_id.value
	const data = await executeAction("query-select-to-min-date", null, {current_round: selectRound})
	const maxPublish = new Date(data[0].round__start_round)
	const minDate = new Date(maxPublish)
	minDate.setDate(maxPublish.getDate() - 1)
	const minDateAward = formatData(data[0].round__finish_round)
	const maxDate = formatData(data[0].round__finish_round)
	components.table_rules__publish_date.maxDate = minDate
	components.table_rules__award_date.minDate = minDateAward
}

function formatData(data) {
	var replace = data.split('T')[0]
	var splitData = replace.split("/")
	replace = splitData[0] + "/" + (parseInt(splitData[1]) + 1) + "/" + splitData[2]
	return replace
}

components.table_rounds__round_id.onChange(() => {
	getData()
})
