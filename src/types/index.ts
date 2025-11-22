export type UserRole = {
    ADMIN: string;
    USER: string;
}

export interface UserData {
    username: string;
    email: string;
    fullName?: string;
    password: string;
    role: UserRole;
}

export type loginData = {
    email: string;
    password: string;
}

export type ApiKeyData = {
    endedAt: Date;
}