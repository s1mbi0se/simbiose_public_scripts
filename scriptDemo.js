setTimeout(function () {
  components.physiotherapist__cpf.disabled = true
}, 3000)

setTimeout(function () {
  components.physiotherapist__cpf.disabled = false
}, 5000)

setTimeout(function () {
  components.physiotherapist__cpf.value = '2123132'
}, 7000)

onAction('fantasy-cadastro-bancario', 'create_and_redirect', function (formData) {
  showToast('success', `Duvidei do: ${formData.employee__first_name}`)
})
