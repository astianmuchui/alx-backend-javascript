export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = idx;
    idx = appendString + value;
  }

  return array;
}
