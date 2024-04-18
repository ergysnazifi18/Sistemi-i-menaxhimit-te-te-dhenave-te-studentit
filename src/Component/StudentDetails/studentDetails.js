import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getStudents, updateStudent } from '../data/students';

const StudentDetails = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchStudent = async () => {
      const allStudents = await getStudents();
      const foundStudent = allStudents.find(s => s.id.toString() === id);
      setStudent({ ...foundStudent });
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
    history.push('/students');
  };

  const handleCancel = () => {
    history.push('/students');
  };

  if (!student) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>NID:</label>
      <input type="text" value={student.NID} readOnly />
      <label>Name:</label>
      <input type="text" name="name" value={student.name} onChange={handleChange} />
      <label>Surname:</label>
      <input type="text" name="surname" value={student.surname} onChange={handleChange} />
      <label>Grade:</label>
      <input type="number" name="grade" value={student.grade} onChange={handleChange} />
      <label>Profession:</label>
      <input type="text" name="profession" value={student.profession} onChange={handleChange} />
      <label>Education:</label>
      <input type="text" name="education" value={student.education} onChange={handleChange} />
      <label>Password:</label>
      <input type="password" name="password" value={student.password} onChange={handleChange} />
      {student.courses.map(course => (
        <div key={course.name}>
          <label>{course.name}</label>
          <input type="checkbox" name={course.name} checked={course.subscribed} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default StudentDetails;
