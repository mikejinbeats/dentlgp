import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://dentlgp.pt"),
  title: "Kit Sorriso Bilingue — DentLGP",
  description:
    "Jogo pedagógico bilingue em LGP e português sobre Medicina Dentária e saúde oral.",
  alternates: {
    canonical: "/kit-sorriso-bilingue",
  },
  openGraph: {
    title: "Kit Sorriso Bilingue — DentLGP",
    description:
      "Jogo pedagógico bilingue em LGP e português sobre Medicina Dentária e saúde oral.",
    url: "https://dentlgp.pt/kit-sorriso-bilingue",
    type: "website",
  },
  referrer: "strict-origin-when-cross-origin",
  other: {
    "codex-preview": "development",
    "X-UA-Compatible": "IE=edge",
    "X-Content-Type-Options": "nosniff",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
