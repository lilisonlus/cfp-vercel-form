"use client";

import { submitSponsor } from "../actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { FormInput } from "@/components/shared";
import { SubmissionFormState } from "../types";
import toast from "react-hot-toast";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const initialState: SubmissionFormState = {};

export default function CallForSponsor() {
  const [state, formAction] = useFormState(submitSponsor, initialState);
  const { pending } = useFormStatus();

  const [consent, setConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success(
        "Grazie per aver deciso di sponsorizzare l'evento!\nVerrai contattato per i dettagli.",
        {
          position: "top-center",
          duration: 5000,
          icon: <FaCheckCircle className="w-8 fill-accent" />,
        },
      );
      formRef.current?.reset();
    } else if (state.errors?.sendMessage) {
      toast.error(state.errors?.sendMessage, {
        position: "top-center",
        duration: 5000,
        icon: <RiErrorWarningFill className="w-8 fill-red-600" />,
      });
    }
  }, [state]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-5 text-2xl font-bold">Diventa Sponsor</p>
      <form action={formAction} ref={formRef} className="mx-0">
        <FormInput
          id="name"
          text="Nome"
          type="text"
          defaultValue={state.data?.name}
          error={state.errors?.name}
        />
        <FormInput
          id="surname"
          text="Cognome"
          type="text"
          defaultValue={state.data?.surname}
          error={state.errors?.surname}
        />
        <FormInput
          id="email"
          text="Email"
          type="email"
          defaultValue={state.data?.email}
          error={state.errors?.email}
        />
        <FormInput
          id="company"
          text="Azienda/Organizzazione"
          type="text"
          defaultValue={state.data?.company}
          error={state.errors?.company}
        />
        <div className={state.errors?.euro ? "" : "mb-3"}>
          <label htmlFor="euro" className="mb-1 block text-lg font-bold">
            Importo
          </label>
          <input
            type="number"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
            id="euro"
            name="euro"
            required
            min="0"
            step="0.01"
            defaultValue={state.data?.euro}
          />
          {state.errors?.euro && (
            <div className="mt-px flex h-8 items-center">
              <RiErrorWarningFill className="mr-1 fill-accent" />
              <small className="text-base font-extrabold text-accent">
                {state.errors?.euro}
              </small>
            </div>
          )}
        </div>
        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              id="consent"
              name="consent"
              type="checkbox"
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50"
              required
            />
          </div>
          <label htmlFor="consent" className="ms-2 text-base font-bold">
            Accetto il trattamento dei{" "}
            <a href="#" className="font-bold text-accent">
              dati personali
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-accent px-5 py-2.5 text-center text-lg font-bold text-white disabled:opacity-50"
          disabled={!consent || pending}
        >
          Diventa Sponsor
        </button>
      </form>
    </div>
  );
}
