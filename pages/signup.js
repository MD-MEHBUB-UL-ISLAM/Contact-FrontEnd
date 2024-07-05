import { useState } from 'react';
import axios from 'axios';
import HobbiesInput from '../components/HobbiesInput';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    hobbies: [],
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHobbiesChange = (hobbies) => {
    setFormData({ ...formData, hobbies });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/contacts', formData);
      setSuccess(true);
    } catch (err) {
      setError('Error submitting form');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>
      {success && <p className="text-success">Contact saved successfully!</p>}
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-control" onChange={handleChange} value={formData.name} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea id="address" name="address" className="form-control" onChange={handleChange} value={formData.address} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" id="phone" name="phone" className="form-control" onChange={handleChange} value={formData.phone} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control" onChange={handleChange} value={formData.email} required />
        </div>
        <div className="mb-3">
          <label htmlFor="hobbies" className="form-label">Hobbies</label>
          <HobbiesInput value={formData.hobbies} onChange={handleHobbiesChange} />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
