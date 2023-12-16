import { z } from "zod";

export const createVenueSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
  }),
});

export const IdOnlySchema = z.object({
  body: z.object({
    id: z.number().min(1).max(255),
  }),
});
