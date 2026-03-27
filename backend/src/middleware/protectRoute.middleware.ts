import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function protectRoute(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        // Verify the token and cast the result
        const decoded = jwt.verify(token, secret) as { userId: string; role: string };

        // TypeScript now recognizes req.user thanks to the declaration above
        req.user = {
            id: decoded.userId,
            role: decoded.role
        };

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
}