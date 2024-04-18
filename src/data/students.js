const studentsData = [
  {
    id: 1,
    NID: "1234",
    name: "Test",
    surname: "SurnameTest",
    grade: 9.55,
    profession: "Student",
    education: "University of the Arts, 'Special Arts' branch",
    courses: [
      {
        name: "Special Arts",
        subscribed: true,
        otherInfo: "",
        subscribeDate: "2022-04-01",
      },
      {
        name: "Non-special arts",
        subscribed: true,
        otherInfo: "",
        subscribeDate: "2022-05-12",
      },
      {
        name: "Simple Arts",
        subscribed: false,
        otherInfo: "",
        subscribeDate: "",
      },
    ],
    password: "Admin123",
  },
];

export const allCourses = [
  { name: "Special Arts" },
  { name: "Non-special arts" },
  { name: "Simple Arts" },
];

export const getStudents = () => {
  return Promise.resolve(studentsData);
};

export const addStudent = (student) => {
  student.courses = allCourses.map((course) => ({
    ...course,
    subscribed: false,
    otherInfo: "",
    subscribeDate: "",
  }));
  const exists = studentsData.some((s) => s.NID === student.NID);
  if (!exists) {
    student.id = studentsData.length + 1;
    studentsData.push(student);
    return { success: true };
  }
  return { success: false, message: "NID already registered." };
};

export const updateStudent = (updatedStudent) => {
  const index = studentsData.findIndex((s) => s.id === updatedStudent.id);
  if (index !== -1) {
    studentsData[index] = updatedStudent;
    return { success: true };
  }
  return { success: false, message: "Student not found." };
};

export const deleteStudent = (idToDelete) => {
  const index = studentsData.findIndex(
    (student) => student.id.toString() === idToDelete
  );
  if (index !== -1) {
    studentsData.splice(index, 1); // Remove the student from the array
    return { success: true };
  }
  return { success: false, message: "Student not found." };
};
