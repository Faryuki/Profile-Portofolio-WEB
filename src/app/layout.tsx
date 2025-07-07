import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../lib/fontawesome"; // Sesuaikan jika lokasi berbeda
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (ubah sesuai web kamu)
export const metadata: Metadata = {
  title: "Dhio Zahwan | Portfolio",
  description:
    "Personal portfolio of Dhio Zahwan Aryasetyo — showcasing projects in Cybersecurity, Android Development, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        {/* Font Awesome CDN fallback (optional) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-Bxzr/SBB36GHEu+oyJqlzAGX0u+8RSBhg0C0rHx4t4pXnJApus0z7vHl9+SmGIX9qk+XgISAGUk2E8CtuAk9cA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
