
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllContacts } from '../../lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const contacts = await getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error('Get messages error:', error);
    return res.status(500).json({ error: 'Failed to fetch messages' });
  }
}
