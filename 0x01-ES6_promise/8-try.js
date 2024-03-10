export default function divideFunction(numerator, denominator) {
  try {
    const result = numerator / denominator;
    return result;
  } catch (zeroDivisionError) {
    throw new Error('cannot divide by 0');
  }
}
