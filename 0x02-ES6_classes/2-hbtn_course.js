export default class HolbertonCourse {
  constructor(_name, _length, _students) {
    if (typeof _name === 'string') {
      this._name = _name;
    }
    if (typeof _length === 'number') {
      this._length = _length;
    }
    if (Array.isArray(_students) && _students.every((student) => typeof student === 'string')) {
      this._students = _students;
    }
  }
}
