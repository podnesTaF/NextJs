/** @format */

import { connectDb, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'invalid email address' });
      return;
    }

    let client;

    try {
      client = await connectDb();
    } catch (err) {
      res.status(500).json({ message: 'connecting to the db failed' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email });
      client.close();
    } catch (err) {
      res.status(500).json({ message: 'Inserting data failed' });
      return;
    }

    res.status(201).json({ message: 'success' });
  }
}

export default handler;
