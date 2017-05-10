//Problem 1
function makeStudentsReport(data) {
  // your code here
  const arr = [];
  for(let i = 0; i< data.length;i++){
  	arr.push(data[i].name+": "+data[i].grade);
  }
  return arr;
}

//Problem 2
function enrollInSummerSchool(students) {
  students.forEach(el => el.status = 'In Summer school');
  return students;
}


