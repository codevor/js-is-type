import { isArray } from '../src';

describe('isArray()', () => {
  const anonymousFunction = () => {};
  function namedFunction() {}
  const emptyArrayValue = [];
  const arrayValue = [2, 8, 'test'];
  const stringValue = 'This is a string';
  const booleanValue = true;

  test('empty array should be valid', () => {
    expect(isArray(emptyArrayValue)).toBeTruthy();
  });

  test('correct array, not empty should be valid', () => {
    expect(isArray(arrayValue)).toBeTruthy();
  });

  test('anonymous function should be invalid', () => {
    expect(isArray(anonymousFunction)).toBeFalsy();
  });

  test('named function should be invalid', () => {
    expect(isArray(namedFunction)).toBeFalsy();
  });

  test('non array (string value) should be invalid', () => {
    expect(isArray(stringValue)).toBeFalsy();
  });

  test('non array (boolean value) should be invalid', () => {
    expect(isArray(booleanValue)).toBeFalsy();
  });
});
