const { feti } = require('./Ex6')

describe('Teste fetch', () => {
  const teste = jest.fn(feti);
  afterEach(teste.mockReset);

  it('Testa se resolve', () => {
    teste.mockResolvedValue('Valor retornado corretamente');

    expect(teste()).resolves.toBe('Valor retornado corretamente');
    expect(teste).toHaveBeenCalled();
    expect(teste).toHaveBeenCalledTimes(1);
  });

  it('Testa se reject', () => {
    teste.mockRejectedValue('Valor rejeitado');

    expect(teste()).rejects.toBe('Valor rejeitado');
    expect(teste).toHaveBeenCalled();
    expect(teste).toHaveBeenCalledTimes(1);
  });
});