export default function updateStudentGradeByCity(stufents, city, newGrades) {
	return students
	.filter((student student.location.localeCompare(city) === 0)
	.map((a) => {
		const newGrade = newGrade.filter(b) => b.studentId === a.id);
		const student = a;
		lf (newGrade.length === 1) student.grade = newGrade[0].grade;
		else student.grade = 'N/A';
		return student;
	});
}
