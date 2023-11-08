import { z } from "zod";

import { Venues } from "@prisma/client";



export const testSchema = z.object({
    body: z.object({
  text: z.string().min(1).max(255),
}),

});
