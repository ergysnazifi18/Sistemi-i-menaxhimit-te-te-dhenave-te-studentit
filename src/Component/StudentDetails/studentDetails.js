import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudents, updateStudent, allCourses } from '../../data/students';
import "./studentDetails.css";

const StudentDetails = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      const allStudents = await getStudents();
      const foundStudent = allStudents.find(s => s.id.toString() === id);

      const studentCourses = foundStudent
        ? foundStudent.courses
        : allCourses.map(course => ({ ...course, subscribed: false, otherInfo: "", subscribeDate: "" }));

      setStudent({ ...foundStudent, courses: studentCourses });
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setStudent(prev => ({
        ...prev,
        courses: prev.courses.map(course => course.name === name ? { ...course, subscribed: checked } : course)
      }));
    } else {
      setStudent(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(student);
    navigate('/students');
  };

  const handleCancel = () => {
    navigate('/students');
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="container mt-5 justify-content-center">
      <h2 className="text-center mb-4">Student Details</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputNID">NID:</label>
            <input type="text" className="form-control" id="inputNID" value={student.NID} readOnly />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name:</label>
            <input type="text" className="form-control" id="inputName" name="name" value={student.name} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputSurname">Surname:</label>
            <input type="text" className="form-control" id="inputSurname" name="surname" value={student.surname} onChange={handleChange} required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputGrade">Grade:</label>
            <input type="number" className="form-control" id="inputGrade" name="grade" value={student.grade} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputProfession">Profession:</label>
            <input type="text" className="form-control" id="inputProfession" name="profession" value={student.profession} onChange={handleChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEducation">Education:</label>
            <input type="text" className="form-control" id="inputEducation" name="education" value={student.education} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword">Password:</label>
          <input type="password" className="form-control" id="inputPassword" name="password" value={student.password} onChange={handleChange} required />
        </div>

        {student.courses.map(course => (
          <div className="form-check row ms-1" key={course.name}>
            <input className="form-check-input" type="checkbox" name={course.name} checked={course.subscribed} onChange={handleChange} id={`check-${course.name}`} />
            <label className="form-check-label" htmlFor={`check-${course.name}`}>
              {course.name}
            </label>
          </div>
        ))}

        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary mr-2">Save</button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default StudentDetails;
