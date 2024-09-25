"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { submitTalk } from "@/app/actions";
import { FormInput, FormTextArea } from "@/components/shared";
import { SubmissionFormState } from "../types";
import toast from "react-hot-toast";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const initialState: SubmissionFormState = {};

export default function CallForTalk() {
  const [state, formAction] = useFormState(submitTalk, initialState);
  const { pending } = useFormStatus();

  const [consent, setConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success(
        " Grazie per aver inviato il tuo talk!\nVerrai contattato per i dettagli.",
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
      <p className="mb-5 text-2xl font-bold">Invia il tuo Paper</p>
      <form action={formAction} className="mx-0" ref={formRef}>
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
        <FormTextArea
          id="presentation"
          text="Presentazione"
          rows={3}
          defaultValue={state.data?.company}
          error={state.errors?.company}
        />
        <FormInput
          id="title"
          text="Titolo"
          type="text"
          defaultValue={state.data?.title}
          error={state.errors?.title}
        />
        <FormTextArea
          id="abstract"
          text="Abstract"
          rows={5}
          defaultValue={state.data?.abstract}
          error={state.errors?.abstract}
        />

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
          Invia Paper
        </button>
      </form>
    </div>
  );
}
