const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");
const sellerRouter = require("../Routers/sellerRoutes");
const buyerRouter = require("../Routers/buyerRoutes");
const generalRouter = require("../Routers/generalRotes");
const cropRouter = require("../Routers/cropRouters");
const userRouter = require("../Routers/userRoutes");
const billsRouter=require('./../Routers/billRouter');
const addCropRouter=require('./../Routers/addCropRouter');
const videoRouter=require('./../Routers/videoRouter');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config({ path: `./../../config.env` });
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  //console.log(req.headers);
  console.log(req.body);
  //console.log(req.params);

  next();
});

app.use("/api/v1/aarhti/users", userRouter);
app.use("/api/v1/aarhti/crops", cropRouter);
app.use("/api/v1/aarhti/buyers", buyerRouter);
app.use("/api/v1/aarhti/sellers", sellerRouter);
app.use("/api/v1/aarhti/bills", billsRouter);
app.use("/api/v1/aarhti/videos", videoRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `router ${req.originalUrl} not found`,
  });
});

//app.use((err, req, res, next) => {});

module.exports = app;
