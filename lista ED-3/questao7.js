function josephus(n, d) {
    const soldados = [];
    for (let i = 1; i <= n; i++) {
        soldados.push(i);
    }

    let index = 0;
    const ordemRemocao = [];

    while (soldados.length > 1) {
        index = (index + d - 1) % soldados.length;
        ordemRemocao.push(soldados.splice(index, 1)[0]);
    }

    const sobrevivente = soldados[0];
    return { ordemRemocao, sobrevivente };
}