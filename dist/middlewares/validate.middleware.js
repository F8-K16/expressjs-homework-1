"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return async (req, res, next) => {
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
exports.validate = validate;
//# sourceMappingURL=validate.middleware.js.map