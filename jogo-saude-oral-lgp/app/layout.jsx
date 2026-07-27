import "./globals.css";

export const metadata = {
  title: "Kit Sorriso Bilingue — DentLGP",
  description:
    "Jogo pedagógico bilingue em LGP e português sobre Medicina Dentária e saúde oral.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
