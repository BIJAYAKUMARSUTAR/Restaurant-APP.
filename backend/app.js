import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/.env' });

// Enable CORS with specific configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true,
  })
);

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter); // Corrected route

// Database connection
dbConnection();

// Error handling middleware (placed after all routes)
app.use(errorMiddleware);

export default app;
