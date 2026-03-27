import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  isActive: z.boolean().optional(),
});

// For updates, we make everything optional so you can perform partial updates
export const updateUserSchema = createUserSchema.partial();

// TypeScript types inferred from the schemas
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;