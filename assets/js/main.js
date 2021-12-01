function escopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function eventoForm(evento) {
        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);

        if (Number.isNaN(peso)) {
            resultado.innerHTML += `<div class="error">Peso inválido.</div>`;
        } else if (Number.isNaN(altura)) {
            resultado.innerHTML += `<div class="error">Altura inválida.</div>`;
        } else {

            const imc = peso / altura ** 2;
            let result_imc = 0;

            if (imc < 18.5) {
                result_imc = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                result_imc = 'Peso normal';
            } else if (imc >= 25 && imc <= 29.9) {
                result_imc = 'Sobrepeso';
            } else if (imc >= 30 & imc <= 34.9) {
                result_imc = 'Obesidade grau 1';
            } else if (imc >= 35 && imc <= 39.9) {
                result_imc = 'Obesidade grau 2';
            } else {
                result_imc = 'Obesidade grau 3';
            }

            resultado.innerHTML += `<div class="success">Seu IMC é: ${imc.toFixed(2)} (${result_imc})</div>`;
        }
        evento.preventDefault();
    }

    form.addEventListener('submit', eventoForm);
}

escopo();
