// entities/Student.ts
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Booking } from "./Booking";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User, user => user.student)
  @JoinColumn()
  user: User;

  @OneToMany(() => Booking, booking => booking.student)
  bookings: Booking[];

    constructor(user: User, bookings: Booking[]) {
        this.bookings = bookings;
        this.user = user;
    }
}
