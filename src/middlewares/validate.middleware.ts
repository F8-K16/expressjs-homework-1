import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validate = (schema: z.ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        data: result.error.issues,
      });
    }
    req.body = result.data;
    next();
  };
};
