// @ts-check

// const str = 'Hello';
// const num = Math.log(str);
// console.log(num);
// NaN: 숫자 아님.

function foo(a, b, ...rest) {
  rest = { c: 'cc', d: 'dd' };
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(...arr);

// 주소값이 복사되는 것!
// const copyArr = arr;

// 안의 값을 복사하는 것!
const copyArr = [...arr];
console.log(copyArr);
console.log(arr === copyArr);

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

console.log({ ...obj });
const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);
