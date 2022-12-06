const gabrielFuncoes = require('./gabrielFuncoes')

test('Função para calcular juros simples', () => {
    expect(gabrielFuncoes.calculoJurosSimples(1000, 2, 12)).toBe(240)
})

test('Função para calcular juros compostos', () => {
    expect(gabrielFuncoes.calculoJurosCompostos(1000, 2, 12)).toBe(1268,24)
})

test('Função para calcular rentabilidade real', () => {
    expect(gabrielFuncoes.calculoJurosSimples(8, 4)).toBe(3.8)
})

test('Função para calcular rentabilidade passada', () => {
    expect(gabrielFuncoes.calculoJurosSimples(14, 9)).toBe(55,55)
})