// entities/Subject.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TutorSubject } from "./TutorSubject";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => TutorSubject, ts => ts.subject)
  tutorSubjects: TutorSubject[];
    constructor(name: string, tutorSubjects: TutorSubject[]) {
        this.tutorSubjects = tutorSubjects;
        this.name = name;
    }
}
