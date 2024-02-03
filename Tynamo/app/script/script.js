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


function nascondiRegistrazione() {

    if(registazione.style.display === 'none'){
        registazione.style.display === 'block';
    }else { 
        registazione.style.display = 'none';
    }
}

function nascondiAccesso() {

    if(accesso.style.display === 'none'){
        accesso.style.display === 'block';
    }else { 
        accesso.style.display = 'none';
    }
}

function mostraAccesso() {

    if(accesso.style.display === 'block'){
        accesso.style.display === 'none';
    }else { 
        accesso.style.display = 'block';
    }
}


function nascondiContinua() { //permette di nascondere il form continua prima che il tasto continua venga cliccato

    if(continua.style.display === 'none'){
        continua.style.display === 'block';
    }else { 
        continua.style.display = 'none';
    }
}

function mostraContinua() {

    if(continua.style.display === 'block'){
        continua.style.display === 'none';
    }else { 
        continua.style.display = 'block';
    }
}


function mostra() {

    if(registazione.style.display === 'block'){
        registazione.style.display === 'none';
    }else { 
        registazione.style.display = 'block';
    }
}


function registerRemoveAccesso() {

    if(accesso.style.display === 'block'){
        accesso.style.display === 'none';
    }else { 
        accesso.style.display = 'block';
    }
}

