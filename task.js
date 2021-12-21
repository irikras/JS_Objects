function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...newmarks) {
  if (this.marks === undefined) {
    this.marks = [...newmarks];
  } else {
    this.marks.push(...newmarks);
  }
}

Student.prototype.getAverage = function() {
  const sum = this.marks.reduce((total, mark) => total + mark);
  const lenght = this.marks.length;
  return sum / lenght;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

