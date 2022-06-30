components.modalExcluir.onClick(async () => {
    await openModal({container: 'fantasy-admin-modal-delete-users', identifier: null, viewMode: 'center'})

})
let tableidentifier = window.location.href
tableidentifier = tableidentifier.toString()
tableidentifier = tableidentifier.split('/')
tableidentifier = tableidentifier[tableidentifier.length - 1]

console.log(tableidentifier)
const user = getUserData()

const eventsModal = () => {
    components?.excluirConta?.onClick(async () => {

		await executeAction("fantasy-admin-actions-delete-user", null, {identifier: tableidentifier})
    	location.replace('/fantasy-admin-list-users')
	})

    components?.fecharModal?.onClick(() => location.replace('/fantasy-admin-list-users'))
}
eventsModal()
