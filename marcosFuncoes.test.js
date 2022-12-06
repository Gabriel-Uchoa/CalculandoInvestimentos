const marcosTeste = require('./marcosFuncoes');

test('Cálculo de Juros simples', ()=>{
    expect(marcosTeste.CalcularJurosSimples(1000, 2, 1)).toBe(240)
})

test('Cálculo de Juros composto', ()=>{
    expect(marcosTeste.CalcularJurosCompostos(1000, 2, 1)).toBe(1268.24)
})

test('Cálculo de Rentabilidade real', ()=>{
    expect(marcosTeste.CalcularRentabilidadeReal(8, 4)).toBe(3.8)
})

test('Cálculo de Rentabilidade passada', ()=>{
    expect(marcosTeste.CalcularRentabilidadePassada(14, 9)).toBe(55.56)
})

