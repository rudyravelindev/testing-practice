import { caesarCipher } from './caesarCipher';

test('shifts letters forward by the given amount', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves letter case when shifting', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
