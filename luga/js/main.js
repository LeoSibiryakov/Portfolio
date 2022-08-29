if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length;i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

//Фильтр на мобильных устройствах

const sidebarToggleButtone = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клип по кнопке для скрытия / показа фильтра и изменения иконки

sidebarToggleButtone.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}

// Клик по кнопке и показ 3 скрытых карточек

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden')


btnShowMoreCards.onclick = function() {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
}

// Находим все виджеты на странице

const widgets = document.querySelectorAll('.widget');

// Слушаем клик внутри виджета

widgets.forEach(function(widget) {
    widget.addEventListener('click', function(e) {
        // Если клик по заголовку, тогда скрываем / показываем тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    });
});

// Выбор кнопки 'Любая' и отключение других чекбоксов

const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');
checkboxAny.addEventListener('change', function() {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function(item) {
            item.checked = false;
        });
    }
});

// Отключение кнопки 'Любая' при выборе других параметров
topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if (checkboxAny.checked)
        checkboxAny.checked = false;
    });
});

// Показать ещё три доп. опции с чекбоксами в фильтре

const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function() {

    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = 'block';
    });
    showMoreOptions.innerText = 'Скрыть дополнительные опции';
    showMoreOptions.dataset.options = 'visible';
    } 
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = 'none';
    });
    showMoreOptions.innerText = 'Показать ещё';
    showMoreOptions.dataset.options = 'hidden';
    } 
}