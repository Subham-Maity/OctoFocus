import "../styles/app.scss";
import Header from "./header";

export const metadata = {
  title: "OctoFocus",
  description: "EOD and TODO entry for OctoEmployees",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
      </body>
    </html>
  );
}
