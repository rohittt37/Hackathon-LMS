import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { connectDB } from './src/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the LMS API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



