components.modalExcluir.onClick(() => {
   openModal({ container: 'fantasy-modal-excluir-conta', identifier: null, viewMode: 'center' })
})

const user = getUserData()

components.excluirConta.onClick(async () => {
   await executeAction("fantasy-actions-delete-user",null)
   await executeAction("fantasy-integration-delete-user",null,{current_user:user.id})
   logOut()
})

components.fecharModal.onClick(() => closeModal())
