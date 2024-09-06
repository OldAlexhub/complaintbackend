import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: {
    type: String,
    enum: ["Planning", "Finance", "Transportation", "Customer Service"],
    default: "Customer Service",
  },
  complaint: {
    type: String,
    maxlength: 120,
    required: true,
  },
});

const ComplaintModel = mongoose.model("complaints", ComplaintSchema);

export default ComplaintModel;
