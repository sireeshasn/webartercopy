const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sireesha2622:Siri12345@cluster0.ekefhyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other user fields as needed
});

// Define a user model
const User = mongoose.model('User', userSchema);

// Define a route handler for /api/users
app.get('/api/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();
    res.json(users); // Send the users as JSON response
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
