// src/dtos/booking.dto.ts
export interface CreateBookingDTO {
  studentId: number;
  tutorId: number;
  datetime: Date;
}

export interface UpdateBookingDTO {
  datetime?: Date;
  status?: 'pending' | 'confirmed' | 'completed';
}

export interface UpdateBookingStatusDTO {
  status: 'pending' | 'confirmed' | 'completed';
}