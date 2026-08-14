import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "crud_personas";

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const client = new MongoClient(uri);
const db = client.db(dbName);

export default db;
