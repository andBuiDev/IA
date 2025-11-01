import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bootcamp IA Interactivo - Aprende Inteligencia Artificial Gratis",
  description: "Bootcamp interactivo de Inteligencia Artificial basado en Talento Tech. Aprende Python, Machine Learning y IA con ejercicios prácticos y proyectos reales.",
  keywords: ["inteligencia artificial", "machine learning", "bootcamp IA", "python", "educación", "Talento Tech"],
  authors: [{ name: "Andrés Buitrago" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Bootcamp IA Interactivo",
    description: "Aprende Inteligencia Artificial de manera interactiva y gratuita",
    url: "https://andresbuitrago.github.io/bootcamp-ia-interactivo",
    siteName: "Bootcamp IA Interactivo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bootcamp IA Interactivo",
    description: "Aprende Inteligencia Artificial de manera interactiva y gratuita",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
