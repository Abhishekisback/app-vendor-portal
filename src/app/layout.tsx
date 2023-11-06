import type { Metadata } from "next";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Synergy Vendor Portal",
  description: "To provide quote and generate invoice for PR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      
      <body>{children}</body>
      
    </html>
  );
}
