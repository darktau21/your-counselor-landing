import type { Metadata } from "next";
import { Fira_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--fira-font",
});

export const metadata: Metadata = {
  title: "Твой Вожатый",
  description: "Твой Вожатый",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={firaSans.className}>{children}</body>
    </html>
  );
}
