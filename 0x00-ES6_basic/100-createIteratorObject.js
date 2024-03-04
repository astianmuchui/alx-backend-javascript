export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentEmployeeIndex >= departments[currentDepartmentIndex].length) {
        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
      }

      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const employee = departments[currentDepartmentIndex][currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return { value: employee, done: false };
    },
  };

  return iterator;
}
