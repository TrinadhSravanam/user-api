const user = require('./services/user');
test('string with a single number should result in the number itself', () => {
    expect(user.sortedUsers('1')).toBe(1);
  });