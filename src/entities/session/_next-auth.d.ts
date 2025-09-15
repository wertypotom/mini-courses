import NextAuth from "next-auth";
import { TSession, TUser } from "./_domain/types";

declare module "next-auth" {
  interface Session {
    user: TSession["user"];
  }
  interface User extends TUser {}
}
