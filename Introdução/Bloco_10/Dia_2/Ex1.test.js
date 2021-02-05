const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Testa função uppercase', () => {
  test('Retorna parametro em maiusculo', done => {
    uppercase('teste', maiusculo => {
      expect(maiusculo).toBe('TESTE');
      done();
    })
  })
})
