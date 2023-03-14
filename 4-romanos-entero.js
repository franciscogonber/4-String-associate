function toNumber(roman) {
  const romanToNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = romanToNumber[roman[i]];
    const next = romanToNumber[roman[i + 1]];
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}

console.log(toNumber('III')); // 100
console.log(toNumber('XCIX')); // 99
console.log(toNumber('DCIX')); // 609
console.log(toNumber('MXDII')); // 1492
//valido para mayusculas
