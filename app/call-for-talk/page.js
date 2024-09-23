"use client";

import { submitTalk } from "../actions";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

import SuccessMessage from "../SuccessMessage";

export default function CallForTalk() {
  const [state, formAction] = useFormState(submitTalk, {});
  const { pending } = useFormStatus();
  const [consent, setConsent] = useState(false);

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  if (state.success === true) {
    return <SuccessMessage message="Grazie per aver inviato il tuo talk! Verrai contattato al più presto." />;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Invia il tuo Paper</h3>
              <form action={formAction}>
                {/* Campi del form */}
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Nome <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="nome" name="nome" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="cognome" className="form-label">Cognome <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="cognome" name="cognome" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="presentazione" className="form-label">Presentazione <span className="text-danger">*</span></label>
                  <textarea className="form-control" id="presentazione" name="presentazione" rows="3" required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="titolo" className="form-label">Titolo <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="titolo" name="titolo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="abstract" className="form-label">Abstract <span className="text-danger">*</span></label>
                  <textarea className="form-control" id="abstract" name="abstract" rows="5" required></textarea>
                </div>

                {/* Checkbox per il trattamento dei dati personali */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="consent"
                    name="consent"
                    checked={consent}
                    onChange={handleConsentChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="consent">
                    Accetto il trattamento dei dati personali <span className="text-danger">*</span>
                  </label>
                </div>

                {/* Bottone di submit */}
                <button
                  type="submit"
                  className={"btn btn-primary w-100" + (pending ? " disabled" : "")}
                  disabled={!consent || pending}
                >
                  Invia Paper
                </button>
              </form>
              {state.success === false && <div className="text-danger text-center mt-3">Si è verificato un errore durante l'invio del talk. Riprova più tardi.</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
