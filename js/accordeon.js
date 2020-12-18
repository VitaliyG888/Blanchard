document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.js-section')
    .forEach(function (section) {
      section.addEventListener('click', function (e) {
        document.querySelectorAll('.js-section').forEach(function (se) {
          se.querySelector('.js-content').style.maxHeight = '0px'
        })

        const accordeonSection = e.target.closest('.js-section')
        const insideElHeight = accordeonSection.querySelector('.js-content > *').clientHeight
        accordeonSection.querySelector('.js-content').style.maxHeight = insideElHeight + 'px'

        const accordionsElSection = document.querySelectorAll('.js-section');

        if (this.classList.contains('active')) {

          document.querySelectorAll('.js-section').forEach(function (section) {
            section.querySelector('.js-content').style.maxHeight = '0px'
          })
          this.classList.remove('active');
        } else {
          for (el of accordionsElSection) {
            el.classList.remove('active');
          }
          this.classList.add('active');
        }
      })
    })


})
