import { z } from "zod";

export const talkSchema = z.object({
  name: z
    .string({ message: "E' richiesto il nome" })
    .min(1, "E' richiesto il nome"),
  surname: z
    .string({ message: "E' richiesto il cognome" })
    .min(1, "E' richiesto il cognome"),
  email: z.string().email({ message: "E' richiesta una mail valida" }),
  presentation: z
    .string({ message: "E' richiesto una presentazione" })
    .min(1, "E' richiesto una presentazione"),
  title: z
    .string({ message: "E' richiesto un titolo" })
    .min(1, "E' richiesto un titolo"),
  abstract: z
    .string({ message: "E' richiesto un abstract" })
    .min(1, "E' richiesto un abstract"),
  consent: z.string({ message: "E' richiesto il consenso" }),
});

export type Talk = z.infer<typeof talkSchema>;
