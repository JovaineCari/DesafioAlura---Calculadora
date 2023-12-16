let operacao = '';

function soma (x, y) {alert(x+y);}

function subtração (x, y) {alert(x-y);}

function divisão (x, y) {alert(x/y);}

function multiplicação (x, y) {alert(x*y);}

for (i=0; i<1;) {
    const calculadora = prompt('Olá! Qual operação deseja realizar: 1-soma 2-subtração 3-divisão 4-multiplicação ou 5-sair ?');
    operacao = calculadora;
                
        if (operacao != '1' && operacao != '2' && operacao != '3' && operacao != '4' && operacao != '5') {
            alert('Operação inexistente!');
        }

        switch (operacao) {
            case '1':
                const somax = parseInt(prompt('Digite o primeiro valor da operação:'));
                const somay = parseInt(prompt('Digite o segundo valor da operação:'));
                soma(somax, somay);
                break;
            case '2':
                const subx = parseInt(prompt('Digite o primeiro valor da operação:'));
                const suby = parseInt(prompt('Digite o segundo valor da operação:'));
                subtração(subx, suby);
                break;
            case '3':
                const divx = parseInt(prompt('Digite o primeiro valor da operação:'));
                const divy = parseInt(prompt('Digite o segundo valor da operação:'));
                divisão(divx, divy);
                break;
            case '4':
                const multx = parseInt(prompt('Digite o primeiro valor da operação:'));
                const multy = parseInt(prompt('Digite o segundo valor da operação:'));
                multiplicação(multx, multy);
                break;
            case '5':
                alert('Até mais!')  
                i++;   
            }
        }