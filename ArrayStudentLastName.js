let studentArr = [{
    firstName: 'Adi',
    lastName: 'Fischer',
},
{
    firstName: 'Emily',
    lastName: 'LaBelle',
},
{
    firstName: 'Cari',
    lastName: 'Licor',
},
{
    firstName: 'Fanessa',
    lastName: 'Hilaire',
},]
function studentsLastNameFinder(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        const student = studentArr[i]
        console.log(student.lastName)
    }

}
studentsLastNameFinder(studentArr)
