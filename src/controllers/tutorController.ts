import { Request, Response } from "express";
import * as service from "../services/tutor.service";

export const create = async (req: Request, res: Response) => {
  const { userId, calendly } = req.body;
  const tutor = await service.createTutor(userId, calendly);
  res.status(201).json(tutor);
};

export const getAll = async (_req: Request, res: Response) => {
  const tutors = await service.getAllTutors();
  res.json(tutors);
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const tutor = await service.getTutorById(id);
  res.json(tutor);
};

export const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { calendly } = req.body;
  const updated = await service.updateCalendly(id, calendly);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await service.deleteTutor(id);
  res.json(result);
};
