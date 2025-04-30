import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // 🔄 Fetch feedback on page load
  useEffect(() => {
    axios.get('http://localhost:5000/api/feedback')
      .then(res => {
        console.log("Fetched data:", res.data);
        setData(res.data);
      })
      .catch(err => console.error("Error fetching feedback:", err));
  }, []);

  // 📤 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/feedback', {
        name,
        email,
        feedback,
      });
      console.log(response.data);
      setSuccess('Feedback submitted successfully!');
      setError('');
      setName('');
      setEmail('');
      setFeedback('');

      // Refresh feedback list
      const res = await axios.get('http://localhost:5000/api/feedback');
      setData(res.data);

    } catch (error) {
      console.error(error);
      setError('Error submitting feedback. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <h1>User Feedback System</h1>

      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>

      {success && <p className="success">{success}</p>}
      {error && <p className="error">{error}</p>}

      <h2>Feedback List</h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="feedback-item">
            <h4>{item.name}</h4>
            <p><strong>Email:</strong> {item.email}</p>
            <p>{item.feedback}</p>
          </div>
        ))
      ) : (
        <p>No feedback available</p>
      )}
    </div>
  );
}

export default App;
