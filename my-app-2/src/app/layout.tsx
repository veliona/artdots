import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";

export const metadata = {
  title: "Artdots",
  description: "Explore artworks and their creators. Connect dots between inspirations.",
  keywords: "",
  viewport: ""
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
