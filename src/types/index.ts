export type UserRole = {
    ADMIN: string;
    USER: string;
}

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
    user: Pick<UserData, 'username' | 'fullName' | 'email' | 'role'>;
}