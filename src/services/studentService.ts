import { AppDataSource } from "../config/database";
import { Student } from "../entities/Student";
import { User } from "../entities/User";

const studentRepo = AppDataSource.getRepository(Student);
const userRepo = AppDataSource.getRepository(User);

export const createStudent = async (userId: number) => {
  const user = await userRepo.findOneByOrFail({ id: userId });
  const student = new Student(user, []);
  return await studentRepo.save(student);
};

export const getStudentById = async (id: number) => {
  return await studentRepo.findOne({
    where: { id },
    relations: ["user", "bookings"]
  });
};

export const getAllStudents = async () => {
  return await studentRepo.find({ relations: ["user", "bookings"] });
};

export const deleteStudent = async (id: number) => {
  await studentRepo.delete(id);
  return { message: "Student deleted" };
};

export const updateStudent = async (id: number, userId: number) => {
  const student = await studentRepo.findOneByOrFail({ id });
  const user = await userRepo.findOneByOrFail({ id: userId });
  student.user = user;
  return await studentRepo.save(student);
};