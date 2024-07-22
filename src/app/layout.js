import "../style/globals.css";

export const metadata = {
  title: "Portifólio",
  description: "Portifólio de Julio Lima.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
