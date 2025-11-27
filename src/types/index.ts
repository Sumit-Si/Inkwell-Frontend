export type UserRole = "ADMIN" | "USER";

export interface UserData {
    username: string;
    email: string;
    fullName?: string;
    password: string;
    role?: UserRole;
}

export type loginData = {
    email: string;
    password: string;
}

export type ApiKeyData = {
    endedAt: Date;
}

export type FieldValidationError = {
    /**
     * Indicates that the error occurred because a field had an invalid value
     */
    type: 'field';
    /**
     * The location within the request where this field is
     */
    location: Location;
    /**
     * The path to the field which has a validation error
     */
    path: string;
    /**
     * The value of the field. It might be unset if the value is hidden.
     */
    value?: string;
    /**
     * The error message
     */
    msg: string;
};

export type ErrorCode =
    | 'BadRequest'
    | 'ValidationError'
    | 'AuthenticationError'
    | 'AuthorizationError'
    | 'NotFound'
    | 'ServerError';

export type ValidationError = {
    code: ErrorCode;
    errors: Record<string, FieldValidationError>;
};

export type ErrorResponse = {
    code: ErrorCode;
    message: string;
};

export interface ActionResponse<T = unknown> {
    success: boolean;
    message: string;
    error?: ValidationError | ErrorResponse;
    data?: T;
    statusCode: number;
}

export interface AuthResponse {
    accessToken: string;
    user: Pick<UserData, "username" | "fullName" | "email" | "role">;
}

export interface PaginatedResponse<T> {
    data: {
        posts: T[],
    };                    // posts, users, etc.
    metadata: {
        currentPage: number;
        currentLimit: number;
        totalPages: number;
    };
}

export type Rating = 1 | 2 | 3 | 4 | 5;


// Posts types
export interface Posts {
    id: string;
    title: string;
    slug?: string;
    description?: string | null;
    bannerImage: {
        url: string;
        size: number;
        format: string;
    };
    author: UserData;
    status: "PENDING" | "APPROVED" | "REJECTED" | "PUBLISHED";
    createdAt: string;
    updatedAt: string;
    postedAt: string;
    categories?: Category[];
    postReview?: PostReview[];
    comments?: Comment[];
}

export interface Category {
    id: string;
    categoryName: string;
    parentId?: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;

    posts: Posts[];
    user: UserData;
    children: Category[];
}

export interface PostReview {
    id: string;
    postId: string;
    comment: string;
    rating?: Rating;
    reviewer: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    author: Pick<UserData, "username" | "fullName">;
}

export interface Comment {
    id: string;
    message: string;
    createdBy: string;
    postId: string;
    parentId?: string;
    editedAt?: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    likesCount: number;
}