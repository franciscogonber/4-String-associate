function convertToRoman(num) {
  const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let resultado = "";

  for (let i = 0; i < romanos.length; i++) {
    while (valores[i] <= num) {
      resultado += romanos[i];
      num -= valores[i];
    }
  }

  return resultado;
}

console.log(convertToRoman(9)); 
console.log(convertToRoman(4)); 
console.log(convertToRoman(99)); 
