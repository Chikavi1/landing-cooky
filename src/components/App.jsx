import { LanguageProvider } from "../context/LanguageContext.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function App({ children }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="max-w-7xl mx-auto p-4">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
