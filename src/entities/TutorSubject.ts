// entities/TutorSubject.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Tutor } from "./Tutor";
import { Subject } from "./Subject";

@Entity("tutor_subjects")
export class TutorSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tutor, tutor => tutor.tutorSubjects)
  tutor: Tutor;

  @ManyToOne(() => Subject, subject => subject.tutorSubjects)
  subject: Subject;
    constructor(tutor: Tutor, subject: Subject,id: number) {
        this.id = id;
        this.tutor = tutor;
        this.subject = subject;
    }
}
