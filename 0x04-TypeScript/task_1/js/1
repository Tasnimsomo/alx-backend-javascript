interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [contract: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
	firstName: string;
	lastName: string;
}

function printTeacher(firstName: string, lastName: string) : string {
	return firstName.charAt(0) + "." + lastName
}

interface constructor {
	firstName: string;
	lastName:string;
}

interface class {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass {
	constructor(private firstName: string, private lastName: string) {
	}
	workOnHomework() {
		return 'Currently working'
	}
	displayName() {
		return this.firstName
	}

