import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    fullName: z.ZodString;
    password: z.ZodString;
}, z.core.$strict>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strict>;
export type RegisterDTO = z.infer<typeof registerSchema>;
export type LoginDTO = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.schema.d.ts.map