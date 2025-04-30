const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // Change this if needed

app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse incoming JSON

// Simple feedback route
app.get('/api/feedbacks', (req, res) => {
  const feedbacks = [
    { id: 1, comment: 'Great app!' },
    { id: 2, comment: 'Needs improvement.' }
  ];
  res.json(feedbacks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
