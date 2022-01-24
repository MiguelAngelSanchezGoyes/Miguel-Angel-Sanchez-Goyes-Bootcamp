import { Firm, Invoice, Item } from "./model.js";
import { Fighter, King, Adviser, Squire } from "./modulos.js";

//Darle forma a la factura.

const app = function () {
  const nodesButton = document.querySelectorAll("button");

  console.log(nodesButton);

  nodesButton.forEach((item) => item.addEventListener("click", onButtonClick)); //onButtonClick es funcion, pero no lleva () para que no se ejecute en ese momento.

  console.log("Loaded DOM");
  createInvoices();
};
function onButtonClick(ev) {
  ev.preventDefault();
  console.dir(ev);
  let baseMsg = "Hecho click en";
  switch (ev.target.id) {
    case "btn-1":
      console.log(`${baseMsg} BTN1 - ${ev.target.dataset.foo}`);
      break;
    case "btn-2":
      console.log(`${baseMsg} BTN2 - ${ev.target.dataset.bar}`);
      break;
  }
}

function createInvoices() {
  //Creo objeto independiente con(new).
  const joffrey = new King(
    "./img/joffrey.jpg",
    "Joffrey Baratheon",
    "Lannister",
    14,
    true,
    2
  );
  //Creo objeto independiente con(new).
  let jaime = new Fighter(
    "./img/jaime.jpg",
    "Jaime Lannister",
    "Lannister",
    34,
    true,
    "Sword",
    9
  );
  let daenerys = new Fighter(
    "./img/daenerys.jpg",
    "Daenerys Targaryen",
    "Targaryen",
    16,
    true,
    "Dragons",
    10
  );
  let tyrion = new Adviser(
    "./img/tyrion.jpg",
    "Tyrion Lannister",
    "Lannister",
    27,
    true,
    daenerys
  );
  let bronn = new Squire(
    "./img/bronn.jpg",
    "Bronn",
    "Unknown",
    32,
    true,
    jaime,
    10
  );

  return [Joffrey, Jaime, Daenerys, Tyrion, Bronn];

  const varRate = 0.16;
  invoice = new Invoice(firm, client, items, varRate, "VISA");
  invoice.renderFactura(".page-facturas");
}
console.log();

(() => {
  document.addEventListener("DOMContentLoaded", app);
})();
