import { Avatar } from "./avatars";
import "./styles.css";

export function Main() {
  const gentlemen = [
    {
      img: "fary.jpg",
      letter: "F",
      name: "The Fary",
      profession: "profession: ",
      title2: "Influencer",
      status: "Status: ",
      title3: "RIP",
      twitter: "Twitter: ",
      title4: "Pending",
    },
    {
      img: "./img/julio.jpg",
      letter: "J",
      name: "Julius Churchs",
      profession: "profession: ",
      title2: "Youtuber",
      status: "Status: ",
      title3: "Alive",
      twitter: "Twitter: ",
      title4: "@julius_churchs",
    },
    {
      img: "./img/bertin.jpg",
      letter: "B",
      name: "Bertin Osbourne",
      profession: "profession: ",
      title2: "Java developer",
      status: "Status: ",
      title3: "Alive",
      twitter: "Twitter: ",
      title4: "@osbourne",
    },
  ];
  const template = (
    <main className="main">
      <Avatar gentlemen={gentlemen} />
    </main>
  );
  return template;
}
