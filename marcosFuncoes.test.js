const marcosTeste = require('./marcosFuncoes');

test('Cálculo de Juros simples', () => {
    expect(marcosTeste.CalcularJurosSimples(1000, 2, 1)).toBe(240)
})
test('Juros simples: erro quando n < 0 ou diferente de number', () => {
    expect(() => marcosTeste.calculoJurosSimples("1000", 2, 1)).toThrow();
    expect(() => marcosTeste.calculoJurosSimples(-1, 2, 1)).toThrow();
    expect(() => marcosTeste.calculoJurosSimples(1000, "2", 1)).toThrow();
    expect(() => marcosTeste.calculoJurosSimples(1000, -2, 1)).toThrow();
});

test('Cálculo de Juros composto', () => {
    expect(marcosTeste.CalcularJurosCompostos(1000, 2, 1)).toBe(1268.24)
})
test('Juros composto: erro quando n < 0 ou diferente de number', () => {
    expect(() => marcosTeste.CalcularJurosCompostos("1000", 2, 1)).toThrow();
    expect(() => marcosTeste.CalcularJurosCompostos(-1, 2, 1)).toThrow();
    expect(() => marcosTeste.CalcularJurosCompostos(1000, "2", 1)).toThrow();
    expect(() => marcosTeste.CalcularJurosCompostos(1000, -2, 1)).toThrow();
});

test('Cálculo de Rentabilidade real', () => {
    expect(marcosTeste.CalcularRentabilidadeReal(8, 4)).toBe(3.8)
})
test('Rentabilidade real: erro quando n < 0 ou diferente de number', () => {
    expect(() => marcosTeste.CalcularRentabilidadeReal("8", 4)).toThrow();
    expect(() => marcosTeste.CalcularRentabilidadeReal(-8, 4,)).toThrow();
    expect(() => marcosTeste.CalcularRentabilidadeReal(8, "4")).toThrow();
    expect(() => marcosTeste.CalcularRentabilidadeReal(8, -4)).toThrow();
});

test('Cálculo de Rentabilidade passada', () => {
    expect(marcosTeste.CalcularRentabilidadePassada(14, 9)).toBe(55.56)
})
test('Rentabilidade passada: erro quando n < 0 ou diferente de number', () => {
    expect(() => marcosTeste.CalcularRentabilidadePassada("14", 9)).toThrow();
    expect(() => marcosTeste.CalcularRentabilidadePassada(-14, 9)).toThrow();
    expect(() => marcosTeste.CalcularRentabilidadePassada(14, "9")).toThrow();
    expect(() => marcosTeste.CalcularRentabilidadePassada(14, -9)).toThrow();
});

