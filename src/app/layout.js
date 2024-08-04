import "../style/globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
export const metadata = {
  title: "Portifólio",
  description: "Portifólio de Julio Lima.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="page">
        <Header />
          {children}
        <Footer />
          </div>
      </body>
    </html>
  );
}
