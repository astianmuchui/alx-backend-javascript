const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.trim().split('\n');

      const nonEmptyRows = rows.filter((row) => row.trim() !== '');

      if (nonEmptyRows.length === 0) {
        reject(new Error('Empty database'));
        return;
      }

      const students = [];

      for (let i = 1; i < nonEmptyRows.length; i += 1) {
        const fields = nonEmptyRows[i].split(',');
        const student = {
          firstname: fields[0],
          lastname: fields[1],
          age: parseInt(fields[2], 16),
          field: fields[3],
        };
        students.push(student);
      }

      const fields = {};
      students.forEach((student) => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });

      Object.entries(fields).forEach(([field, firstnames]) => {
        console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      });

      console.log(`Number of students: ${students.length}`);
      resolve();
    });
  });
}

module.exports = countStudents;
