class Characters {
  constructor(name, family, age, state) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.state = state;
  }
  renderDocument(elementID, htmlDocument) {
    console.log(elementID);
    document.querySelector(elementID).innerHTML += htmlDocument;
  }
}

export class King extends Characters {
  constructor(
    name,
    family,
    age,
    state,
    yearsReign,
    coms = "Vais a morir todos"
  ) {
    super(name, family, age, state);
    this.yearsReign = yearsReign;
    this.coms = coms;
  }
  formatHTML() {
    const htmlKing = `
    <div class="character col">
    <div class="card character__card">
            <img
              src="${e.imgSrc}"
              alt="${this.joffrey.name}} (${this.joffrey.family})"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.joffrey.name} (${this.joffrey.family})</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.joffrey.age} años</li>
                  <li>
                    Estado:
                    ${this.joffrey.state}
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: ${this.joffrey.yearsReign}</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Servilismo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img
        class="comunications__picture"
        src="img/no-one.jpg"
        alt="Nombre y familia del que habla"
      />
    </div>
  </body>`;
  }

  renderFactura(elementID) {
    this.formatHTML();
    this.renderDocument(elementID, this.htmlKing);
  }
}

export class Fighter extends Characters {
  constructor(
    name,
    family,
    age,
    state,
    weapon,
    skill = Math.round(Math.random() * 10),
    coms = "Primero pego y luego pregunto"
  ) {
    super(name, family, age, state);
    this.weapon = weapon;
    this.skill = skill;
    this.coms = coms;
  }
}

export class Adviser {
  constructor(
    name,
    family,
    age,
    state,
    advisorOf,
    coms = "No sé por qué, pero creo que voy a morir pronto"
  ) {
    super(name, family, age, state);
    this.advisorOf = advisorOf;
    this.coms = coms;
  }
}

export class Squire {
  constructor(
    name,
    family,
    age,
    state,
    serves,
    servesLvl = Math.round(Math.random() * 10),
    coms = "Soy un looser"
  ) {
    super(name, family, age, state);
    this.serves = serves;
    this.servesLvl = servesLvl;
    this.coms = coms;
  }
}
