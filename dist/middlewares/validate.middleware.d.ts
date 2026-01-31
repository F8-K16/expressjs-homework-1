import { NextFunction, Request, Response } from "express";
import { z } from "zod";
export declare const validate: (schema: z.ZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=validate.middleware.d.ts.map