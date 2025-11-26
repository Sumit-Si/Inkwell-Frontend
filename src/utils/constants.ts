const UserRoleEnum = {
    ADMIN: "ADMIN",
    USER: "USER",
} as const;

const AvailableUserRoles = Object.values(UserRoleEnum);

export { UserRoleEnum, AvailableUserRoles };