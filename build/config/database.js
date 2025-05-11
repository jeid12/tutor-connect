"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "tutor",
    password: process.env.DB_PASSWORD || "tutor",
    database: process.env.DB_NAME || "tutor_db",
    synchronize: true, // auto create tables, disable in production
    logging: true,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
