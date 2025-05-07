// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number test 1', () => {
  // TODO
  expect(isPhoneNumber('626-789-0983')).toBe(true);
});

test('valid phone number test 2', () => {
  expect(isPhoneNumber('(858) 379-0230')).toBe(true);
})

test('invalid phone number test 1', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('invalid phone number test 2', () => {
  expect(isPhoneNumber('yourmomwashere')).toBe(false);
});

test('valid email test 1', () => {
  expect(isEmail('yugao123@yahoo.com')).toBe(true);
});

test('valid email test 2', () => {
  expect(isEmail('fez008@ucsd.edu')).toBe(true);
});

test('invalid email test 1', () => {
  expect(isEmail('gurt&.gmail.com')).toBe(false);
});

test('invalid email test 2', () => {
  expect(isEmail('nonsensebysabrina@gmail,com')).toBe(false);
});

test('valid strong password test 1', () => {
  expect(isStrongPassword('Gurtwashere')).toBe(true);
});

test('valid strong password test 2', () => {
  expect(isStrongPassword('Nonsense_123')).toBe(true);
});

test('invalid strong password test 1', () => {
  expect(isStrongPassword('nonsensebysabrina@gmail,com')).toBe(false);
});

test('invalid strong password test 2', () => {
  expect(isStrongPassword('AHHHHHHHHHHHHHHHHHHHHHHHH')).toBe(false);
});

test('valid date test 1', () => {
  expect(isDate('04/1/2010')).toBe(true);
});

test('valid date test 2', () => {
  expect(isDate('3/25/2008')).toBe(true);
});

test('invalid date test 1', () => {
  expect(isDate('AHHHHHHHHHHHHHHHHHHHHHHHH')).toBe(false);
});

test('invalid date test 2', () => {
  expect(isDate('9/18/04')).toBe(false);
});

test('valid hex color 1', () => {
  expect(isHexColor('FFC0CB')).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor('FFB6C1')).toBe(true);
});

test('invalid hex color 1', () => {
  expect(isHexColor('1234@5')).toBe(false);
});

test('invalid hex color 2', () => {
  expect(isHexColor('meow1234')).toBe(false);
});




