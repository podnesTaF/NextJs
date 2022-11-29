/** @format */

import { MongoClient } from 'mongodb';

export const connectDb = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://podnes:podnes1972@cluster0.8sfxpos.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
};

export const insertDocument = async (client, collection, documents) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(documents);

  return result;
};

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
