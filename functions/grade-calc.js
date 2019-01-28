// Students score, total possible score
// 15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalculation = function(studentScore, outOf){
    const percentage = (studentScore / outOf) * 100
    let grade = ''

    if (percentage >= 90){
        grade = 'A'
    } else if (percentage >= 80){
        grade = 'B'
    } else if(percentage >= 70){
        grade = 'C'
    } else if(percentage >= 60){
        grade = 'D'
    } else{
        grade = 'F'
    }

    return `You got grade ${grade} (${studentScore}/${outOf} or ${percentage}%)`
}

const result = gradeCalculation(75, 100)
console.log(result)