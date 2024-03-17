export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const newSet = [];
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      newSet.push(value.slice(startString.length));
    }
  });
  return newSet.join('-');
}
