import { Request, Response } from 'express';
import { query } from '../config/db';
import { AuthRequest } from '../middleware/authMiddleware';

export const createBloodRequest = async (req: AuthRequest, res: Response) => {
  try {
    const {
      patient_name, blood_group, units_required, hospital_name, 
      hospital_address, contact_person, contact_number, city, emergency_level 
    } = req.body;

    const result = await query(
      `INSERT INTO blood_requests 
      (patient_name, blood_group, units_required, hospital_name, hospital_address, contact_person, contact_number, city, emergency_level)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING request_id`,
      [patient_name, blood_group, units_required, hospital_name, hospital_address, contact_person, contact_number, city, emergency_level]
    );

    res.status(201).json({ message: 'Blood request created successfully', request_id: result.rows[0].request_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBloodRequests = async (req: Request, res: Response) => {
  try {
    const requestsRes = await query('SELECT * FROM blood_requests ORDER BY request_date DESC');
    res.json(requestsRes.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
