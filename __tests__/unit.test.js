// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber()
test ('valid phone number', () =>{
  expect(isPhoneNumber('(760)780-1246)')).toBe(true)
});
test ('valid phone number', () =>{
  expect(isPhoneNumber('(858)123-1233')).toBe(true)
});
test ('invalid phone number', () =>{
  expect(isPhoneNumber('99999999999999999999999')).toBe(false)
});
test ('invalid phone number', () =>{
  expect(isPhoneNumber('(123)1444444')).toBe(false)
});

//isEmail()
test ('valid email', () =>{
  expect(isEmail('yoyoyo@gmail.com')).toBe(true)
});
test ('valid email', () =>{
  expect(isEmail('c3black@ucsd.edu')).toBe(true)
});
test ('invalid email', () =>{
  expect(isEmail('@gmail.com')).toBe(false)
});
test ('invalid email', () =>{
  expect(isEmail('hi@gmailcom')).toBe(false)
});


test ('Strong Password', () =>{
  expect(isStrongPassword('hello1234_#')).toBe(true)
});
test ('Strong Password', () =>{
  expect(isStrongPassword('Whatijcww123_')).toBe(true)
});
test ('Not a Strong Password', () =>{
  expect(isStrongPassword('123hi')).toBe(false)
});
test ('Not a Strong Password', () =>{
  expect(isStrongPassword('hi.78')).toBe(false)
});


test ('Valid Date', () =>{
  expect(isDate('11/03/2001')).toBe(true)
});
test ('Valid Date', () =>{
  expect(isDate('5/7/2343')).toBe(true)
});
test ('Invalid Date', () =>{
  expect(isDate('12/12/12')).toBe(false)
});
test ('Invalid Date', () =>{
  expect(isDate('12-12-1232')).toBe(false)
});


test ('Valid Hex Color', () =>{
  expect(isHexColor('7BD547')).toBe(true)
});
test ('Valid Hex Color', () =>{
  expect(isHexColor('0F0')).toBe(true)
});
test ('Invalid Hex Color', () =>{
  expect(isHexColor('gerg')).toBe(false)
});
test ('Invalid Hex Color', () =>{
  expect(isHexColor('1231231231234')).toBe(false)
});