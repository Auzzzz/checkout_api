import { z } from "zod";

export const testSchema = z.object({
    body: z.object({
  text: z.string().min(1).max(255),
}),

});
