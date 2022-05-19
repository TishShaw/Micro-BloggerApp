import { Collection, MongoClient } from "mongodb";
import { environment } from "./environments/environment";

export let dbCollection: Collection;

const client = new MongoClient(environment.connectionString);

export const connectToDatabase = async() => {
    await client.connect();
    const db = client.db('blogger');
    dbCollection = db.collection('posts') as Collection;
}