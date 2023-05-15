const fs = require("fs");

const app = require("./Main/app");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const sellerCrops=require('./Models/sellerCropsModel');

const crop = require("./Models/cropDescription");
const uri =
  "mongodb+srv://zasifbscs19seecs:<password>@cluster0.v9qtivh.mongodb.net/aarhti?retryWrites=true&w=majority".replace(
    "<password>",
    "WZlA3njH2U37ClYk"
  );

const data = JSON.parse(fs.readFileSync("../src/components/dataseller.js", "utf-8"));

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then((con) => {
    //console.log(con.connections);
    console.log("connection successful");
  });

const insertData = async () => {
  try {
    const create = await sellerCrops.create(data);
    console.log("load successful");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await crop.deleteMany();
    console.log("Delete successful");
    process.exit();
  } catch (err) {
    console.log("error");
  }
};

insertData(data);
