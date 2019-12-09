import { isFunction } from '../src';

describe('isFunction()', () => {
  const anonymousFunction = () => {};
  function namedFunction() {}
  const booleanValue = true;
  const arrayValue = [4, true, 'test'];
  const stringValue = 'This is a string';
  const numberValue = 3;

  test('anonymous function should be valid', () => {
    expect(isFunction(anonymousFunction)).toBeTruthy();
  });

  test('named function should be valid', () => {
    expect(isFunction(namedFunction)).toBeTruthy();
  });

  test('boolean value should be invalid', () => {
    expect(isFunction(booleanValue)).toBeFalsy();
  });

  test('array value should be invalid', () => {
    expect(isFunction(arrayValue)).toBeFalsy();
  });

  test('string value should be invalid', () => {
    expect(isFunction(stringValue)).toBeFalsy();
  });

  test('number value should be invalid', () => {
    expect(isFunction(numberValue)).toBeFalsy();
  });
});
