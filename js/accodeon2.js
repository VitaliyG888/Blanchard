document.addEventListener('DOMContentLoaded', function () {

  let accordeonSectionAll;
  const accordionWrapper = document.querySelector('.accordeon');
  console.log(accordionWrapper);

  let contentDdata = [{
      id: 1,
      title: 'C 1400 по 1499 гг.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Пинтуриккьо</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Пезеллино</button>
              </div>`
    },
    {
      id: 2,
      title: 'C 1500 по 1599 гг.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
              </div>`
    },
    {
      id: 3,
      title: 'C 1600 по 1699 гг.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
              </div>`
    },
    {
      id: 4,
      title: 'C 1700 по 1799 гг.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
              </div>`
    },
    {
      id: 5,
      title: 'C 1800 по 1899 гг.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
              </div>`
    },
    {
      id: 6,
      title: 'C 1900 по 1999 гг.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
              </div>`
    },
    {
      id: 7,
      title: 'C 2000 г.',
      content: `<div class="accordeon-item flex" onclick="event.stopPropagation()">
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
                <button class="accordeon-link">Биссоло, Франческо</button>
                <button class="accordeon-link">Больтраффио, Джованни</button>
                <button class="accordeon-link">Бонсиньори, Франческо</button>
                <button class="accordeon-link">Боттичини, Рафаэлло</button>
                <button class="accordeon-link">Брамантино</button>
                <button class="accordeon-link">Бреа, Людовико</button>
                <button class="accordeon-link">Бьяджо д’Антонио Туччи</button>
                <button class="accordeon-link">Веккьетта</button>
                <button class="accordeon-link">Андреа Верроккьо</button>
                <button class="accordeon-link">Доменико Гирландайо</button>
                <button class="accordeon-link">Беноццо Гоццоли</button>
                <button class="accordeon-link">Граначчи, Франческо</button>
                <button class="accordeon-link">Грегорио ди Чекко</button>
                <button class="accordeon-link">Джованни да Удине</button>
                <button class="accordeon-link">Джованни ди Паоло</button>
                <button class="accordeon-link">Джорджоне</button>
                <button class="accordeon-link">Парентино, Бернардо</button>
                <button class="accordeon-link">Пезеллино</button>
                <button class="accordeon-link">Пьетро Перуджино</button>
                <button class="accordeon-link">Перуцци, Бальдассаре</button>
                <button class="accordeon-link">Пизанелло</button>
                <button class="accordeon-link">Пинтуриккьо</button>
                <button class="accordeon-link">Бенедетто ди Биндо</button>
                <button class="accordeon-link">Бергоньоне, Амброджо</button>
              </div>`
    }
  ];

  const createTemplate1 = item => {
    return `
          <div class="accordeon-section js-section active">
            <button class="accordeon-title accordeon-title--first" >${item.title}</button>
            <div class="accordeon-content js-content">${item.content}</div>
          </div>
      `
  }

  const createTemplate2 = item => {
    return `
          <div class="accordeon-section js-section">
            <button class="accordeon-title accordeon-title" >${item.title}</button>
            <div class="accordeon-content js-content">${item.content}</div>
          </div>
      `
  }

  const fillHtmlList = () => {
    contentDdata.forEach(item => {
      if (item.id == '1') {
        accordionWrapper.innerHTML += createTemplate1(item);
      } else {
        accordionWrapper.innerHTML += createTemplate2(item);
      }
    })
    accordeonSectionAll = document.querySelectorAll('.js-section');
  }

  fillHtmlList();



  let accordeonActiveit = function () {

    [].forEach.call(accordeonSectionAll, function (item, index) {
      if (!index == 0) {
        item.querySelector('.js-content').style.maxHeight = '0px'
      } else if (index == 0) {
        item.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px'
        item.classList.add('active');
      }
      item.addEventListener('click', function () {

        let activeItem = item.classList.contains('active');

        accordeonSectionAll.forEach(function (section) {
          section.querySelector('.js-content').style.maxHeight = '0px'
          if (section.classList.contains('active')) {
            section.classList.remove('active')
          }
        })

        if (activeItem) {
          this.classList.remove('active');
          this.querySelector('.js-content').style.maxHeight = '0px'
        } else {
          this.classList.add('active');
          this.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px'
        }
      })
    })
  }

  accordeonActiveit();

});
