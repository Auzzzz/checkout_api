import { z } from "zod";

import { Venues } from "@prisma/client";

// export const testSchema = z.object({
//     body: z.object({
//   text: z.string().min(1).max(255),
// }),
// });

export const createVenueSchema = z.object({
    body: z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255)
}),
});

export const venueIDSchema = z.object({
    body: z.object({
    id: z.number().min(1).max(255),
}),
});
