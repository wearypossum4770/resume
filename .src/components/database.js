/** @format */

import mongodb from "mongodb";
let MongoClient = mongodb.MongoClient;
let client = new MongoClient(url);
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
