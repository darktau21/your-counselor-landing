import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--mont-font",
});

export const metadata: Metadata = {
  applicationName: "Твой Вожатый",
  title: "Твой Вожатый",
  description: `Приложение "Твой вожатый" - удобный инструмент для организации лагерных мероприятий. Включает справочник с играми и пособиями, алгоритм выдачи заданий на день с автоматической генерацией на основе параметров (возраст, погода), экономящий время на планирование. Также предоставляет возможность вести заметки о прогрессе детей и поддерживает персональное расписание для вожатых с указанием времени и места мероприятий.`,
  keywords: [
    "вожатый",
    "лагерь",
    "игры",
    "задания",
    "мероприятия",
    "дети",
    "возраст",
    "планирование",
    "адаптация",
    "алгоритм",
    "расписание",
    "твой вожатый",
    "задания для детей в лагере",
    "приложение твой вожатый",
    "лагерные мероприятия",
    "лагерная программа",
    "игры для детей",
    "пособия для вожатых",
    "организация лагеря",
    "планирование лагеря",
    "автоматические задания",
    "развлечения для детей",
    "детский лагерь",
    "лагерное приложение",
    "заметки для вожатого",
    "вожатый онлайн",
    "лагерное расписание",
    "справочник игр",
    "алгоритм выдачи заданий",
    "детский отдых",
    "лагерная жизнь",
    "задания для детей",
    "заметки о прогрессе",
    "расписание мероприятий",
    "планирование детского отдыха",
    "лагерные активности",
    "время в лагере",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BV231Y2BPM" />
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-BV231Y2BPM');
    `}
      </Script>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
