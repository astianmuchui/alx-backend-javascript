export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };

  return reportObject;
}
