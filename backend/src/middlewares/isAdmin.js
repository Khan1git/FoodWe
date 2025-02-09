import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

export const isAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.isAdmin || decoded.isAdmin !== true) {
      return res.status(403).json({ message: "Access denied. Admins only!" });
    }

    req.user = decoded; // Attach user info to request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
