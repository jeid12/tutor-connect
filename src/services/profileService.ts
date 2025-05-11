import { AppDataSource } from "../config/database";
import { Profile } from "../entities/Profile";
import { User } from "../entities/User";
import { uploadImage } from "../utils/cloudinary";
import fs from "fs";

const profileRepo = AppDataSource.getRepository(Profile);

export const createProfile = async (bio: string, file: Express.Multer.File, userId: number) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneByOrFail({ id: userId });

  const profilePicUrl = await uploadImage(file.path);
  fs.unlinkSync(file.path); // delete local file

  const profile = new Profile(bio, profilePicUrl, user);
  return await profileRepo.save(profile);
};

export const getProfileById = async (id: number) => {
  return await profileRepo.findOne({
    where: { id },
    relations: ["user"],
  });
};

export const updateProfile = async (
  id: number,
  bio: string,
  file?: Express.Multer.File
) => {
  const profile = await profileRepo.findOneByOrFail({ id });

  profile.bio = bio;

  if (file) {
    const newPic = await uploadImage(file.path);
    fs.unlinkSync(file.path);
    profile.profile_pic = newPic;
  }

  return await profileRepo.save(profile);
};

export const deleteProfile = async (id: number) => {
  await profileRepo.delete(id);
  return { message: "Profile deleted" };
};
