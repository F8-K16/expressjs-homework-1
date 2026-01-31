/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginDTO, RegisterDTO } from "../schemas/auth.schema";
import { User } from "../types/user.type";
import { HttpError } from "../utils/helper";

const users: User[] = [];

export const authService = {
  register(data: RegisterDTO) {
    const existed = users.find((user) => user.email === data.email);
    if (existed) {
      throw new HttpError(409, "Email already existed");
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      fullName: data.fullName,
      password: data.password,
    };

    users.push(newUser);
    const { password, ...safeUser } = newUser;

    return safeUser;
  },

  login(data: LoginDTO) {
    const user = users.find((user) => user.email === data.email);
    if (!user || user.password !== data.password) {
      throw new HttpError(400, "Invalid email or password");
    }
    const { password, ...safeUser } = user;
    return safeUser;
  },
};
