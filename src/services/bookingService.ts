import { AppDataSource } from '../config/database';
import { Booking } from '../entities/Booking';
import { Student } from '../entities/Student';
import { Tutor } from '../entities/Tutor';

const bookingRepo = AppDataSource.getRepository(Booking);
const studentRepo = AppDataSource.getRepository(Student);
const tutorRepo = AppDataSource.getRepository(Tutor);

export const createBooking = async (studentId: number, tutorId: number, datetime: Date) => {
  const student = await studentRepo.findOneByOrFail({ id: studentId });
  const tutor = await tutorRepo.findOneByOrFail({ id: tutorId });
  const booking = new Booking(student, tutor, datetime);
  return await bookingRepo.save(booking);
};

export const getAllBookings = async () => bookingRepo.find({ relations: ['student', 'tutor'] });

export const getBookingById = async (id: number) =>
  bookingRepo.findOne({ where: { id }, relations: ['student', 'tutor'] });

export const updateBooking = async (id: number, updateData: any) => {
  const booking = await bookingRepo.findOneByOrFail({ id });
  Object.assign(booking, updateData);
  return await bookingRepo.save(booking);
};

export const deleteBooking = async (id: number) => {
  await bookingRepo.delete(id);
  return { message: 'Booking deleted' };
};

export const getBookingsByStudent = async (studentId: number) =>
  bookingRepo.find({ where: { student: { id: studentId } }, relations: ['tutor'] });

export const getBookingsByTutor = async (tutorId: number) =>
  bookingRepo.find({ where: { tutor: { id: tutorId } }, relations: ['student'] });

