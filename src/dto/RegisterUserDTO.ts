export interface RegisterUserDTO {
    fullName: string;
    email: string;
    password: string;
    role?: "admin" | "tutor" | "user";
  }
  