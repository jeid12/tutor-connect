import { AppDataSource } from "../config/database";
import { Subject } from "../entities/Subject";

const subjectRepo = AppDataSource.getRepository(Subject);

export const createSubject = async (name: string) => {
  const subject = new Subject(name, []);
  return await subjectRepo.save(subject);
};

export const getAllSubjects = async () => {
  return await subjectRepo.find({ relations: ["tutorSubjects"] });
};

export const getSubjectById = async (id: number) => {
  return await subjectRepo.findOne({
    where: { id },
    relations: ["tutorSubjects"]
  });
};

export const updateSubject = async (id: number, name: string) => {
  const subject = await subjectRepo.findOneByOrFail({ id });
  subject.name = name;
  return await subjectRepo.save(subject);
};

export const deleteSubject = async (id: number) => {
  await subjectRepo.delete(id);
  return { message: "Subject deleted" };
};
