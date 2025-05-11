import { AppDataSource } from "../config/database";
import { User } from "../entities/User";
import { RegisterUserDTO } from "../dto/RegisterUserDTO";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";
import { LoginDTO } from "../dto/LoginDTO";



const userRepo = AppDataSource.getRepository(User);

export const registerUser = async (data: RegisterUserDTO) => {
  const { fullName, email, password, role = "user" } = data;

  if (!["admin", "tutor", "user"].includes(role)) {
    throw new Error("Invalid role. Must be admin, tutor, or user.");
  }

  const existingUser = await userRepo.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email already in use.");
  }

  const hashed = await hashPassword(password);
  const newUser = userRepo.create({ fullName, email, password: hashed, role });
  await userRepo.save(newUser);

  return {
    id: newUser.id,
    fullName: newUser.fullName,
    email: newUser.email,
    role: newUser.role
  };
};

export const loginUser = async ({ email, password }: LoginDTO) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email });
  
    if (!user) throw new Error("Invalid email or password");
  
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");
  
    const token = generateToken({
      id: user.id,
      role: user.role,
      email: user.email,
    });
  
    return {
      message: "Login successful",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    };
  };
  
