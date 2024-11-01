import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import SocketProvider from "@/providers/SocketProvide";
import ListOnlineUsers from "@/components/ui/ListOnlineUsers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Video Call",
  description: "Video Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={geistSans.variable}>
          <SocketProvider>
            <main className="flex flex-col min-h-screen bg-secondary">
              <NavBar />
              <Container>
                {/* Render ListOnlineUsers globally across pages */}
                <ListOnlineUsers />
                {children}
              </Container>
            </main>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
