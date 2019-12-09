import { isObject } from '../src';

describe('isObject()', () => {
  const anonymousFunction = () => {};
  function namedFunction() {}
  const objectValue = { test: 1 };
  const arrayValue = [];
  const numberValue = 3;
  const booleanValue = true;

  test('object value should be valid', () => {
    expect(isObject(objectValue)).toBeTruthy();
  });

  test('array value should be valid(arrays are objects!!)', () => {
    expect(isObject(arrayValue)).toBeTruthy();
  });

  test('anonymous function value should be invalid', () => {
    expect(isObject(anonymousFunction)).toBeFalsy();
  });

  test('named function value should be invalid', () => {
    expect(isObject(namedFunction)).toBeFalsy();
  });

  test('number value should be invalid', () => {
    expect(isObject(numberValue)).toBeFalsy();
  });

  test('boolean value should be invalid', () => {
    expect(isObject(booleanValue)).toBeFalsy();
  });
});
