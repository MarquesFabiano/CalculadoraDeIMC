const form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');
    // pega o input

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); //converte os inputs para numeros

    // validar peso e altura

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMS é: ${imc} ${nivelImc}`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3',];

    switch (true) {
        case (imc >= 39.9):
            return nivel[5];
        case (imc >= 34.9):
            return nivel[4];
        case (imc >= 29.9):
            return nivel[3];
        case (imc >= 24.9):
            return nivel[2];
        case (imc >= 18.5):
            return nivel[1];
        default:
            return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg; // coloca a msg no p!
    resultado.appendChild(p)
}

