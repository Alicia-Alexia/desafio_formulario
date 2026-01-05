const form = document.getElementById('form-contato');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    let formValido = true;

    // --- Validação do Nome ---
    // .trim() remove espaços em branco antes e depois (evita que só "espaço" conte como nome)
    if (nomeInput.value.trim() === '') {
        definirErro(nomeInput, 'O nome é obrigatório.');
        formValido = false;
    } else {
        definirSucesso(nomeInput);
    }

    // --- Validação do E-mail ---
    if (emailInput.value.trim() === '') {
        definirErro(emailInput, 'O e-mail é obrigatório.');
        formValido = false;
    } else {
        definirSucesso(emailInput);
    }

    if (formValido) {
        mensagemSucesso.classList.remove('hidden');
         form.reset(); 
    }
}

// Funções auxiliares para mostrar/esconder erros visualmente
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