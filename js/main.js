let personName = document.querySelector('input[name=name]');
let btnPush = document.querySelector('.push');
let btnClear = document.querySelector('.clear');
const names = [];
const content = document.querySelector('.content');
const sex = document.querySelector('select[name=sex]');
const gender = ['male', 'female', 'middle'];

let reGender = gender.map((item) => `<option value="${item}">${item}</option>\n`)
sex.innerHTML = reGender.join('');

const addName = () => {
    if(sex.value === 'male'){
        names.push([personName.value, `<img src="../images/man.png">`]);
    }else if(sex.value === 'female'){
        names.push([personName.value, `<img src="../images/wooman.png">`]);
    }else{
        names.push([personName.value, `<img src="../images/something.png">`]);
    }
    
    const html = names.map((element) => 
    `${element}<br>\n`
    );
    
    content.innerHTML = html.join('');
    personName.value = '';
};

const clearAll = () => {
    names.splice(0);
    content.innerHTML = '';
};

btnPush.addEventListener('click', addName);
btnClear.addEventListener('click', clearAll);