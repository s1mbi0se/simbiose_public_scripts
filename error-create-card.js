onAction('fantasy-register-credit-card', 'createAndRedirect', async formData => {
  try {
    await executeAction('fantasy-integration-create-credit-card', null, {
      customer_credit_card__card_exp_month: formData.customer_credit_card__card_exp_month,
      customer_credit_card__card_exp_year: formData.customer_credit_card__card_exp_year,
      customer_credit_card__card_display_number: formData.customer_credit_card__card_display_number,
      customer_credit_card__card_cvv: formData.customer_credit_card__card_cvv,
		user_fantasy__stripe_user: formData.user_fantasy__stripe_user,
	  customer_credit_card__card_stripe: formData.customer_credit_card__card_stripe,
	  customer_credit_card__user_fantasy_id: formData.customer_credit_card__user_fantasy_id
    })
  } catch (e) {
	  console.log({e})
    if (e.response.data.errors.before.error.code === 'incorrect_number') {
		components.customer_credit_card__card_display_number.hasError = true
		throw new Error('Número do cartão de crédito incorreto');
    }
  }
})
