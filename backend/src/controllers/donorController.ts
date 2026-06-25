import { Request, Response } from 'express';
import { query as dbQuery } from '../config/db';
import { AuthRequest } from '../middleware/authMiddleware';

export const getDonors = async (req: Request, res: Response) => {
  try {
    const { blood_group, city } = req.query;
    let queryStr = `
      SELECT d.*, u.email, u.phone, COALESCE(d.full_name, u.full_name) as full_name
      FROM donors d 
      JOIN users u ON d.user_id = u.id 
      WHERE d.availability_status = true
    `;
    const params: any[] = [];
    let paramCount = 1;

    if (blood_group) {
      queryStr += ` AND d.blood_group = $${paramCount}`;
      params.push(blood_group);
      paramCount++;
    }
    if (city) {
      queryStr += ` AND d.city ILIKE $${paramCount}`;
      params.push(`%${city}%`);
      paramCount++;
    }

    const donorsRes = await dbQuery(queryStr, params);
    res.json(donorsRes.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const registerDonor = async (req: AuthRequest, res: Response) => {
  try {
    const { full_name, age, gender, blood_group, city, state, address, weight, medical_conditions } = req.body;
    const user_id = req.user?.id;

    if (!user_id) return res.status(401).json({ message: 'Unauthorized' });

    const result = await dbQuery(
      `INSERT INTO donors (user_id, full_name, age, gender, blood_group, city, state, address, weight, medical_conditions)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING donor_id`,
      [user_id, full_name, age, gender, blood_group, city, state, address, weight, medical_conditions]
    );

    // Update user role to DONOR
    await dbQuery('UPDATE users SET role = $1 WHERE id = $2', ['DONOR', user_id]);

    res.status(201).json({ message: 'Donor registered successfully', donor_id: result.rows[0].donor_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
