require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const fs = require('fs');
const path = require('path');
// Initialize express app
const app = express();
const jwt = require('jsonwebtoken');
// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json

// Middleware to check if the request has a valid JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log("Authorization Header:", authHeader); // Log the entire Authorization header

    const token = authHeader && authHeader.split(' ')[1];
    console.log("Extracted Token:", token); // Log the extracted token

    if (!token) {
        console.log("No token found");
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("Token verification error:", err.message); // Log the error message
            return res.status(403).json({ error: 'Forbidden' });
        }
        console.log("User from token:", user); // Log the user info from the token
        req.user = user;
        next();
    });
};


// MongoDB connection
const mongoDBUri = 'mongodb+srv://skutsch:<password>@cluster0.v6qqla5.mongodb.net/';
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB successfully connected");
    hashAdminPassword(); // Call this function after connecting to MongoDB
  })
  .catch(err => console.log(err));

async function hashAdminPassword() {
  try {
    const adminUser = await User.findOne({ email: "Admin@iastate.edu" });
    if (adminUser && !adminUser.password.startsWith('$2b$')) {
      const hashedPassword = await bcrypt.hash(adminUser.password, 10);
      adminUser.password = hashedPassword;
      await adminUser.save();
      console.log('Admin password has been hashed and updated.');
    }
  } catch (error) {
    console.error("Error during admin password hashing:", error);
  }
}


const userSchema = new mongoose.Schema({
  password: String,
  name: String,
  email: String,
  address: String,
  phone: String,
  HotSandwich: Number,
  ColdSandwich: Number,
  Pastries: Number,
  Salads: Number,
  Panning: Number,
  Pizza: Number,
  Breakfast: Number,
  Soup: Number,
  IsAdmin: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User; // If defined in a separate file

// Route to fetch user profile using the JWT token
app.get('/api/profile', authenticateToken, async (req, res) => {
    // Fetch the user profile based on req.user (which contains user data from the token)
    try {
      const userId = req.user.userId; // Adjust this based on your JWT payload
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Return the user profile data
      const userProfile = {
        fullName: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        HotSandwich: user.HotSandwich,
        ColdSandwich: user.ColdSandwich,
        Pastries: user.Pastries,
        Salads: user.Salads,
        Panning: user.Panning,
        Pizza: user.Pizza,
        Breakfast: user.Breakfast,
        Soup: user.Soup,
        IsAdmin: user.IsAdmin
      };
      
      res.json(userProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// Add this route to update training progress
app.post('/api/training/complete', authenticateToken, async (req, res) => {
  try {
    // Extract the user ID from the authenticated token
    const userId = req.user.userId; // Adjust this based on your JWT payload

    // Update the training progress for the specific category (e.g., ColdSandwich)
    const { category } = req.body; // Assuming you send the category with the request
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the training progress for the specific category
    if (user[category] !== undefined) {
      user[category] += 1; // Increment the training progress
    } else {
      return res.status(400).json({ error: 'Invalid category' });
    }

    // Save the updated user object
    await user.save();

    // Return the updated user object or a success message
    res.json({ message: 'Training progress updated successfully', user });
  } catch (error) {
    console.error('Error updating training progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.patch('/api/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const updateData = req.body; // Data to update
  
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      // Compare the provided password with the hashed password from the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
  
      // Generate a JWT token with user information and send it in the response
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email, // You can include other user data if needed
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      console.log("Token sent to client:", token);
      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  
  app.post('/api/user', async (req, res) => {
    // TODO: Replace with actual logic to get the current authenticated user
    const currentUserId = "currentUserIdFromAuthMechanism";
    
    try {
      const requestingUser = await User.findById(currentUserId);
  
      if (!requestingUser || requestingUser.IsAdmin !== 1) {
        return res.status(403).json({ error: 'Access denied' });
      }
  
      // Assuming user data is in the request body and passwords are hashed
      const newUser = new User(req.body);
      newUser.password = await bcrypt.hash(newUser.password, 10); // Hash the password
      await newUser.save();
  
      res.status(201).json({ message: 'New user created', newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  async function hashPassword() {
    const plainPassword = "yourPlainTextPassword";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.log('Hashed Password:', hashedPassword);
  }
  
  hashPassword();
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
