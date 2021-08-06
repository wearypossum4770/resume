/** @format */

import nano from "nano";
const client = nano("http://admin:root@localhost:5984");

// const collection = _db.collection('documents');
const userTable = async () => {
  try {
    const response = await client.db.create("users");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
userTable();
const insertDocuments = (documents) => {
  let docs = client.db.create("");
};
const insertMany = () => null;
const findOne = async () => {};
const findById = async () => {};
