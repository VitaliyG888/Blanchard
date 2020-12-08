document.addEventListener('DOMContentLoaded', function () {

    console.log(document.documentElement.clientWidth);

    console.log(document.querySelector("#name5").innerHTML);

    if (document.documentElement.clientWidth < 1400) {

        document.querySelector("#name4").innerHTML = "Николай Ильин<br><span>Кричевский, Вла...</span>";

        document.querySelector("#name5").innerHTML = "Модульные сет...<br><span>Мюллер-Брокма...</span>";

        document.querySelector("#name6").innerHTML = "Эволюция граф...<br><span >Хеллер, Чваст</span>";

        document.querySelector("#name7").innerHTML = "Искусство и ви...<br><span>Арнхейм, Рудольф </span>";

    }

})