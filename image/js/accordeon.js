document.addEventListener('DOMContentLoaded', function () {


    let panelItem = document.querySelectorAll('.js-title'),
        active = document.getElementsByClassName('active');

    Array.from(panelItem).forEach(function (item, i, panelItem) {
        item.addEventListener('click', function (e) {
            if (active.length > 0 && active[0] !== this)
                active[0].classList.remove('active');
            this.classList.toggle('active');
        });
    });

})