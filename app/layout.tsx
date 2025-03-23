import { Inter, Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import AppColor from "@/theme/app-colors";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nunitoSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
