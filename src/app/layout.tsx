import type { Metadata } from "next";
import "../styles/global.scss";

export const metadata: Metadata = {
  title: "Ember's Story",
  description: "Creafted by the roots embedded in Turkey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/aaf7wuq.css"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
