import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    category: 'Suggestion'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', formData);
      alert('Feedback submitted!');
      setFormData({ name: '', email: '', feedback: '', category: 'Suggestion' });
    } catch (error) {
      alert('Error submitting feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="feedback" placeholder="Feedback" value={formData.feedback} onChange={handleChange} required />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option>Suggestion</option>
        <option>Bug Report</option>
        <option>Feature Request</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
