const marcosTeste = require('./marcosFuncoes');

test('Cálculo de Juros simples', ()=>{
    expect(marcosTeste.CalcularJurosSimples(1000, 2, 12)).tobe(240)
})

test('Cálculo de Juros composto', ()=>{
    expect(marcosTeste.CalcularJurosCompostos(1000, 2, 12)).tobe(1268.24)
})

test('Cálculo de Rentabilidade real', ()=>{
    expect(marcosTeste.CalcularRentabilidadeReal(8, 4)).tobe(3.8)
})

test('Cálculo de Rentabilidade passada', ()=>{
    expect(marcosTeste.CalcularRentabilidadePassada(14, 9)).tobe(55.56)
})

