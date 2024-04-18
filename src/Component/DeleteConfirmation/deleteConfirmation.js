import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteStudent } from '../../data/students';

const DeleteConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const { success } = deleteStudent(id);
    if (success) {
      // Redirect to the updated student list if deletion was successful
      navigate('/students');
    } else {
      // Handle the error if the student was not found or deletion was unsuccessful
      console.error('Error: Student not found or could not be deleted.');
    }
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
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
