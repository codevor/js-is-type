import { isUndefined } from '../src';

describe('isUndefined()', () => {
  const definedValue = 2;
  const notDefinedValue = undefined;

  test('defined value should be invalid', () => {
    expect(isUndefined(definedValue)).toBeFalsy();
  });

  test('non defined should be valid', () => {
    expect(isUndefined(notDefinedValue)).toBeTruthy();
  });
});
