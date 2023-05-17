import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE ROOM
router.post("/:hotelId", verifyAdmin, createRoom);

// UPDATE ROOM
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

// DELETE ROOM
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// Get Room
router.get("/:id", getRoom);

// GET ROOMS
router.get("/", getRooms);

export default router;
