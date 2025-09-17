import { dbClient } from "@/shared/lib/dbClient";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compact } from "lodash-es";
import { privateConfig } from "@/shared/config/private";
import { Provider } from "next-auth/providers/index";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as Provider["options"],
  providers: compact([
    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      GithubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
  ]),
};
