
// Prompts user to input students marks
function studentsMarks(Grade){

//condtional statement to execute the grade
if (Grade >= 80 && Grade <= 100) {
    return `"A"`;
} else if (Grade >= 60 && Grade <= 79) {
    return `"B"`;
} else if (Grade >= 50 && Grade <= 59) {
    return `"C"`;
} else if (Grade >= 40 && Grade <= 49) {
    return `"D"`;
} else if (Grade < 40 && Grade >= 0) {
    return `"E"`;
} else {
    return `"Invalid input. Please enter a number between 0 and 100."`;
  }
}

console.log(studentsMarks(55))