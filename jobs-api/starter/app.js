require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

//connectDB
const connectDB = require("./db/connect");
app.use(express.json());
//routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

// error handlers

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//extra packages
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
