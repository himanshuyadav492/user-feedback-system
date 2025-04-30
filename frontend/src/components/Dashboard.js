import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [categoryFilter, setCategoryFilter] = useState('');
  async function fetchFeedback() {
    try {
      const response = await axios.get('http://localhost:5000/api/feedbacks');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  }

  useEffect(() => {
    fetchFeedback();
  }, [sortOrder, categoryFilter]);

  return (
    <div>
      <h2>Feedback Dashboard</h2>
      <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
        <option value="">All Categories</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug Report">Bug Report</option>
        <option value="Feature Request">Feature Request</option>
      </select>
      <button onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}>
        Sort by Date ({sortOrder})
      </button>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback._id}>
            <strong>{feedback.name}</strong> ({feedback.email})<br />
            <em>{feedback.category}</em><br />
            {feedback.feedback}<br />
            {new Date(feedback.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
