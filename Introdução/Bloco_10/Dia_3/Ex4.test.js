const ex = require('./Ex4');

jest.mock('./Ex4');

describe('Exercício numero 4', () => {
  it('Testando Upper', () => {
    const lower = spyOn(ex, 'upper')
    .mockImplementation((string) => string.toLowerCase());

    expect(lower('STRING')).toBe('string');
    expect(lower).toHaveBeenCalled();
    expect(lower).toHaveBeenCalledTimes(1);
  });

  it('Testando first', () => {
    const last = spyOn(ex, 'first')
    .mockImplementation((string) => string[string.length - 1]);

    expect(last('Olar')).toBe('r');
    expect(last).toHaveBeenCalled();
    expect(last).toHaveBeenCalledTimes(1);
  });

  it('Testando conca', () => {
    const concat = spyOn(ex, 'conca')
    .mockImplementation((string1, string2, string3) => `${string1} ${string2} ${string3}`);

    expect(concat('Hello', 'World', '!')).toBe('Hello World !');
    expect(concat).toHaveBeenCalled();
    expect(concat).toHaveBeenCalledTimes(1);
  });
});
