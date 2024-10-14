"use server";

import { convertZodErrors } from "@/utils/forms";
import { Sponsor, sponsorSchema } from "./_schema/sponsor";
import { SubmissionFormState } from "./types";
import { Talk, talkSchema } from "./_schema/talk";

export interface SubmitResponse {
  success: boolean;
  data?: FormData;
  error: string;
}

export async function submitSponsor(
  prevState: SubmissionFormState,
  formData: FormData,
): Promise<SubmissionFormState> {
  const unvalidateData = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    company: formData.get("company"),
    euro: formData.get("euro"),
    consent: formData.get("consent"),
  };

  const validated = sponsorSchema.safeParse(unvalidateData);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return {
      errors,
      data: validated.data,
    };
  } else {
    const messageResponse = await sendMessage(
      composeSponsorMessage(validated.data),
    );
    return messageResponse;
  }
}

export async function submitTalk(
  prevState: SubmissionFormState,
  formData: FormData,
): Promise<SubmissionFormState> {
  const unvalidateData = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    presentation: formData.get("presentation"),
    title: formData.get("title"),
    abstract: formData.get("abstract"),
    consent: formData.get("consent"),
  };

  const validated = talkSchema.safeParse(unvalidateData);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return {
      errors,
      data: validated.data,
    };
  } else {
    const messageResponse = await sendMessage(
      composeTalkMessage(validated.data),
    );
    return messageResponse;
  }
}

async function sendMessage(message: string): Promise<SubmissionFormState> {
  const chatId = process.env.LINUX_DAY_TELEGRAM_BOT_CHAT_ID;
  const token = process.env.LINUX_DAY_TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  if (process.env.CFP_OPEN != "true") return {
    errors: {
      sendMessage: "Iscrizioni chiuse",
    },
  };

  try {
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        parse_mode: "HTML",
        text: message,
      }),
    });

    if (!response.ok) {
      return {
        errors: {
          sendMessage: "Errore nell'invio dei dati. Riprova piu' tardi.",
        },
      };
    }

    return {
      success: true,
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return {
      errors: {
        sendMessage: "Errore nell'invio dei dati. Riprova piu' tardi.",
      },
    };
  }
}

function composeSponsorMessage(data: Sponsor): string {
  let message = `<b>SPONSOR</b>\n`;
  message += `<b>Nome</b>: ${data.name}\n`;
  message += `<b>Cognome</b>: ${data.surname}\n`;
  message += `<b>Email</b>: ${data.email}\n`;
  message += data.company ? `<b>Azienda</b>: ${data.company}\n` : "";
  message += data.euro ? `<b>Euro</b>: ${data.euro}\n` : "";
  return message;
}

function composeTalkMessage(data: Talk): string {
  let message = `<b>TALK</b>\n`;
  message += `<b>Nome</b>: ${data.name}\n`;
  message += `<b>Cognome</b>: ${data.surname}\n`;
  message += `<b>Email</b>: ${data.email}\n`;
  message += data.presentation
    ? `<b>Presentazione</b>: ${data.presentation}\n`
    : "";
  message += data.title ? `<b>Titolo</b>: ${data.title}\n` : "";
  message += data.abstract ? `<b>Abstract</b>: ${data.abstract}\n` : "";
  return message;
}
