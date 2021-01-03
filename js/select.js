const element = document.querySelector('select');
const choices = new Choices(element, {
	searchEnabled: 0,
	placeholder: true,
	placeholderValue: "Автор",
	itemSelectText: false,
});
