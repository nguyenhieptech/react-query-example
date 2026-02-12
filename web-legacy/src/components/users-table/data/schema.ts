import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  // If tanstack-table require filter by any column, use z.optional() so zod doesn't throw errors.
  fist_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
});
