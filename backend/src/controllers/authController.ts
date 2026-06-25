import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { query } from '../config/db';

const generateToken = (id: number, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d' as any,
  });
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { full_name, email, password, phone, role } = req.body;

    const existingUserRes = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUserRes.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userRole = role === 'ADMIN' ? 'ADMIN' : (role === 'DONOR' ? 'DONOR' : 'GUEST');

    const result = await query(
      'INSERT INTO users (full_name, email, password, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [full_name, email, hashedPassword, phone, userRole]
    );

    const userId = result.rows[0].id;

    res.status(201).json({
      id: userId,
      full_name,
      email,
      role: userRole,
      token: generateToken(userId, userRole)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userRes = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = userRes.rows[0];
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role)
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
