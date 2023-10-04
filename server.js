const express = require("express");
const app = express();

// Serve static files from the 'dist' folder
app.use(express.static("neatlist-FE\build"));

app.listen(80, () => {
  console.log("Server is running on port 80");
});
