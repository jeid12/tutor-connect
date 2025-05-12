
import { registerUser ,getAllUsers} from "../services/authService";
import { RegisterUserDTO } from "../dto/RegisterUserDTO";
import { loginUser } from "../services/authService";

import { LoginDTO } from "../dto/LoginDTO";
import { get } from "http";

export const register = async (req:any,res:any) => {
  try {
    const data: RegisterUserDTO = req.body;
    const user = await registerUser(data);
    return res.status(201).json({ message: "Registration successful", user });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req: any, res: any) => {
    try {
      const data: LoginDTO = req.body;
      const result = await loginUser(data);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  };

  //get all users
  export const allUsers = async (req: any, res: any) => {
    try {
      const users = await getAllUsers();
      if (!users) return res.status(404).json({ message: "No users found" });
      return res.status(200).json(users);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }