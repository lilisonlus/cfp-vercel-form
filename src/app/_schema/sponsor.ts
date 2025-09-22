import { z } from "zod";

export const sponsorSchema = z.object({
  name: z
    .string({ message: "E' richiesto il nome" })
    .min(1, "E' richiesto il nome"),
  surname: z
    .string({ message: "E' richiesto il cognome" })
    .min(1, "E' richiesto il cognome"),
  email: z.email({ message: "E' richiesta una mail valida" }),
  company: z
    .string({ message: "E' richiesto il nome dell'azienda/organizzazione" })
    .min(1, "E' richiesto il nome dell'azienda/organizzazione"),
  euro: z.coerce.number({ message: "E' richiesto un importo" }).gte(0),
  consent: z.string({ message: "E' richiesto il consenso" }),
});

export type Sponsor = z.infer<typeof sponsorSchema>;
