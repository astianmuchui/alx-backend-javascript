export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    var value = idx;
    idx = appendString + value;
  }

  return array;
}
