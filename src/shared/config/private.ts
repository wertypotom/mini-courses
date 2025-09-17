import { z } from "zod";

const privateConfigSchema = z.object({
  BASE_URL: z.string().optional(),

  GITHUB_ID: z.string().optional(),
  GITHUB_SECRET: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
