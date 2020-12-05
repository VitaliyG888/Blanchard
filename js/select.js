const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: true,
    placeholderValue: "Автор",
    maxItemCount: -1,
});