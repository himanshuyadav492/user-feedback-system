const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let feedbackList = []; // memory में store हो रहा है

app.post('/api/feedback', (req, res) => {
  const { name, email, feedback } = req.body;
  if (name && email && feedback) {
    feedbackList.push({ name, email, feedback });
    return res.status(200).json({ message: 'Feedback received' });
  }
  res.status(400).json({ message: 'Invalid input' });
});

app.get('/api/feedback', (req, res) => {
  res.status(200).json(feedbackList);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
