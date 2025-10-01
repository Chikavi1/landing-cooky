import { LanguageProvider } from "../context/LanguageContext.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function App({ children }) {
  return (
    <LanguageProvider>
      <Header />
      <main  >{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
