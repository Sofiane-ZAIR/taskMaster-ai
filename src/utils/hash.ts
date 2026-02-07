import { createHash } from "node:crypto";
import bcrypt from "bcrypt";

export const hashEmail = (email: string): string => {
  const hashedEmail = createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex");
  if (!hashedEmail) {
    console.error("Failed to hash email");
    throw new Error("Failed to hash email");
  }
  return hashedEmail;
};

export const hashPassword = (password: string): Promise<string> => {
  const hashedPasswod = bcrypt.hash(password, 10);

  if (!hashedPasswod) {
    console.error("Failed to hash password");
    throw new Error("Failed to hash password");
  }

  return hashedPasswod;
};

export const verifyPassword = (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
