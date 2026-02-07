import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  emailHash: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailHash: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", UserSchema);

export default User;
