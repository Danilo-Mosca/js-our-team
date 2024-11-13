"use strict";
console.clear();

/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  
in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)

Bonus
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro 
sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!) */

// Recupero l'elemento della pagina html
const container = document.getElementById('container');
// Variabile accumulatrice che conterrà il template da aggiungere all'html
let template = '';
// Ciclo for..of che andrà a ciclare l'oggetto teamMembers e creerà
// un template dove inseriro le card
for (let valore of teamMembers) {
  template +=`
  <div class="card d-flex col-12 col-md-6 col-lg-4">
    <img src="${valore.img}" alt="${valore.name}">
      <p>${valore.name}</p>
      <p>${valore.role}</p>
      <p>${valore.email}</p>
  </div>`;
}

container.innerHTML = template;
