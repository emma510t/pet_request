import { getPets, delPet } from "./utils/data.js";

async function init() {
  const pets = await getPets();
  console.log(pets);
}

document.querySelector("button").addEventListener("click", () => {
  delPet(9);
  init();
});

init();
