import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
// import "./globals.css";
import "@/styles/globals.scss";
import Sidebar from "@/components/layout/Sidebar";
import SideNavContextProvider from "@/providers/SideNavContext";

const robotoFlexFont = Roboto_Flex({
  variable: "--custom-font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'John Arren "Jarren" Novilla - Web Developer at IBM',
  description: "Experienced web developer & IBM e-learning pro delivering intuitive, high-performance websites for startups, small businesses & enterprises alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlexFont.variable} antialiased text-base`}>
        <SideNavContextProvider>
          <Sidebar />
          {children}
        </SideNavContextProvider>
      </body>
    </html>
  );
}
