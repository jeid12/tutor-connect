// entities/Profile.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("profiles")
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  profile_pic: string;

  @OneToOne(() => User, user => user.profile)
  @JoinColumn()
  user: User;

    constructor(bio: string, profile_pic: string, user: User) {
        this.bio = bio;
        this.profile_pic = profile_pic;
        this.user = user;
    }
}
