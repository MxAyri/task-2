//Форма
let formData = {};
const form = document.querySelector('form');
const reset = document.querySelector('.btn-reset');

form.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    sessionStorage.setItem('formData', JSON.stringify(formData));
});

if (sessionStorage.getItem('formData')) {
    formData = JSON.parse(sessionStorage.getItem('formData'));
    for (let key in formData) {
        form.elements[key].value = formData[key];
    }
}

reset.addEventListener('click', () => {
    sessionStorage.clear();
});

//Ограничение паспорта
let passSeries = document.querySelector('#passport-series');
let passNum = document.querySelector('#passport-num');
regPas = /[^0-9]/g;

passSeries.addEventListener('input', function () {
    this.value = this.value.substr(0, 4);
    this.value = this.value.replace(regPas, '');
})
passNum.addEventListener('input', function () {
    this.value = this.value.substr(0, 6);
    this.value = this.value.replace(regPas, '');
})
//Запрет на ввод цифр в ФИО
let fio = document.querySelector('#fio');
reg = /[0-9]/g;
fio.addEventListener('input', function () {
    this.value = this.value.replace(reg, '');
})
//Валидация букв гос номеров
let gos = document.querySelector('#gos-number');
regx = /[^АВЕКМНОРСТУХавекмнорстух0-9]/g;
gos.addEventListener('input', function () {
    this.value = this.value.replace(regx, '');
    this.value = this.value.substr(0, 9);
})
// [A-Za-zБбГгДдЖжЗзИиЛлПпУуФфЦцЧчШшЪъЫыЬьЭэЮюЯяЙйЁёЩщ.,\/#!$%\^&\*;:{}=\-_`~()]/g
