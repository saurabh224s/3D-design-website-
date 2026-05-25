import "./globals.css";

export const metadata = {
  title: "Premium 3D Experience",
  description: "Next.js 3D Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

