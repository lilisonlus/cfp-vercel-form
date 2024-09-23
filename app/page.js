// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Diventa protagonista del Linux Day!</h3>
          <p className="fs-3">
          Ti piacerebbe fare un intervento al prossimo LD? Non perdere l'occasione di condividere il
          tuo punto di vista e contribuire alla crescita della comunità. Proponici il tuo talk,
          considerando che non dovrà superare i 15 minuti, e verrà valutato per essere
          inserito nel programma della giornata.
          </p>
          <p className="fs-3">
          Puoi anche sostenere l'evento con un contributo economico e diventare così uno degli
          sponsor ufficiali del Linux Day 2024. Nome e logo del tuo brand saranno riportati sul materiale promozionale,
          contribuendo a dare visibilità al tuo business e, al contempo, supportando l'iniziativa.
          </p>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center">
            <img src="call_for_talk_image.jpg" className="card-img-top" alt="Call For Talk" />
            <div className="card-body">
              <h5 className="card-title">Call For Talk</h5>
              <Link href="/call-for-talk" className="btn btn-primary">Candidati come relatore!</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <img src="call_for_sponsor_image.jpg" className="card-img-top" alt="Call For Sponsor" />
            <div className="card-body">
              <h5 className="card-title">Call For Sponsor</h5>
              <Link href="/call-for-sponsor" className="btn btn-primary">Sponsorizza l'evento</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
