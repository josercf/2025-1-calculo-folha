let salarioBruto = 6_000.00;//parseFloat(input('Informe o salário bruto:'));


let inssFaixa1Inicio = 0;
let inssFaixa1Fim = 1_518.00;
let inssFaixa1Aliquota = 7.5;

let faixa1 = {
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
};

let faixa2 = {
    inicio: 1_518.01,
    fim: 2_793.88,
    aliquota: 0.09
};

let faixa3 = {
    inicio: 2_793.89,
    fim: 4_190.83,
    aliquota: 0.12
};

let faixa4 = {
    inicio: 4_190.84,
    fim: 8_157.81,
    aliquota: 0.14
};


let tabelaINSS = [faixa1, faixa2, 
                faixa3, faixa4];

console.table(tabelaINSS);

let faixaEncontrada = {};
for (let i = 0; i < tabelaINSS.length; i++) {
    const faixa = tabelaINSS[i];
    if(salarioBruto >= faixa.inicio &&
       salarioBruto <= faixa.fim) {
        faixaEncontrada = faixa; 
        break; 
       }    
}

console.log(faixaEncontrada);