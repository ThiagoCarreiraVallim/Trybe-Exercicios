const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testa função getUserName', () => {

  test('Testa se encontrado', () => {
    getUserName(4).then(user => {
      expect(user.name).toBe('Mark');
    });
  });

  test('Testa se falhar', () => {
    getUserName(6).catch(user => {
      expected(user.error).toBe('User with 6 not found.');
    });
  });
});

describe('Testa função getUserName com Async await', () => {

  test('Testa se encontrado', async () => {

    try {
      const name = await getUserName(5);
      expect(name.name).toBe('Paul');
    } catch (error) {
    }
  });

  test('Testa se não encontrado', async () => {

    try {
      await getUserName(7);
    } catch (error) {
      expect(error.error).toBe('User with 7 not found.');
    }
  });
});