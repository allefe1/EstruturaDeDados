
function verificarVencedores(sorteados, apostas) {
    let resultados = {
        sena: [],
        quina: []
    };

    // Verifica cada aposta
    for (let i = 0; i < apostas.length; i++) {
        let aposta = apostas[i];
        let acertos = 0;

        
        for (let num of aposta) {
            if (sorteados.includes(num)) {
                acertos++;
            }
        }

        
        if (acertos === 6) {
            resultados.sena.push({ apostador: i + 1, numeros: aposta });
        } else if (acertos === 5) {
            resultados.quina.push({ apostador: i + 1, numeros: aposta });
        }
    }

    return resultados;
}

// teste
let sorteados = [4, 8, 15, 16, 23, 42];
let apostas = [
    [4, 8, 15, 16, 23, 42], // Sena
    [4, 8, 15, 16, 23, 1],  // Quina
    [1, 2, 3, 4, 5, 6]      // Sem prêmio
];
console.log("Resultado do sorteio:", verificarVencedores(sorteados, apostas));
