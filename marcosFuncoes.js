/// OLÁ  MUNDO

CalcularJurosSimples(1000, 2, 12)

function CalcularJurosSimples(valorInicial, txJuros, tempo) {
    let jurosDecimais = txJuros / 100

    let valorFinal = valorInicial * jurosDecimais * tempo

    console.log(`Juros simples - ${valorFinal}`)
    return valorFinal
}

CalcularJurosCompostos(1000, 2, 12)

function CalcularJurosCompostos(valorInicial, txJuros, tempo) {
    let jurosDecimais = txJuros / 100

    let valorFinal = valorInicial * (1 + jurosDecimais) ** 12

    console.log(`Juros compostos - ${valorFinal.toFixed(2)}`)
    return valorFinal.toFixed(2)
}

CalcularRentabilidadeReal(8, 4)

function CalcularRentabilidadeReal(rentabilidade, inflacao) {
    let rentabilidadeDecimal = rentabilidade / 100
    let inflacaoDecimal = inflacao / 100

    let valorFinal = (1 + rentabilidadeDecimal) / (1 + inflacaoDecimal) - 1

    valorFinal = valorFinal * 100

    console.log(`Rentabilidade Real - ${valorFinal.toFixed(1)}%`)
    return valorFinal.toFixed(1)

}

CalcularRentabilidadePassada(14, 9)

function CalcularRentabilidadePassada(precoAtual, precoAnterior) {

    let valorFinal = (precoAtual / precoAnterior) * 100 - 100

    console.log(`Rentabilidade Passada - ${valorFinal.toFixed(2)}%`)
    return valorFinal
}

module.exports = {CalcularJurosSimples, CalcularJurosCompostos, CalcularRentabilidadeReal, CalcularRentabilidadePassada}


