import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // Check if required fields are present
  if (!firstName || !lastName || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the complete reservation form", 400));
  }

  try {
    // Create a new reservation
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    // Handle Mongoose validation error
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(". "), 400));
    }
    
    // Pass any other error to the global error handler
    return next(error);
  }
};
