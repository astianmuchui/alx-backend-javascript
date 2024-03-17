export default function getSudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
