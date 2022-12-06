const marcosTeste = require('./marcosFuncoes');

test('Cálculo de Juros simples', ()=>{
    expect(marcosTeste.funcao(1000, 2, 12)).tobe(240)
})

test('Cálculo de Juros composto', ()=>{
    expect(marcosTeste.funcao(1000, 2, 12)).tobe(1268.24)
})

test('Cálculo de Rentabilidade real', ()=>{
    expect(marcosTeste.funcao(8, 4)).tobe(3.8)
})

test('Cálculo de Rentabilidade passada', ()=>{
    expect(marcosTeste.funcao(9, 14)).tobe(55.55)
})

