const formLogin = document.getElementById('form-login');
const formRegistro = document.getElementById('formRegistro');

if (formLogin) {
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputEmail = document.getElementById('email');
        const inputSenha = document.getElementById('password');

        if (inputEmail.value.trim() === '') {
            alert('Por favor, preencha o campo de email.');
            return;
        }

        if (!inputEmail.value.includes('@')) {
            alert('Por favor, digite um email válido.');
            return;
        }

        if (inputSenha.value.trim() === '') {
            alert('Por favor, preencha o campo de senha.');
            return;
        }

        if (inputSenha.value.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        alert('Login realizado com sucesso!');
        formLogin.reset();
    });
}

if (formRegistro) {
    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('name');
        const email = document.getElementById('email');
        const telefone = document.getElementById('phone');
        const cpf = document.getElementById('cpf');
        const senha = document.getElementById('password');

        if (nome.value.trim() === '') {
            alert('Por favor, preencha o campo de nome.');
            return;
        }

        if (email.value.trim() === '') {
            alert('Por favor, preencha o campo de email.');
            return;
        }

        if (!email.value.includes('@')) {
            alert('Por favor, digite um email válido.');
            return;
        }

        if (telefone.value.trim() === '') {
            alert('Por favor, preencha o campo de telefone.');
            return;
        }

        if (cpf.value.trim() === '') {
            alert('Por favor, preencha o campo de CPF.');
            return;
        }

        if (senha.value.trim() === '') {
            alert('Por favor, preencha o campo de senha.');
            return;
        }

        if (senha.value.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        alert('Registro realizado com sucesso!');
        formRegistro.reset();
    });
}