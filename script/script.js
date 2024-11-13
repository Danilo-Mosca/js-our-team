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
const elementAddMember = document.getElementById("addMember");
elementAddMember.addEventListener("submit", addMember);
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
  <div class="col-sm-12 col-md-6 col-xl-4">
    <div class="cards d-flex flex-row flex-wrap" id="card">
      <div class="image-content">
        <img class="image-team" src="${valore.img}" alt="${valore.name}">
      </div>
      <div class="team-content d-flex flex-column justify-content-center">
        <h2 class="name">${valore.name}</h2>
        <p class="role">${valore.role}</p>
        <p class="email">${valore.email}</p>
      </div>
    </div>
  </div>`;


  }
  // Aggiungo l'hatml nella pagina
  container.innerHTML = template;
}
/* Funzione che aggiunge un membro al team e mostra la sua card */
function addMember(event) {
  event.preventDefault();
  event.stopPropagation();
  const name = document.getElementById('addName').value;
  const role = document.getElementById('addRole').value;
  const img = document.getElementById('addImage').value;
  const email = document.getElementById('addEmail').value;

  const addNewMember = {
    name,
    role,
    img,
    email,
  }
  // Aggiungo il nuovo membro al database
  teamMembers.push(addNewMember);
  // console.log(teamMembers);
  // Richiamo la funzione drawCards() per visualizzare la cards del membro aggiunto
  drawCards();
}

