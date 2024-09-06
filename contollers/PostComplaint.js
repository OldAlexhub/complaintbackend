import ComplaintModel from "../models/compliants.js";

const PostComplaint = async (req, res) => {
  try {
    const { title, name, email, department, complaint } = req.body;

    const NewComplaint = new ComplaintModel({
      title,
      name,
      email,
      department,
      complaint,
    });
    await NewComplaint.save();

    res.status(201).json({ message: `New Complaint Submitted` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default PostComplaint;
