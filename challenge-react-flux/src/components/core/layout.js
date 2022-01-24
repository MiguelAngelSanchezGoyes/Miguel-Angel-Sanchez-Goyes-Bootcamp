import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }) {
  const template = (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );

  return template;
}
