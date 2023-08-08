export default function ehUmCPF(campo) { //exportada como padrao 
    const cpf = campo.value.replace(/\.|-/g, "");
    
    //recebe o valor do campo com o metodo replace, recebe dois parametros o que deseja substituir e pelo que quer substituir: onde ter ponto e hifen substituir por nada.
    
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) ||  validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é valido !')
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf); //percorerá a lista e verifica se esta repetido como na lista retornando true ou false.
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador --;
    }
    
    soma = (soma * 10 ) % 11;


    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];

}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador --;
    }

    soma = (soma * 10 ) % 11;


    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];

}