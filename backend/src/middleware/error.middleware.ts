import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1. Log the error for the developer (server-side only)
  console.error(`[Error Log]: ${err.stack || err.message}`);

  // 2. Determine the Status Code
  // If the error has a 'status' property (like 404 or 401), use it; otherwise, default to 500
  const statusCode = err.status || 500;

  // 3. Send the Response
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message || 'Internal Server Error',
    // Only show the stack trace if we are NOT in production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler