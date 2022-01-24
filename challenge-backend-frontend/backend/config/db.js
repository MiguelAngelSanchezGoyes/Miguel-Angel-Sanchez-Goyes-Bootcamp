require("dotenv").config();
const mongoose = require("mongoose");

async function mongoConnect() {
  const user = process.env.DBUSER;
  const passwd = process.env.DBPASSWD;
  let databaseName;

  console.log("NODE_ENV", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "test") {
    databaseName = process.env.DBNAME_TEST;
    console.log("DBNAME_TEST", { databaseName });
  } else if (process.env.NODE_ENV === "dev") {
    databaseName = process.env.DBNAME;
    console.log("DBNAME", { databaseName });
  } else {
    databaseName = process.env.DBNAME_PROD;
  }

  const uri = `mongodb+srv://${user}:${passwd}@miguelcluster0.egcdt.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
  console.log(uri);

  const mongooseConnect = await mongoose.connect(uri);

  return mongooseConnect;
}

module.exports = mongoConnect;
