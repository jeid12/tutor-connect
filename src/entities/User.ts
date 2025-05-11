// entities/User.ts
import {
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, OneToMany
  } from "typeorm";
  import { Profile } from "./Profile";
  import { Tutor } from "./Tutor";
  import { Student } from "./Student";
  
  @Entity("users")
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fullName: string;
  
    @Column({ unique: true })
    email: string;
  
   
    @Column({ nullable: true }) 
      password: string;
  
    @Column(
        { type: "enum", enum: ["admin", "tutor", "student"], default: "student" } // default role is student
    )
    role: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @OneToOne(() => Profile, profile => profile.user, { cascade: true })
    profile: Profile;
  
    @OneToOne(() => Tutor, tutor => tutor.user)
    tutor: Tutor;
  
    @OneToOne(() => Student, student => student.user)
    student: Student;

    constructor(
        id: number,
        full_name: string,
        email: string,
        password: string,
        role: string,
        profile: Profile,
        tutor: Tutor,
        student: Student,
        createdAt: Date
    ) {
        this.id = id;
        this.fullName = full_name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.profile = profile;
        this.tutor = tutor;
        this.student = student;
        this.createdAt = createdAt;
    }
  }
  