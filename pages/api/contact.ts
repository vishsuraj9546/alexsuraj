import type { NextApiRequest, NextApiResponse } from 'next';
import { insertContact } from '../../lib/database';
import { sendNotificationEmail } from '../../lib/email-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // ✅ Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (message.length > 500) {
      return res.status(400).json({ error: 'Message must be 500 characters or less' });
    }

    // ✅ Save message to SQLite
    const dbResult = await insertContact(name, email, message);
    if (!dbResult.success) {
      console.error('❌ DB Error:', dbResult.error);
      return res.status(500).json({ error: 'Failed to save message' });
    }

    // ✅ Send notification email
    const emailResult = await sendNotificationEmail(name, email, message);
    if (!emailResult.success) {
      console.error('⚠️ Email notification failed:', emailResult.error);
    }

    // ✅ Success response
    return res.status(200).json({ 
      message: '✅ Message sent successfully!',
      emailSent: emailResult.success 
    });

  } catch (error) {
    console.error('❌ API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
