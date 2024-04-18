import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../../data/students";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>NID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Subscribed Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.NID}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>
                {student.courses
                  ? student.courses.filter((course) => course.subscribed).length
                  : 0}
              </td>
              <td>
                <Link to={`/students/edit/${student.id}`}>Edit</Link> |
                <Link to={`/delete-confirmation/${student.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
