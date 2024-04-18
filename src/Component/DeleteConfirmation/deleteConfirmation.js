import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteStudent } from "../../data/students";

const DeleteConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteStudent(id);
    navigate("/students");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Are you sure you want to delete this record?!</h2>
      <button onClick={handleDelete}>YES</button>
      <button onClick={handleCancel}>NO</button>
    </div>
  );
};

export default DeleteConfirmation;
