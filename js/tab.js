let tab = function () {
    let tabNav = document.querySelectorAll('.tab-nav__link');

    let tabContent = document.querySelectorAll('.tab');

    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active__description') : item.classList.remove('is-active__description');
        })
    }

};


tab();