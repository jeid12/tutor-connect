import { Request, Response } from "express";
import * as subjectService from "../services/subjectService";

export const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const subject = await subjectService.createSubject(name);
  res.status(201).json(subject);
};

export const getAll = async (_req: Request, res: Response) => {
  const subjects = await subjectService.getAllSubjects();
  res.json(subjects);
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const subject = await subjectService.getSubjectById(id);
  res.json(subject);
};

export const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const updated = await subjectService.updateSubject(id, name);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await subjectService.deleteSubject(id);
  res.json(result);
};
