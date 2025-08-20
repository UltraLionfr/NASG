import Footer from "@/components/Footer";
import GithubLink from "@/components/GithubLink";
import { metadata } from "@/metadata.config";
import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <GithubLink />
        {children}
        <Footer />
      </body>
    </html>
  );
}