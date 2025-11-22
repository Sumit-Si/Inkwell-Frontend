import type { UserRole } from "@/types";

const UserRoleEnum: UserRole = {
    ADMIN: "admin",
    USER: "user",
}

const AvailableUserRoles: string[] = Object.values(UserRoleEnum);


export {
    UserRoleEnum,
    AvailableUserRoles,
}