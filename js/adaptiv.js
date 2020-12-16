let screenWidth1650 = window.matchMedia('(max-width: 1650px)'),
  screenWidth1430 = window.matchMedia('(max-width: 1430px)');

screenWidth1650.addEventListener('change', function (e) {

  if (e.matches) {

    document.querySelector("#card1Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава...";

    document.querySelector("#card2Description").innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный...";

    document.querySelector("#card3Description").innerHTML = "Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании глубокомысленных рассуждений. Также как перспективное...";

    document.querySelector("#card4Description").innerHTML = "Внезапно, реплицированные с зарубежных источников, современные исследования представляют собой не...";

    document.querySelector("#card5Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын...";


    document.querySelector("#name4").innerHTML = "Николай Ильин<br><span>Кричевский, Вла...</span>";

    document.querySelector("#name5").innerHTML = "Модульные сет...<br><span>Мюллер-Брокма...</span>";

    document.querySelector("#name6").innerHTML = "Эволюция граф...<br><span >Хеллер, Чваст</span>";

    document.querySelector("#name7").innerHTML = "Искусство и ви...<br><span>Арнхейм, Рудольф </span>";

  } else {
    document.querySelector("#card1Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело.";

    document.querySelector("#card2Description").innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки новых принципов формирования...";

    document.querySelector("#card3Description").innerHTML = "Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании глубокомысленных рассуждений. Также как перспективное планирование играет определяющее значение для новых принципов формирования материально-технической и кадровой базы.";

    document.querySelector("#card4Description").innerHTML = "Внезапно, реплицированные с зарубежных источников, современные исследования представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых...";

    document.querySelector("#card5Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело.";


    document.querySelector("#name4").innerHTML = "Николай Ильин<br><span>Кричевский, Владимир </span>";

    document.querySelector("#name5").innerHTML = "Модульные сетки в граф...<br><span>Мюллер-Брокманн, Йозеф </span>";

    document.querySelector("#name6").innerHTML = "Эволюция графических ст...<br><span>Хеллер, Чваст</span>";

    document.querySelector("#name7").innerHTML = "Искусство и визуальное в...<br><span>Арнхейм, Рудольф </span>";
  }

  screenWidth1430.addEventListener('change', function (e) {
    let headerNav = document.querySelector('#header-nav'),
      searchBtn = document.querySelector('#search-btn'),
      headerSearchInput = document.querySelector('#header__search-input');
    if (e.matches) {
      headerNav.after(searchBtn);
    } else {
      headerSearchInput.after(searchBtn);
    }
  })

})
