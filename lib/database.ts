import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
const db = new sqlite.Database('./contacts.db');

// ✅ Manual promise wrapper for db.run (INSERT, UPDATE, DELETE)
const runAsync = (sql: string, params: any[] = []): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
};

// ✅ Manual promise wrapper for db.all (SELECT)
const allAsync = <T = any>(sql: string, params: any[] = []): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows: any[]) => {
      if (err) reject(err);
      else resolve(rows as T[]);  // ✅ Type assertion added
    });
  });
};

// ✅ Initialize database & create table if not exists
export const initDatabase = async () => {
  try {
    await runAsync(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Database initialization error:', error);
  }
};

// ✅ Insert contact into database
export const insertContact = async (name: string, email: string, message: string) => {
  try {
    await runAsync(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return { success: true };
  } catch (error) {
    console.error('❌ Insert contact error:', error);
    return { success: false, error };
  }
};

// ✅ Get all contacts
export const getAllContacts = async () => {
  try {
    const contacts = await allAsync(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );
    return contacts;
  } catch (error) {
    console.error('❌ Get contacts error:', error);
    return [];
  }
};

// ✅ Initialize database when file loads
initDatabase();
