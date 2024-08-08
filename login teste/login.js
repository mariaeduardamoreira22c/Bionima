document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;

    if (name && dob && email) {
        alert('Login bem-sucedido!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('googleLogin').addEventListener('click', function() {
    // Adicionar lógica de login do Google aqui
    alert('Login com Google ainda não implementado.');
});

document.getElementById('facebookLogin').addEventListener('click', function() {
    // Adicionar lógica de login do Facebook aqui
    alert('Login com Facebook ainda não implementado.');
});

document.getElementById('iosLogin').addEventListener('click', function() {
    // Adicionar lógica de login do IOS aqui
    alert('Login com IOS ainda não implementado.');
});