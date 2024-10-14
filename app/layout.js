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
        <body className={`${inter.className} bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-950 min-h-screen`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
