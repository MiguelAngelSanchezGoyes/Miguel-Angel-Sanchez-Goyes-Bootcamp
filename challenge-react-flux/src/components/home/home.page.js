import { Counter } from "./counter";
import { Greetings } from "./greetings";
import { GreetingsRef } from "./greetings.ref";
import { Card } from "../core/card";

export function HomePage() {
  // Model & Controller
  const title = "Component Samples";

  // View
  const template = (
    <section>
      <h2>{title}</h2>
      <Card title="Counter">
        <Counter />
      </Card>
      <Card title="Greetings">
        <Greetings />
      </Card>
      <Card title="Greetings Ref">
        <GreetingsRef />
      </Card>
    </section>
  );

  return template;
}
