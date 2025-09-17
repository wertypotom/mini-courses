export type UserId = string;
export type Role = "ADMIN" | "USER";

export const ROLES: Record<Role, Role> = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export type TUser = {
  id: UserId;
  email: string;
  role: Role;
  emailVerified?: Date | null;
  name?: string | null;
  image?: string | null;
};

export type TSession = {
  user: Omit<TUser, "emailVerified">;
  expires: string;
};

// Projetions

export type TProfile = {
  email: string;
  name?: string | null;
  image?: string | null;
};
