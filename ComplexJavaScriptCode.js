/* Filename: ComplexJavaScriptCode.js */

// A complex JavaScript code example demonstrating object-oriented programming and data manipulation
// This code creates a student management system with courses, students, grades, and attendance tracking

// Course class
class Course {
  constructor(name, instructor) {
    this.name = name;
    this.instructor = instructor;
    this.students = [];
    this.grades = new Map();
  }
  
  enrollStudent(student) {
    this.students.push(student);
  }
  
  addGrade(student, grade) {
    this.grades.set(student, grade);
  }
  
  getAverageGrade() {
    let sum = 0;
    for (let grade of this.grades.values()) {
      sum += grade;
    }
    return sum / this.grades.size;
  }
}

// Student class
class Student {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.courses = [];
  }
  
  enrollCourse(course) {
    this.courses.push(course);
    course.enrollStudent(this);
  }
  
  getCourseGrades(course) {
    return course.grades.get(this);
  }
}

// Create courses
const mathCourse = new Course("Mathematics", "John Smith");
const physicsCourse = new Course("Physics", "Jane Doe");

// Create students
const student1 = new Student("Alice", 123456, "alice@example.com");
const student2 = new Student("Bob", 789012, "bob@example.com");

// Enroll students in courses
student1.enrollCourse(mathCourse);
student1.enrollCourse(physicsCourse);
student2.enrollCourse(physicsCourse);

// Add grades for students
mathCourse.addGrade(student1, 95);
mathCourse.addGrade(student2, 90);
physicsCourse.addGrade(student1, 80);
physicsCourse.addGrade(student2, 85);

// Print average grades for courses
console.log(`Average grade for ${mathCourse.name}: ${mathCourse.getAverageGrade().toFixed(2)}`);
console.log(`Average grade for ${physicsCourse.name}: ${physicsCourse.getAverageGrade().toFixed(2)}`);

/* Sample Output:
Average grade for Mathematics: 92.50
Average grade for Physics: 82.50
*/

// Attendance tracking example
class AttendanceTracker {
  constructor() {
    this.students = [];
    this.attendanceRecords = new Map();
  }

  addStudent(student) {
    this.students.push(student);
    this.attendanceRecords.set(student, []);
  }

  markAttendance(student, date) {
    const attendance = this.attendanceRecords.get(student);
    attendance.push(date);
  }

  getAttendance(student) {
    return this.attendanceRecords.get(student);
  }
}

// Create attendance tracker
const attendanceTracker = new AttendanceTracker();

// Add students
attendanceTracker.addStudent(student1);
attendanceTracker.addStudent(student2);

// Mark attendance
attendanceTracker.markAttendance(student1, "2022-01-01");
attendanceTracker.markAttendance(student1, "2022-01-02");
attendanceTracker.markAttendance(student2, "2022-01-01");

// Get attendance records
const student1Attendance = attendanceTracker.getAttendance(student1);
const student2Attendance = attendanceTracker.getAttendance(student2);

console.log("\nAttendance Records:");
console.log(`Student: ${student1.name}, Attendance: ${student1Attendance}`);
console.log(`Student: ${student2.name}, Attendance: ${student2Attendance}`);

/* Sample Output:
Attendance Records:
Student: Alice, Attendance: 2022-01-01,2022-01-02
Student: Bob, Attendance: 2022-01-01
*/

// ... Add more complex functionalities or additional classes as needed

// End of code