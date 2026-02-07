import { IUser } from "../model/user";
import { hashEmail, verifyPassword } from "@/utils/hash";
import User from "../model/user";
import { generateToken } from "@/utils/auth";

interface LoginInterface {
  user: IUser;
  token: string;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginInterface> => {
  try {
    const hashedEmail = hashEmail(email);
    const user = await User.findOne({ emailHash: hashedEmail });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    //Générer un token d'authentification
    const userId = user._id.toString();
    const token = generateToken({ userId });
    if (!token) {
      throw new Error("Failed to generate authentication token");
    }

    return { user, token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error?.message || "Error creating user");
    }
    throw new Error("Error creating user");
  }
};
