const { TestScheduler } = require("jest");


function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


describe('Testando função sum', () => {
  it('Soma de 4 + 5 = 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Soma de 0 + 0 = 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Soma de 4 + "5" = Error', () => {
    expect(() => { sum(4 , '5') }).toThrow();
  });
  it('Soma de 4 + "5" = Error', () => {
    expect(() => { sum(4 , '5') }).toThrowError( new Error('parameters must be numbers'));
  })
})
// implemente seus testes aqui