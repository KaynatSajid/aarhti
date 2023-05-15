const app = require("./app");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = 8500;
const user = require("../Models/userModel");
const uri = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);

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

app.listen(port, () => {
  console.log("server listening to requests");
});
