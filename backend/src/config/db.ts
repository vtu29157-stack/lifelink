import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/lifelink',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

export const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone TEXT NOT NULL,
        role TEXT DEFAULT 'GUEST',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS donors (
        donor_id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        full_name TEXT NOT NULL,
        age INTEGER NOT NULL,
        gender TEXT NOT NULL,
        blood_group TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        address TEXT NOT NULL,
        last_donation_date DATE,
        weight REAL NOT NULL,
        medical_conditions TEXT,
        availability_status BOOLEAN DEFAULT true,
        profile_image TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS blood_requests (
        request_id SERIAL PRIMARY KEY,
        patient_name TEXT NOT NULL,
        blood_group TEXT NOT NULL,
        units_required INTEGER NOT NULL,
        hospital_name TEXT NOT NULL,
        hospital_address TEXT NOT NULL,
        contact_person TEXT NOT NULL,
        contact_number TEXT NOT NULL,
        city TEXT NOT NULL,
        emergency_level TEXT DEFAULT 'Normal',
        request_status TEXT DEFAULT 'Pending',
        request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS donations (
        donation_id SERIAL PRIMARY KEY,
        donor_id INTEGER NOT NULL REFERENCES donors(donor_id) ON DELETE CASCADE,
        donation_date DATE NOT NULL,
        units_donated INTEGER NOT NULL,
        hospital_name TEXT NOT NULL,
        remarks TEXT
      );

      CREATE TABLE IF NOT EXISTS notifications (
        notification_id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('PostgreSQL Database Initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export const query = (text: string, params?: any[]) => pool.query(text, params);
