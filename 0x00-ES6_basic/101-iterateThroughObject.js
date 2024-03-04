export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const iterator = reportWithIterator;

  let nextEmployee = iterator.next();
  while (!nextEmployee.done) {
    result += `${nextEmployee.value} | `;
    nextEmployee = iterator.next();
  }

  return result.slice(0, -3);
}
