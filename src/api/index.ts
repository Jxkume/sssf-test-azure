import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import categoryRoute from "./routes/categoryRoute";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "just testing azure",
  });
});

router.use("/categories", categoryRoute);

export default router;
