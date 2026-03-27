import { z } from "zod";

export const getIdParamsSchema = z.object({
  id: z.string().uuid("Invalid UUID format"), 
});