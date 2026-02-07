import jwt, { Secret } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "your_jwt_secret_key";

interface JwtPayload {
  userId: string;
  iat?: number;
  exp?: number;
}

export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 });
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error: unknown) {
    console.error("Token verification failed:", error);
    return null;
  }
};
