/** @format */

import {
  connectDb,
  getAllDocuments,
  insertDocument,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const id = req.query.eventId;
  let client;
  try {
    client = await connectDb();
  } catch (err) {
    res.status(500).json({ message: 'Connecting the db failed' });
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || !text || text === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId: id,
    };

    try {
      const result = await insertDocument(client, 'comments', newComment);
      res.status(201).json({ message: 'success', comment: newComment });
    } catch (err) {
      res.status(500).json({ message: 'Inserting failed' });
    }
  }

  if (req.method === 'GET') {
    let documents;
    try {
      documents = await getAllDocuments(
        client,
        'comments',
        { _id: -1 },
        { eventId: id }
      );
      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: 'Getting error' });
    }
  }

  client.close();
}

export default handler;
