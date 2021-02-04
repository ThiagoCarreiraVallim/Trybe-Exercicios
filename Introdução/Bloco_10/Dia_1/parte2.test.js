const changeCode = (string, change, newCharacter) =>
  string.replace(new RegExp(`${change}`, 'gi'), newCharacter);

const numbers = [1, 2, 3, 4, 5];
const letters = ['a', 'e', 'i', 'o', 'u'];

const encode = (string) => letters.reduce(
  (acc, letter, index) => changeCode(acc, letter, numbers[index]), string);

const decode = (string) => numbers.reduce(
  (acc, number, index) => changeCode(acc, number, letters[index]), string);

describe('Code e Recode', () => {
  it('Teste se são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('encode funciona', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('decode funciona', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('Testa se não muda as outras letras', () => {
    expect(encode('go trybe')).toEqual('g4 tryb2');
    expect(decode('g4 tryb2')).toEqual('go trybe');
  });
  it('Testa se as funções têm o mesmo número de caracteres', () => {
    expect(encode('go trybe')).toHaveLength(8);
    expect(decode('g4 tryb2')).toHaveLength(8);
  });
})