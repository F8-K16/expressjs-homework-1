import { LoginDTO, RegisterDTO } from "../schemas/auth.schema";
export declare const authService: {
    register(data: RegisterDTO): {
        id: string;
        email: string;
        fullName: string;
    };
    login(data: LoginDTO): {
        id: string;
        email: string;
        fullName: string;
    };
};
//# sourceMappingURL=auth.service.d.ts.map