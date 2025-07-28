
import { NextApiRequest, NextApiResponse } from 'next';
import { insertContact } from '../../lib/database';
import { sendNotificationEmail } from '../../lib/email-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (message.length > 500) {
      return res.status(400).json({ error: 'Message must be 500 characters or less' });
    }

    const dbResult = await insertContact(name, email, message);
    
    if (!dbResult.success) {
      return res.status(500).json({ error: 'Failed to save message' });
    }

    const emailResult = await sendNotificationEmail(name, email, message);
    
    if (!emailResult.success) {
      console.error('Email notification failed:', emailResult.error);
    }

    return res.status(200).json({ 
      message: 'Message sent successfully!',
      emailSent: emailResult.success 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
