import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStudent } from "../../data/students";

const DeleteConfirmation = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    deleteStudent(id);
    history.push("/students");
  };

  const handleCancel = () => {
    history.goBack();
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
