import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import "./globals.css";
import type { Viewport } from 'next';

export const metadata = {
  title: "Artdots",
  description: "Explore artworks and their creators. Connect dots between inspirations.",
  keywords: "",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Categories />
        {children}
        <Footer />
      </body>
    </html>
  );
}
