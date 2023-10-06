const express = require("express");
const app = express();
const port = 443; // Choose your desired port

// Serve static files from the 'neatlist-FE/build' directory
app.use(express.static("/home/ec2-user/neatlist/neatlist-FE/build"));

// Define your routes and other middleware as needed
// ...

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
