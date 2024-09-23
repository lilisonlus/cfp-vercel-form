import './globals.css';

export const metadata = {
  title: 'Linux Day 2024 - LILIS',
  description: 'Evento annuale per promuovere Linux e il software libero',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />
        <link href="https://fonts.cdnfonts.com/css/chunkfive" rel="stylesheet" />
        
        <meta property="og:image" content="/og-image-cfp-1600x916.png"/>
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="916" />
        
        <meta name="twitter:image" content="/og-image-cfp-1600x725.png"/>
      </head>
      <body>
        <header>
          <div className="container">
            <div className="ldtv me-4">
              <img className="logolinuxday mt-6" src="/linuxday_fullcolor.svg" alt="Linux Day Logo" height="120" />
            </div>
            <img className="logolilis" src="/Lilis.png" alt="LILIS Logo" height="120" />
            <div className="ldtv ms-2">
              <h1 className="ldt mb-0">Linux Day 2024</h1>
              <h2 className="ld mt-0">LILIS - Laboratorio per l'Informatica Libera Sannita</h2>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
