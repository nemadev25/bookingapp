import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// // check authentication
// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("you are authenticated");
// });

// // check user
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hey user, you are logged in and authorized");
// });
// // check admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hey admin, you are logged in and authorized");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE

router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/", verifyAdmin, getUsers);
export default router;
