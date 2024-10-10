import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './ThemeContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martina Apostoloska Portfolio",
  description: "Data Analyst and Data Scientist Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
