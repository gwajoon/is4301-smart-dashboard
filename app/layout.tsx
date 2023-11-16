"use client";
import { Inter } from "next/font/google";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => router.push("/")}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => router.push("/recommendation")}>
              Recommendation
            </Button>
            <Button
              color="inherit"
              onClick={() => router.push("/customerServiceChart")}>
              Customer Service Chart
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </body>
    </html>
  );
}
