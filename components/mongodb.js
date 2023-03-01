import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
const  client = new MongoClient(url);
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});