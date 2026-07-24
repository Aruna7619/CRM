const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const leadController = require("../controllers/leadController");

router.get("/", authMiddleware, leadController.getAllLeads);

router.post("/", authMiddleware, leadController.createLead);
router.get("/:id", authMiddleware, leadController.getLeadById);

module.exports = router;