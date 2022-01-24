import header from "./header.module.css";
export function Header() {
  return (
    <div>
      <h2 className={header.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h2>
      <p className={header.description}>
        Get started by editing{" "}
        <code className={header.code}>pages/index.js</code>
      </p>
      ;
    </div>
  );
}
