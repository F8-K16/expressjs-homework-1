"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/api/auth", auth_route_1.default);
app.get("/", (req, res) => {
    res.send("Hello Express TypeScript");
});
app.listen(PORT, () => {
    console.log(`Start server: http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map