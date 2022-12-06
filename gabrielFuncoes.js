function calculoJurosSimples(C, i, t) {
    var taxaJurosConvertida = i / 100
    var tempoEmAnos = t * 12
    var valorFinal = C * taxaJurosConvertida * tempoEmAnos
    return valorFinal
}

function calculoJurosCompostos(M, i, t) {
    var taxaJurosConvertida = i / 100
    var tempoEmAnos = t * 12
    var montante = M * (1 + taxaJurosConvertida) ** tempoEmAnos
    return parseFloat(montante.toFixed(2))
}

function calculoRentabilidadeReal(r, i) {
    var rentabilidadeConvertida = r / 100
    var inflacaoConvertida = i / 100
    var valorFinal = (1 + rentabilidadeConvertida) / (1 + inflacaoConvertida) - 1
    var valorFinalConvertidoPorcentagem = valorFinal * 100
    return parseFloat(valorFinalConvertidoPorcentagem.toFixed(1))
}

function calculoRentabilidadePassada(pa, pp) {
    var valorFinal = (pa / pp) * 100 - 100
    return parseFloat(valorFinal.toFixed(2))
}

module.exports = { calculoJurosSimples, calculoJurosCompostos, calculoRentabilidadeReal, calculoRentabilidadePassada }