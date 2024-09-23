"use server";
async function sendMessage(message) {
    const chatId = process.env.LINUX_DAY_TELEGRAM_BOT_CHAT_ID;
    const token = process.env.LINUX_DAY_TELEGRAM_BOT_TOKEN; // Il token del bot dalle variabili d'ambiente
    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    // Controlla se il consenso è stato dato
    if (!message.consent) {
        throw new Error("Devi accettare il trattamento dei dati personali per inviare la form.");
    }

    try {
        // Configurazione della richiesta
        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: JSON.stringify(message), // Si potrebbe personalizzare il formato del messaggio
                parse_mode: 'HTML',  // Specifica il formato HTML per il messaggio
            }),
        });

        // Controllo se la risposta è valida (status code 200)
        if (!response.ok) {
            throw new Error(`Errore nell'invio del messaggio: ${response.statusText}`);
        }

        const data = await response.json();

        // Controllo del successo dell'invio (se Telegram restituisce un errore nel body)
        if (!data.ok) {
            throw new Error(`Errore Telegram: ${data.description}`);
        }

        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

function createFilteredObject(formData) {
    // Crea un oggetto vuoto
    const filteredObject = {};

    // Itera su tutte le coppie (chiave, valore) di FormData
    formData.forEach((value, key) => {
        // Aggiungi all'oggetto solo se la chiave non inizia con '$_ACTION'
        if (!key.startsWith('$ACTION')) {
            filteredObject[key] = value;
        }
    });

    // Controlla se il consenso è presente nel form
    if (!filteredObject.consent || filteredObject.consent !== 'on') {
        throw new Error("Il consenso al trattamento dei dati è obbligatorio.");
    }

    return filteredObject;
}

export async function submitTalk(prevState, formData) {
    console.log("SUBMIT TALK CALLED", prevState, formData);
    let data = createFilteredObject(formData);
    let result = await sendMessage(data);
    console.log("FORM DATA", createFilteredObject(formData));
    return result;
}
