import "./globals.css";

export const metadata = {
  title: "Welcome ItzFizz | Scroll-driven hero",
  description: "Scroll-driven hero section animation built with Next.js, Tailwind CSS and GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Unbounded:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-asphalt font-body text-chalk antialiased">{children}</body>
    </html>
  );
}
