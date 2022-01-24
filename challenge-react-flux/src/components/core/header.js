import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContextProvider";
import { Menu } from "./menu";

export function Header() {
  const { tasks } = useContext(TasksContext);
  const menuItems = [
    { path: "/", label: "Films" },
    { path: "/fav", label: "Favoritos" },
  ];

  /* const pendingTasks = tasks.filter((item) => !item.isCompleted).length; */

  const template = (
    <header className="header">
      <div className="header__main">
        <h1 className="header__title">Films {/* {pendingTasks} */}</h1>
        <Menu menuItems={menuItems} />
      </div>
    </header>
  );
  return template;
}
