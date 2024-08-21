import "./globals.css";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Next.js Authentication App",
  description: "Simple authentication example with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
