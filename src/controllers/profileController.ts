import { Request, Response } from "express";
import * as profileService from "../services/profileService";

export const create = async (req: any, res: any) => {
  const { bio, userId } = req.body;
  const file = req.file;
  if (!file) return res.status(400).json({ message: "Profile picture is required" });

  try {
    const profile = await profileService.createProfile(bio, file, +userId);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getProfile = async (req: any, res: any) => {
  const id = +req.params.id;
  try {
    const profile = await profileService.getProfileById(id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const { bio } = req.body;
  const file = req.file;

  try {
    const updated = await profileService.updateProfile(id, bio, file);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    const result = await profileService.deleteProfile(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
