import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sávio Ramon | Infraestrutura, Redes, Linux e DevOps Jr",
  description:
    "Portfolio profissional de Sávio Ramon Lima Nogueira, estudante de Ciência da Computação e profissional de TI com foco em infraestrutura, suporte N2/N3, redes, Linux, automação e DevOps Jr.",
  openGraph: {
    title: "Sávio Ramon | Portfolio de TI",
    description:
      "Infraestrutura de TI, suporte técnico, redes, Linux, automação e DevOps Jr.",
    type: "website",
    locale: "pt_BR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
