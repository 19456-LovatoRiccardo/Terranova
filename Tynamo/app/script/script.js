const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registazione = document.getElementById('registrazione');
const continua = document.getElementById('continua');
const accesso = document.getElementById('accesso');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function nascondi() {

    if(registazione.style.display === 'none'){
        registazione.style.display === 'block';
    }else { 
        registazione.style.display = 'none';
    }
}


function mostra() {

    if(registazione.style.display === 'block'){
        registazione.style.display === 'none';
    }else { 
        registazione.style.display = 'block';
    }
}


function register() {

    if(accesso.style.display === 'block'){
        accesso.style.display === 'none' && continua.style.display === 'none';
    }else { 
        accesso.style.display = 'block'
        continua.style.display = 'block';
    }
}