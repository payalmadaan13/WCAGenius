import { z } from "zod";

export const scanRequestSchema = z.object({
  html: z.string().min(10),
});

export type ScanRequest = z.infer<typeof scanRequestSchema>;