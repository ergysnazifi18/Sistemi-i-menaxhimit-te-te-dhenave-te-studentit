const studentsData = [
  {
    id: 1,
    NID: "1234",
    name: "Test",
    surname: "SurnameTest",
    grade: 9.55,
    profession: "Student",
    education: "University of Epoka",
    courses: [
      {
        name: "Mathematics",
        subscribed: true,
        otherInfo: "",
        subscribeDate: "2022-04-01",
      },
      {
        name: "Spanish",
        subscribed: true,
        otherInfo: "",
        subscribeDate: "2022-05-12",
      },
      {
        name: "Geographics",
        subscribed: false,
        otherInfo: "",
        subscribeDate: "",
      },
    ],
    password: "Admin123",
  },
];

export const allCourses = [
  { name: "Mathematics" },
  { name: "Spanish" },
  { name: "Geographics" },
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
    studentsData.splice(index, 1); 
    return { success: true };
  }
  return { success: false, message: "Student not found." };
};
