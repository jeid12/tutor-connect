import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("token_blacklist")
export class TokenBlacklist {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  token: string;

  @Column()
  userId: number;

  @CreateDateColumn()
  createdAt!: Date;

    constructor(token: string, userId: number) {
        this.token = token;
        this.userId = userId;
    }
}
