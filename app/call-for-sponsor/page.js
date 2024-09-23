"use client";
import { submitTalk } from "../actions";
import SuccessMessage from "../SuccessMessage";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

export default function CallForSponsor() {
  
  const [state, formAction] = useFormState(submitTalk, {});
  const { pending } = useFormStatus();
  const [consent, setConsent] = useState(false);

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  if (state.success === true) {
    return <SuccessMessage message="Grazie per aver deciso di sponsorizzare l'evento! Verrai contattato per i dettagli." />;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Diventa Sponsor</h3>
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
                  <label htmlFor="azienda" className="form-label">Azienda/Organizzazione <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="azienda" name="azienda" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="euro" className="form-label">€ <span className="text-danger">*</span></label>
                  <input type="number" className="form-control" id="euro" name="euro" required min="0" step="0.01" />
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
                  Diventa Sponsor
                </button>
              </form>
              {state.success === false && <div className="text-danger text-center mt-3">Si è verificato un errore durante l'invio. Riprova più tardi.</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
