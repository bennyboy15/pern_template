import rateLimit from "express-rate-limit";

// General limiter for all API routes
export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        status: 429,
        message: "Too many requests from this IP, please try again after 15 minutes"
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Strict limiter for Auth routes
export const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // Only 5 failed attempts per hour!
    message: "Too many login attempts. Please try again in an hour.",
    skipSuccessfulRequests: true, // Only count 4xx/5xx responses
});