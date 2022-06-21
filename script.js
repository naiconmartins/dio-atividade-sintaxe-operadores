function comparaNumeros(num1, num2) { /*cria a função que receberá dois parametros: num1 e num2*/
    /* const saoIguais = num1 === num2; /*verifica se os numeros são iguais*/
    /* const soma = num1 + num2; /*verifica se a soma é 3*/

    /* Se for apenas dois resultados possíveis não há necessidade de usar a expressão else:
    if(saoIguais) {
        return "São iguais";
    }

    return "Não são iguais" */

    /* Exemplo de if ternário:

    return sãoIguais ? "São iguais": "Não são iguais"; */

    if(!num1 || !num2) return 'Defina dois números!'; /* para caso alguém informe um número vazio*/

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
} 

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';

    }

    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma >10;
    const compara20 = soma >20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;

}

console.log(comparaNumeros(20, 20));