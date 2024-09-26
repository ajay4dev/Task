const express = require("express");
const {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
} = require("../controllers/cmsController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/page", authMiddleware, createPage);

router.get("/pages", authMiddleware, getAllPages);

router.get("/page/:id", authMiddleware, getPageById);

router.put("/page/:id", authMiddleware, updatePage);

router.delete("/page/:id", authMiddleware, deletePage);

module.exports = router;
