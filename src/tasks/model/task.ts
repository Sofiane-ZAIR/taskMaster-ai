import mongoose, { Document, Schema, model, Types } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  owner: Types.ObjectId;
}

const TaskSchema: Schema<ITask> = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Task = model<ITask>("Task", TaskSchema);
