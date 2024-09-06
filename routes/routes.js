import Router from "express";
import PostComplaint from "../contollers/PostComplaint.js";

const router = Router();

router.post("/post", PostComplaint);

export default router;
