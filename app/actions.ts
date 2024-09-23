"use server";

export interface SubmitResponse {
  success: boolean;
  data?: FormData;
  error: string;
}

export interface Form {
  nome: string;
  cognome: string;
  email: string;
  presentazione?: string;
  azienda?: string;
  titolo?: string;
  euro?: string;
  abstract?: string;
}

export async function submitSponsor(
  prevState: SubmitResponse,
  formData: FormData,
) {
  if (!formData.get("consent") || formData.get("consent") !== "on") {
    throw new Error("Il consenso al trattamento dei dati è obbligatorio.");
  }

  let messageResponse = await sendMessage(
    createFilteredObject(formData),
    "SPONSOR",
  );
  return messageResponse;
}

export async function submitTalk(
  prevState: SubmitResponse,
  formData: FormData,
): Promise<SubmitResponse> {
  if (!formData.get("consent") || formData.get("consent") !== "on") {
    throw new Error("Il consenso al trattamento dei dati è obbligatorio.");
  }

  let messageResponse = await sendMessage(
    createFilteredObject(formData),
    "TALK",
  );
  return messageResponse;
}

async function sendMessage(data: Form, type: string): Promise<SubmitResponse> {
  const chatId = process.env.LINUX_DAY_TELEGRAM_BOT_CHAT_ID;
  const token = process.env.LINUX_DAY_TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  let message = `<b>${type}</b>\n`;
  message += `<b>Nome</b>: ${data.nome}\n`;
  message += `<b>Cognome</b>: ${data.cognome}\n`;
  message += `<b>Email</b>: ${data.email}\n`;
  message += data.presentazione
    ? `<b>Presentazione</b>: ${data.presentazione}\n`
    : "";
  message += data.azienda ? `<b>Azienda</b>: ${data.azienda}\n` : "";
  message += data.titolo ? `<b>Titolo</b>: ${data.titolo}\n` : "";
  message += data.euro ? `<b>Euro</b>: ${data.euro}\n` : "";
  message += data.abstract ? `<b>Abstract</b>: ${data.abstract}\n` : "";

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
      throw new Error(
        `Errore nell'invio del messaggio: ${response.statusText}`,
      );
    }

    const responseData = await response.json();

    if (!responseData.ok) {
      throw new Error(`Errore Telegram: ${responseData.description}`);
    }

    return {
      success: true,
      data: responseData,
      error: "",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

function createFilteredObject(formData: FormData): Form {
  const filteredObject: { [key: string]: any } = {};

  // Itera su tutte le coppie (chiave, valore) di FormData
  formData.forEach((value, key) => {
    // Aggiungi all'oggetto solo se la chiave non inizia con '$_ACTION'
    if (!key.startsWith("$ACTION")) {
      filteredObject[key] = value;
    }
  });

  return filteredObject as Form;
}
