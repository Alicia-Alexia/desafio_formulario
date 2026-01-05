const form = document.getElementById('form-contato');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mensagemSucesso.classList.add('hidden');
    validarFormulario();
});

function validarFormulario() {
    let formValido = true;
    const valorNome = nomeInput.value.trim(); 

    if (valorNome === '') {
        definirErro(nomeInput, 'O nome é obrigatório.');
        formValido = false;
    } 
    else if (valorNome.length < 2) {
        definirErro(nomeInput, 'O nome deve ter pelo menos 2 letras.');
        formValido = false;
    } 
    else {
        definirSucesso(nomeInput);
    }
    if (emailInput.value.trim() === '') {
        definirErro(emailInput, 'O e-mail é obrigatório.');
        formValido = false;
    } 
    else if (!isEmailValido(emailInput.value)) {
        definirErro(emailInput, 'Digite um e-mail válido (ex: .com, .br)');
        formValido = false;
    } 
    else {
        definirSucesso(emailInput);
    }

    if (formValido) {
        mensagemSucesso.classList.remove('hidden');
        form.reset();
        limparEstilosVisuais();
        limparEstilosVisuais();
        console.log("Sucesso!");
        timeoutId = setTimeout(() => {
            mensagemSucesso.classList.add('hidden');
        }, 3000);
    }
}

function definirErro(input, mensagem) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('.error-text');
    
    small.innerText = mensagem;
    inputGroup.className = 'input-group error'; 
}

function definirSucesso(input) {
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group'; 
}

function isEmailValido(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function limparEstilosVisuais() {
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach((grupo) => {
        grupo.className = 'input-group';
    });
}