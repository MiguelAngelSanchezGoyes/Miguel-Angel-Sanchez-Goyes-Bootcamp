import { Header } from "../core/header";
import { Main } from "../core/main";

export function GentlemenPage() {
  const template = (
    <div className="container">
      <Header />
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <Main />
    </div>
  );
  return template;
}
