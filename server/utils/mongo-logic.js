const mongodb = require("mongodb");
const dotenv = require("dotenv");

dotenv.config({path:'../.env'});

const connectToDB = async function () {
  console.log(process.env);
  const client = await mongodb.MongoClient.connect(
    process.env.MONGO_LINK,
    {
      useNewUrlParser: true,
    }
  );
  return client;
};

module.exports = {
  connectToDB,
};
