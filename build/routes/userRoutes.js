"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const User_1 = require("../entities/User");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API for creating and managing users.
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - role
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Failed to create user
 */
router.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, role } = req.body;
    try {
        const user = database_1.AppDataSource.getRepository(User_1.User).create({ fullName, email, role });
        const result = yield database_1.AppDataSource.getRepository(User_1.User).save(user);
        res.status(201).json(result);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create user" });
    }
}));
exports.default = router;
