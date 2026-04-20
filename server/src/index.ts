import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { profileRouter } from './routes/profile.js';
import { planRouter } from './routes/plan.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://gym-ai-frontend.onrender.com', 'http://localhost:5173']
    : 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// API Router
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});