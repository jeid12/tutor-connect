// entities/Tutor.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { TutorSubject } from "./TutorSubject";
import { Booking } from "./Booking";

@Entity("tutors")
export class Tutor {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User, user => user.tutor)
  @JoinColumn()
  user: User;

  @Column({ nullable: true })
  calendly_link: string;

  @OneToMany(() => TutorSubject, ts => ts.tutor)
  tutorSubjects: TutorSubject[];

  @OneToMany(() => Booking, booking => booking.tutor)
  bookings: Booking[];
    constructor(user: User, calendly_link: string, tutorSubjects: TutorSubject[], bookings: Booking[]) {
        this.user = user;
        this.calendly_link = calendly_link;
        this.tutorSubjects = tutorSubjects;
        this.bookings = bookings;
    }
}
