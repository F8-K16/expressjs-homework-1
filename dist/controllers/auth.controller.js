"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
const helper_1 = require("../utils/helper");
exports.authController = {
    register(req, res) {
        try {
            const user = auth_service_1.authService.register(req.body);
            return res.status(201).json({
                success: true,
                message: "Register successful",
                data: user,
            });
        }
        catch (err) {
            if (err instanceof helper_1.HttpError) {
                return res.status(err.status || 500).json({
                    success: false,
                    message: err.message || "Server error",
                    data: null,
                });
            }
        }
    },
    login(req, res) {
        try {
            const user = auth_service_1.authService.login(req.body);
            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: user,
            });
        }
        catch (err) {
            if (err instanceof helper_1.HttpError) {
                return res.status(err.status || 500).json({
                    success: false,
                    message: err.message || "Server error",
                    data: null,
                });
            }
        }
    },
};
//# sourceMappingURL=auth.controller.js.map