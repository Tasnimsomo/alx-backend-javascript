// 2-hbtn_course.js
export default class HolbertonCourse {
    constructor(name, length, students) {
        // Validate and initialize name attribute
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string');
        }

        // Validate and initialize length attribute
        if (typeof length === 'number') {
            this._length = length;
        } else {
            throw new TypeError('Length must be a number');
        }

        // Validate and initialize students attribute
        if (Array.isArray(students)) {
            this._students = students;
        } else {
            throw new TypeError('Students must be an array');
        }
    }

    // Getters and setters
    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength === 'number') {
            this._length = newLength;
        } else {
            throw new TypeError('Length must be a number');
        }
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (Array.isArray(newStudents)) {
            this._students = newStudents;
        } else {
            throw new TypeError('Students must be an array');
        }
    }
}

