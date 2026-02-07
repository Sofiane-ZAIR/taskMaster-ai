import { hashEmail, hashPassword } from "@/utils/hash";
import User, { IUser } from "@/user/model/user";

interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = async (userData: IUserData): Promise<IUser> => {
  try {
    const { email, password, firstName, lastName } = userData;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const hashedEmail = hashEmail(email);
    const hashedPassword = await hashPassword(password);

    const user = new User({
      firstName,
      lastName,
      emailHash: hashedEmail,
      password: hashedPassword,
    });

    const newUser = await user.save();

    if (!newUser) {
      throw new Error("Failed to create user");
    }
    return newUser;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error?.message || "Error creating user");
    }
    throw new Error("Error creating user");
  }
};
