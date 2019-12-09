import { isString } from '../src';

describe('isString()', () => {
  const anonymousFunction = () => {};
  function namedFunction() {}
  const objectValue = { test: 1 };
  const arrayValue = [];
  const stringValue = 'defined';
  const numberValue = 3;
  const booleanValue = true;

  test('string value should be valid', () => {
    expect(isString(stringValue)).toBeTruthy();
  });

  test('anonymous function should be invalid', () => {
    expect(isString(anonymousFunction)).toBeFalsy();
  });

  test('named function should be invalid', () => {
    expect(isString(namedFunction)).toBeFalsy();
  });

  test('object value should be invalid', () => {
    expect(isString(objectValue)).toBeFalsy();
  });

  test('array value should be invalid', () => {
    expect(isString(arrayValue)).toBeFalsy();
  });

  test('number value should be invalid', () => {
    expect(isString(numberValue)).toBeFalsy();
  });

  test('boolean value should be invalid', () => {
    expect(isString(booleanValue)).toBeFalsy();
  });
});
