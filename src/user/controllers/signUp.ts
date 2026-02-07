import { Response, Request } from "express";
import { userServices } from "../services";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Call the service to create a new user
    const newUser = await userServices.signUp({
      firstName,
      lastName,
      email,
      password,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error creating user";
    res
      .status(500)
      .json({ message: "Error creating user", error: errorMessage });
  }
};
