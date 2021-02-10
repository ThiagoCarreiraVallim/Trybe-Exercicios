const calc = require('./pratica1');

jest.mock('./pratica1');

describe('Teste moke', () => {
  test('Subtrair', () => {
    const sub = spyOn(calc, 'subtrair')
    .mockImplementation((a, b) => a - b);

    sub(10, 5);
    expect(sub).toHaveBeenCalled();
    expect(sub).toHaveBeenCalledTimes(1);
    expect(sub).toHaveBeenCalledWith(10, 5);
    expect(sub(10, 5)).toBe(5);

    sub.mockReset();
    sub()
    expect(sub).toHaveBeenCalledTimes(1);
  });

  test('Multiplicar', () => {
    const mult = spyOn(calc, 'multiplicar')
    .mockReturnValue(10);

    mult(2, 5);
    expect(mult).toHaveBeenCalled();
    expect(mult).toHaveBeenCalledTimes(1);
    expect(mult(2, 6)).toBe(10);
  });

  test('Somar', () => {
    const sum = spyOn(calc, 'somar')
    .mockImplementation((a, b) => a + b);

    sum(5, 5);
    expect(sum).toHaveBeenCalled();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(5, 5);
    expect(sum(10, 5)).toBe(15);
  });

  test('Dividir', () => {
    const div = spyOn(calc, 'dividir')
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    expect(div(10, 2)).toBe(2);
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledTimes(1);

    expect(div(10, 2)).toBe(5);
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledTimes(2);

    expect(div(10, 2)).toBe(15);
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledTimes(3);
  });
});