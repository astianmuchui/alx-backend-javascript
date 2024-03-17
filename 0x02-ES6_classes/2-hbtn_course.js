export default class HolbertonCourse {
  constructor(_name, _length, _students) {
    this.name = _name;
    this.length = _length;
    this.students = _students;
  }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        }
    }

    get length() {
        return this._length;
    }

    set length(value) {
        if (typeof value === 'number') {
            this._length = value;
        }
    }

    get students() {
        return this._students;
    }

    set students(value) {
        if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
            this._students = value;
        }
    }

}
