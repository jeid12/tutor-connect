// entities/Booking.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "./Student";
import { Tutor } from "./Tutor";

@Entity("bookings")
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Student, student => student.bookings)
  student: Student;

  @ManyToOne(() => Tutor, tutor => tutor.bookings)
  tutor: Tutor;

  @Column()
  datetime: Date;

  @Column({ default: "pending" })
  status: "pending" | "confirmed" | "completed";

  @Column({ nullable: true })
  calendly_event_id!: string;

  constructor( student: Student, tutor: Tutor, datetime: Date ) {
    this.student = student;
    this.tutor = tutor;
    this.datetime = datetime;
    this.status = "pending";

  }
}
