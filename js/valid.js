
const selector = document.querySelector('input[type="tel"]');

Inputmask("+7(999) - 999 - 99 - 99").mask(document.querySelector('input[type="tel"]'));

new JustValidate('.js-form', {
	rules: {
		name: {
			required: true,
			minLength: 2,
			maxLength: 10
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector.inputmask.unmaskedvalue();
				console.log(phone);
				return Number(phone) && phone.length === 10;
			}
		},
	}

});
