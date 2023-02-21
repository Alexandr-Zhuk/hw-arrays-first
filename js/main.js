let personName = document.querySelector('input[name=name]');
let btnPush = document.querySelector('.push');
let btnClear = document.querySelector('.clear');
let names = new Object();
const content = document.querySelector('.content');
const sex = document.querySelector('select[name=sex]');
const gender = ['male', 'female', 'middle'];

let reGender = gender.map((item) => `<option value="${item}">${item}</option>\n`)
sex.innerHTML = reGender.join('');

const addName = () => {
    if(sex.value === 'male'){
        names[personName.value] = '<img src="./images/man.png">';
    }else if(sex.value === 'female'){
        names[personName.value] = '<img src="./images/wooman.png">';
    }else{
        names[personName.value] = '<img src="./images/something.png">';
    }
    
    personName.value = '';
};

const renderList = () => {
    addName();
    content.innerHTML = '';
    for(const property in names){
        content.innerHTML += `${property} - ${names[property]}<br>`;
    }
}

const clearAll = () => {
    for(let key in names){
        delete names[key];
    }
    content.innerHTML = '';
};

btnPush.addEventListener('click', renderList);
btnClear.addEventListener('click', clearAll);