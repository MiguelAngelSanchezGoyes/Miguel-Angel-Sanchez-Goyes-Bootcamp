function strictEquals(a, b) {
  if (isNaN(a) && isNaN(b)) return false;
  if (Object.is(-a, 0) && Object.is(b, 0)) return true;
  if (Object.is(a, 0) && Object.is(-b, 0)) return true;
  if (Object.is(a, b)) return true;
  return false;
}
console.log(`Esto es verdadero: ${strictEquals(1, 1)}`);
console.log(`Esto es falso: ${strictEquals(NaN, NaN)}`);
console.log(`Esto es verdadero: ${strictEquals(0, -0)}`);
console.log(`Esto es verdadero: ${strictEquals(-0, 0)}`);
console.log(`Esto es falso: ${strictEquals(1, "1")}`);
console.log(`Esto es falso: ${strictEquals(true, false)}`);
console.log(`Esto es verdadero: ${strictEquals(false, false)}`);
console.log(`Esto es falso: ${strictEquals("Water", "oil")}`);
