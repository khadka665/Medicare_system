const express = require("express");
const path = require("path");

const app = express();

/* Static Files */
app.use(express.static(path.join(__dirname, "public")));

/* Frontend */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* Admin Dashboard */
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin.html"));
});

/* Start Server */
app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});