import type { UserRole } from "@/types";

const UserRoleEnum: UserRole = {
    ADMIN: "ADMIN",
    USER: "USER",
}

const AvailableUserRoles: string[] = Object.values(UserRoleEnum);


export {
    UserRoleEnum,
    AvailableUserRoles,
}