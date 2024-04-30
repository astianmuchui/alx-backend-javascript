const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const rows = data.trim().split('\n');

    const nonEmptyRows = rows.filter((row) => row.trim() !== '');

    if (nonEmptyRows.length === 0) {
      throw new Error('Empty database');
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

    console.log(`Number of students: ${students.length}`);

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
  } catch (error) {
    console.error('Error: Cannot load the database');
  }
}

module.exports = countStudents;
