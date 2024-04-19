import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../../data/students";
import "./studentList.css";

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
    <div className="student_table my-5">
    <h2 className="text-center mb-4">Student List</h2>
    <table className="table table-hover">
      <thead className="thead-dark">
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
              <Link to={`/students/edit/${student.id}`} className="btn btn-primary btn-sm">Edit</Link>
              <Link to={`/delete-confirmation/${student.id}`} className="btn btn-danger btn-sm ">Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default StudentList;
