import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addStudent } from '../../data/students';

const Register = () => {
  const [NID, setNID] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Password validation
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      setError('Password must contain at least one letter, one number, and be at least 8 characters long.');
      return;
    }

    const result = await addStudent({ NID, name, surname, password });
    if (result.success) {
      alert('You have successfully registered!');
      history.push('/login'); 
    } else {
      setError(result.message || 'Failed to register.');
    }
  };

  const handleCancel = () => {
    history.push('/login'); // Directly return to login on cancel
  };

  return (
    <div>
      <h2>Register in the Student Management System</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Student NID:</label>
          <input type="text" value={NID} onChange={e => setNID(e.target.value)} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" value={surname} onChange={e => setSurname(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
