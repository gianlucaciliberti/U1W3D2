/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo, priorita) {
  const li = document.createElement("li");
  li.textContent = testo ;
  const badge = document.createElement("span");
  badge.classList.add("badge");
  badge.textContent = priorita;
  const button = document.createElement("button");
  button.classList.add("elimina");
  button.textContent = "elimina";
  const adesso = new Date();
  const data = document.createElement("small");
  data.classList.add("data");
  data.textContent = adesso.toLocaleString("it-IT");
  li.appendChild(badge);
  li.appendChild(data);
  li.appendChild(button);
  li.classList.add("priorita-" + priorita)
  lista.appendChild(li);
  aggiornaContatore();
}

function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li");
  contatore.textContent = tasks.length;
}

aggiungiTask("Pagare le bollette", "ALTA");
aggiungiTask("Studiare JavaScript", "MEDIA");
aggiungiTask("Chiamare il dentista", "BASSA");
aggiungiTask("Bere il caffè", "ALTA");
aggiungiTask("Riposarsi", "BASSA");

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita 
   2. Aggiungi bottone Elimina su ogni task
   3. modificaTask(indice, nuovoTesto)
   4. rimuoviUltimo()
   5. svuotaTutto()
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/
function contaPerPriorita() {
  const tasks = lista.querySelectorAll("li");

  let conta = {
    ALTA: 0,
    MEDIA: 0,
    BASSA: 0
  };

  tasks.forEach(task => {
    if (task.classList.contains("priorita-ALTA")) {
      conta.ALTA++;
    }

    if (task.classList.contains("priorita-MEDIA")) {
      conta.MEDIA++;
    }

    if (task.classList.contains("priorita-BASSA")) {
      conta.BASSA++;
    }
  });

  console.log("ALTA:", conta.ALTA);
  console.log("MEDIA:", conta.MEDIA);
  console.log("BASSA:", conta.BASSA);
}

contaPerPriorita();

