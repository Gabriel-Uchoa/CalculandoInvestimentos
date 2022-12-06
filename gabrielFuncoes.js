function validacaoPositivoInteiro(a, b) {
    if ((b > 1) && (typeof b) == ("number") && (a > 1) && (typeof a) == ("number")) {
        return true
    } else {
        return false
    }
}

function calculoJurosSimples(C, i, t) {
    if (validacaoPositivoInteiro(C, i)) {
        var taxaJurosConvertida = i / 100
        var tempoEmAnos = t * 12
        var valorFinal = C * taxaJurosConvertida * tempoEmAnos
        return valorFinal
    } else {
        throw new Error('Número deve ser positivo e inteiro');
    }
}

function calculoJurosCompostos(M, i, t) {
    if (validacaoPositivoInteiro(M, i)) {
        var taxaJurosConvertida = i / 100
        var tempoEmAnos = t * 12
        var montante = M * (1 + taxaJurosConvertida) ** tempoEmAnos
        return parseFloat(montante.toFixed(2))
    } else {
        throw new Error('Número deve ser positivo e inteiro');
    }
}

function calculoRentabilidadeReal(r, i) {
    if (validacaoPositivoInteiro(r, i)) {
        var rentabilidadeConvertida = r / 100
        var inflacaoConvertida = i / 100
        var valorFinal = (1 + rentabilidadeConvertida) / (1 + inflacaoConvertida) - 1
        var valorFinalConvertidoPorcentagem = valorFinal * 100
        return parseFloat(valorFinalConvertidoPorcentagem.toFixed(1))
    } else {
        throw new Error('Número deve ser positivo e inteiro');
    }
}

function calculoRentabilidadePassada(pa, pp) {
    if (validacaoPositivoInteiro(pa, pp)) {
        var valorFinal = (pa / pp) * 100 - 100
        return parseFloat(valorFinal.toFixed(2))
    } else {
        throw new Error('Número deve ser positivo e inteiro');
    }
}
module.exports = { calculoJurosSimples, calculoJurosCompostos, calculoRentabilidadeReal, calculoRentabilidadePassada }