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
  icons: {
    icon: [
      { url: "assets/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "assets/images/favicon/favicon-96x96.png",
    apple: "assets/images/favicon/apple-touch-icon.png",
  },
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
