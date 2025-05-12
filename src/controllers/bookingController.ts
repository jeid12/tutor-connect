import { Request, Response } from 'express';
import * as bookingService from '../services/bookingService';

export const create = async (req: Request, res: Response) => {
  const { studentId, tutorId, datetime } = req.body;
  const booking = await bookingService.createBooking(studentId, tutorId, new Date(datetime));
  res.status(201).json(booking);
};

export const getAll = async (_req: Request, res: Response) => {
  const bookings = await bookingService.getAllBookings();
  res.json(bookings);
};

export const getById = async (req: Request, res: Response) => {
  const booking = await bookingService.getBookingById(+req.params.id);
  res.json(booking);
};

export const update = async (req: Request, res: Response) => {
  const updated = await bookingService.updateBooking(+req.params.id, req.body);
  res.json(updated);
};

export const deleteById = async (req: Request, res: Response) => {
  const result = await bookingService.deleteBooking(+req.params.id);
  res.json(result);
};

export const getByStudent = async (req: Request, res: Response) => {
  const bookings = await bookingService.getBookingsByStudent(+req.params.studentId);
  res.json(bookings);
};

export const getByTutor = async (req: Request, res: Response) => {
  const bookings = await bookingService.getBookingsByTutor(+req.params.tutorId);
  res.json(bookings);
};
