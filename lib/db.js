import { MongoClient } from "mongodb";
// npm install mongodb

const uri =
  "mongodb+srv://dardo:Ds276846@cluster0.aycnp.gcp.mongodb.net/crud_personas?retryWrites=true&w=majority";
const dbName = "crud_personas";

const client = new MongoClient(uri);

const db = client.db(dbName);

export default db;
