export default class HolbertonCourse {
  constructor(_name, _length, _students) {
    if (typeof _name === 'string') {
      this._name = _name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof _length === 'number') {
      this._length = _length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(_students) && _students.every((student) => typeof student === 'string')) {
      this._students = _students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
