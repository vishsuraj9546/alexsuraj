
'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        setError('Failed to fetch messages');
      }
    } catch (err) {
      setError('Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-white/70 text-lg">
            Manage your contact form messages
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        <div className="grid gap-6">
          {messages.length === 0 ? (
            <div className="text-center text-white/70 py-12">
              <i className="ri-message-line text-6xl mb-4 opacity-50"></i>
              <p className="text-xl">No messages yet</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 p-6 rounded-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{message.name}</h3>
                    <p className="text-white/70">{message.email}</p>
                  </div>
                  <div className="text-white/50 text-sm">
                    {new Date(message.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-white/90 leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={fetchMessages}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            <i className="ri-refresh-line mr-2"></i>
            Refresh Messages
          </button>
        </div>
      </div>
    </div>
  );
}
