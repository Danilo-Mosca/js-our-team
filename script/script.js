"use strict";
console.clear();

/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  
in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)

Bonus
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro 
sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!) */

drawCards();

/* Funzione che aggiunge le cards */
function drawCards() {
// Recupero l'elemento della pagina html
const container = document.getElementById('wrapper');
// Variabile accumulatrice che conterrà il template da aggiungere all'html
let template = '';
// Ciclo for..of che andrà a ciclare l'oggetto teamMembers e creerà
// un template dove inseriro le card
for (let valore of teamMembers) {
  template += `
  <div class="card d-flex flex-row flex-wrap col-sm-12 col-md-4 col-lg-4 gap-4 mx-3 my-3" id="card">
    <div class="image-content debug">
      <img class="image-team" src="${valore.img}" alt="${valore.name}">
    </div>
    <div class="debug team-content">
    <p class="name">${valore.name}</p>
      <p class="role">${valore.role}</p>
      <p class="email">${valore.email}</p>
    </div>
  </div>`;
}
// Aggiungo l'hatml nella pagina
container.innerHTML = template;
}

