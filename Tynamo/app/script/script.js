const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const div = document.getElementById('registrazione');
const div1 = document.getElementById('accesso');




registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function prova() {

    if(div.style.display === 'none'){
        div.style.display === 'block';
    }else { 
        div.style.display = 'none';
    }
}