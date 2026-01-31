"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_middleware_1 = require("../middlewares/validate.middleware");
const auth_schema_1 = require("../schemas/auth.schema");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router.post("/register", (0, validate_middleware_1.validate)(auth_schema_1.registerSchema), auth_controller_1.authController.register);
router.post("/login", (0, validate_middleware_1.validate)(auth_schema_1.loginSchema), auth_controller_1.authController.login);
exports.default = router;
//# sourceMappingURL=auth.route.js.map