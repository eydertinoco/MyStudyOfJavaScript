'use strict';

function validarNascimento(nascimento) {
    let validacao =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    if(!validacao.test(nascimento)) {
        return `A Data informada ${nascimento} não é validada`;
    }
    let arrNascimento = nascimento.split('/');
    console.log(arrNascimento);
    let ano = parseInt(arrNascimento[2], 10);
    let mes = parseInt(arrNascimento[1], 10);
    let dia = parseInt(arrNascimento[0], 10);
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();

    if(ano >= anoAtual) {
        return "Data informada é maior ou igual a data atual";
    }
    if( (anoAtual - ano) < 18 || (anoAtual - ano) > 80) {
        return "Você tem menos de 18 ou maior do 80.";
    }
    if( mes < 1 || mes > 12) {
        return "Mês Invalido";
    }
    if( dia < 1 || dia > 31 ) {
        return "Dia invalido";
    }
    return "Suas informações foram validadas com sucesso.";
};


console.log(validarNascimento("17/05/1994"));
console.log(validarNascimento("31/12/80"));
console.log(validarNascimento("01/10/2030"));
console.log(validarNascimento("99/99/2000"));