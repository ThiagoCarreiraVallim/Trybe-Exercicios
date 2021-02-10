const ex = require('./Ex4');
jest.mock('./Ex4')
describe('Testa upper novamente', () => {

  it('Upper to lower', () => {
    const lower = spyOn(ex, 'upper')
    .mockImplementation((string) => string.toLowerCase());

    expect(lower('STRING')).toBe('string');
    expect(lower).toHaveBeenCalled();
    expect(lower).toHaveBeenCalledTimes(1);
  });

  it('Testando retorno to upper', () => {
    ex.upper.mockReset();

    expect(ex.upper('string')).toBeUndefined();
  })
});