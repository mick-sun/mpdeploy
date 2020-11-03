const mpci = require('..')

// TODO: Implement module test
test('mpci', () => {
  expect(mpci('w')).toBe('w@zce.me')
  expect(mpci('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => mpci(100)).toThrow('Expected a string, got number')
})
