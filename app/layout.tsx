import type { Metadata } from "next";
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "../config/fonts";

export const metadata: Metadata = {
  title: "Dronarjun Student Assessment Report",
  description: "Created by Traitfit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "bg-mainBg min-h-screen font-sans antialiased !scrollbar-hide min-w-[360px]",
          fontSans.variable
        )}
      >
        <Providers attribute="class" defaultTheme="light">
          <main className="flex items-center justify-center">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
