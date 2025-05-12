import { AppDataSource } from "../config/database";
import { Tutor } from "../entities/Tutor";
import { User } from "../entities/User";

const tutorRepo = AppDataSource.getRepository(Tutor);
const userRepo = AppDataSource.getRepository(User);

export const createTutor = async (userId: number, calendly: string) => {
  const user = await userRepo.findOneByOrFail({ id: userId });
  const tutor = new Tutor(user, calendly, [], []);
  return await tutorRepo.save(tutor);
};

export const getAllTutors = async () => {
  return await tutorRepo.find({ relations: ["user", "tutorSubjects", "bookings"] });
};

export const getTutorById = async (id: number) => {
  return await tutorRepo.findOne({
    where: { id },
    relations: ["user", "tutorSubjects", "bookings"],
  });
};

export const updateCalendly = async (id: number, calendly: string) => {
  const tutor = await tutorRepo.findOneByOrFail({ id });
  tutor.calendly_link = calendly;
  return await tutorRepo.save(tutor);
};

export const deleteTutor = async (id: number) => {
  await tutorRepo.delete(id);
  return { message: "Tutor deleted" };
};
