import grid from "./grid.module.css";
export function Grid({ children }) {
  return <div className={grid.container}>{children}</div>;
}
