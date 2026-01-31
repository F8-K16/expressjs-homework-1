"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const helper_1 = require("../utils/helper");
const users = [];
exports.authService = {
    register(data) {
        const existed = users.find((user) => user.email === data.email);
        if (existed) {
            throw new helper_1.HttpError(409, "Email already existed");
        }
        const newUser = {
            id: crypto.randomUUID(),
            email: data.email,
            fullName: data.fullName,
            password: data.password,
        };
        users.push(newUser);
        const { password, ...safeUser } = newUser;
        return safeUser;
    },
    login(data) {
        const user = users.find((user) => user.email === data.email);
        if (!user || user.password !== data.password) {
            throw new helper_1.HttpError(400, "Invalid email or password");
        }
        const { password, ...safeUser } = user;
        return safeUser;
    },
};
//# sourceMappingURL=auth.service.js.map