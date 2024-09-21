import express from "express";
import {
  DeleteData,
  GetData,
  GetDataById,
  PostData,
  UpdateData,
} from "../controllers/Controller.js";

const router = express.Router();
//CRUD
router.post("/post", PostData);
router.get("/post", GetData);
router.get("/post/:id", GetDataById);
router.put("/post/:id", UpdateData);
router.delete("/post/:id", DeleteData);
export default router;
