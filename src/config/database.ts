import "reflect-metadata";
import { DataSource } from "typeorm";



export const AppDataSource = new DataSource ({
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || "tutor",
      password: process.env.DB_PASSWORD || "tutor",                                                         
      database: process.env.DB_NAME || "tutor_db",
      synchronize: true, // auto create tables, disable in production
      logging: true,
      entities: ["src/entities/**/*.ts"],
      migrations: [],
      subscribers: [],
});
