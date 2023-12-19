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


export const groupItemSchema = z.object({
  body: z.object({
    groupId: z.number().min(1).max(255),
    itemId: z.number().min(1).max(255),
  }),
});

export const groupVenueSchema = z.object({
  body: z.object({
    groupId: z.number().min(1).max(255),
    venueId: z.number().min(1).max(255),
  }),
});