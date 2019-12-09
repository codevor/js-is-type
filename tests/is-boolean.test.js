import { isBoolean } from '../src';

describe('isBoolean()', () => {
  const anonymousFunction = () => {};
  function namedFunction() {};
  const booleanValue = true;
  const arrayValue = [4, true, 'test'];
  const stringValue = 'This is a string';
  const numberValue = 3;

  test('boolean value should be valid', () => {
    expect(isBoolean(booleanValue)).toBeTruthy();
  });

  test('anonymous function value should be invalid', () => {
    expect(isBoolean(anonymousFunction)).toBeFalsy();
  });

  test('named function value should be invalid', () => {
    expect(isBoolean(namedFunction)).toBeFalsy();
  });

  test('array value should be invalid', () => {
    expect(isBoolean(arrayValue)).toBeFalsy();
  });

  test('string value should be invalid', () => {
    expect(isBoolean(stringValue)).toBeFalsy();
  });

  test('number value should be invalid', () => {
    expect(isBoolean(numberValue)).toBeFalsy();
  });
});
