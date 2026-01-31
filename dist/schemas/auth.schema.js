"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z
    .object({
    email: zod_1.z
        .string()
        .min(1, "Email không được để trống")
        .email("Email không hợp lệ"),
    fullName: zod_1.z.string().min(1, "Tên không được để trống"),
    password: zod_1.z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
})
    .strict();
exports.loginSchema = zod_1.z
    .object({
    email: zod_1.z
        .string()
        .min(1, "Email không được để trống")
        .email("Email không hợp lệ"),
    password: zod_1.z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
})
    .strict();
//# sourceMappingURL=auth.schema.js.map