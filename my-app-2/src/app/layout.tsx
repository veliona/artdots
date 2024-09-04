import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import "./globals.css";

export const metadata = {
  title: "Artdots",
  description: "Explore artworks and their creators. Connect dots between inspirations.",
  keywords: "",
  viewport: "",
  content: "width=device-width, initial-scale=1"
};

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
