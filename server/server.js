const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "FinanceWise API Server",
    version: "1.0.0",
    status: "Running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Process the inquiry

    console.log("Contact form submission:", { name, email, phone, message });

    res.json({
      success: true,
      message: "Thank you for your inquiry. We will get back to you soon!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Newsletter subscription endpoint
app.post("/api/newsletter", (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Here you would typically save the email to your newsletter list
    console.log("Newsletter subscription:", email);

    res.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Sample research reports endpoint
app.get("/api/reports", (req, res) => {
  try {
    const sampleReports = [
      {
        id: 1,
        title: "Technology Sector Analysis",
        description: "Comprehensive review of IT sector with stock picks",
        recommendation: "BUY",
        date: "2025-01-15",
        category: "Sector Analysis",
      },
      {
        id: 2,
        title: "Banking Sector Deep Dive",
        description: "Analysis of PSU vs Private banks performance",
        recommendation: "HOLD",
        date: "2024-12-20",
        category: "Sector Analysis",
      },
    ];

    res.json({
      success: true,
      reports: sampleReports,
    });
  } catch (error) {
    console.error("Reports endpoint error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
