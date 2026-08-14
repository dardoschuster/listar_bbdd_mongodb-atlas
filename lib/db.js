import { MongoClient } from "mongodb";
const dbName = "crud_personas";
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const db = client.db(dbName);

// Cierra la conexión cuando el proceso termine
process.on("exit", () => {
  client.close();
});

export default db;
