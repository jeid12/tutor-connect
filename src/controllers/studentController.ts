import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export const create = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const student = await studentService.createStudent(userId);
  res.status(201).json(student);
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = await studentService.getStudentById(id);
  res.json(student);
};

export const getAll = async (_req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.json(students);
};

export const remove = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await studentService.deleteStudent(id);
  res.json(result);
};
export const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { userId } = req.body;
  const student = await studentService.updateStudent(id, userId);
  res.json(student);
};
