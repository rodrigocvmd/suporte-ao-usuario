const express = require("express");
const express = require("dotenv");
const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
