import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { HttpError } from "../utils/helper";

export const authController = {
  register(req: Request, res: Response) {
    try {
      const user = authService.register(req.body);
      return res.status(201).json({
        success: true,
        message: "Register successful",
        data: user,
      });
    } catch (err) {
      if (err instanceof HttpError) {
        return res.status(err.status || 500).json({
          success: false,
          message: err.message || "Server error",
          data: null,
        });
      }
    }
  },

  login(req: Request, res: Response) {
    try {
      const user = authService.login(req.body);
      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: user,
      });
    } catch (err) {
      if (err instanceof HttpError) {
        return res.status(err.status || 500).json({
          success: false,
          message: err.message || "Server error",
          data: null,
        });
      }
    }
  },
};
