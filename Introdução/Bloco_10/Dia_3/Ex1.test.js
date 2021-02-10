let random = () => Math.floor(Math.random() * 100);

describe('Random', () => {
  test('Randomize numbers', () => {
    random = jest.fn().mockReturnValue(10);

    random();
    expect(random).toHaveBeenCalled();
    expect(random()).toBe(10);
    expect(random).toHaveBeenCalledTimes(2);

    random.mockReset();

    random = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(random(10, 2)).toBe(5);
    expect(random).toHaveBeenCalledTimes(1);
    expect(random).toHaveBeenCalled();

    random.mockReset();

    random = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(random(10, 2, 5)).toBe(100);
    expect(random).toHaveBeenCalledTimes(1);
    expect(random).toHaveBeenCalled();

    random.mockReset();

    random = jest.fn().mockImplementationOnce((a) => a * 2);
    expect(random(10)).toBe(20);
    expect(random).toHaveBeenCalledTimes(1);
    expect(random).toHaveBeenCalled();
  });
});