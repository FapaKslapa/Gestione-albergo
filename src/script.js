//import delle funzioni presenti negli altri moduli
import {
  generaTabella,
  aggiornaPrenotazioni,
  recuperaIndexData,
} from "./tabella.js";
import {
  generaModificaQuantita,
  generaNuovoDizionario,
  salvaModifiche,
} from "./amministrazione.js";
import {
  sommaData,
  numMaxStanze,
  modificaArray,
  valorizzaForm,
} from "./aggiungi.js";
import { salvaDati, recuperaDati, controlEvent } from "./cache.js";
const saveModifiche = document.getElementById("salvaModifiche");
const saveModal = document.getElementById("saveModal");
const noSaveModal = document.getElementById("noSaveModal");
const mymodal = new bootstrap.Modal("#modalSave");
const tableHead = document.getElementById("tableHeader");
const tableBody = document.getElementById("tableBody");
const modificaDisponibilita = document.getElementById("modificaDisponibilita");
const paginaDiAmministrazione = document.getElementById(
  "visualizzaPaginaAmministrazione"
);
const buttonSaveModal = document.getElementById("saveModalModifiche");
const aggiungiStanza = document.getElementById("aggiungiStanza");
const nomeStanza = document.getElementById("tipologiaStanza");
const numeroStanze = document.getElementById("numeroStanze");
const nomeStanzaDaEliminare = document.getElementById("nomeStanzaDaEliminare");
const confermaElimina = document.getElementById("confermaElimina");
const indietro = document.getElementById("indietro");
const avanti = document.getElementById("avanti");
const aggiungi = document.getElementById("aggiungi");
const modal = document.getElementById("modalBody");
const date = document.getElementById("date");
date.value = new Date().toISOString().split("T")[0];
const prossimoModal = document.getElementById("prossimoModal");
const select = document.getElementById("select");
const modalIndietro = document.getElementById("modalIndietro");
const modalTogli = document.getElementById("modalTogli");
const modalaggiungi = document.getElementById("modalAggiungi");
const modalSet = document.getElementById("ModalSet");
const numeri = document.getElementById("numeri");
let numeroStanzeMax = 0;
let numeroAttualeStanze = 0;
let scelta = 0;
let dataFinale = 0;
let index = 0;
if (numeroAttualeStanze === 0) {
  modalTogli.disabled = true;
}
numeri.innerText = numeroAttualeStanze;
date.min = new Date().toISOString().split("T")[0];
let giorni = 0;
/** 
disponibilità camere nell'albergo senza prenotazioni
*/
export let disp = {
  singola: 10,
  doppia: 5,
  tripla: 3,
};

/** 
prenotazioni delle camere nei giorni
da creare una per ogni data in cui almeno una stanza è stata prenotata
*/
export let prenotazionePerData = [];
paginaDiAmministrazione.onclick = () => {
  //al click del button per modificare la pagina web
  //viene generato l'html
  modificaDisponibilita.innerHTML = generaModificaQuantita(disp);
};
buttonSaveModal.onclick = () => {
  //alla pressione del button esci e conferma del modal
  //rigenera la tabella con le modifiche apportate
  generaTabella(salvaModifiche(disp), tableHead, tableBody, sommaData(giorni));
};
aggiungiStanza.onclick = () => {
  //alla pressione del button aggiungi stanza
  //inserisco la stanza nel dizionario disp
  disp[nomeStanza.value] = parseInt(numeroStanze.value);
  nomeStanza.value = "";
  numeroStanze.value = "";
  prenotazionePerData = aggiornaPrenotazioni(disp);
  generaTabella(disp, tableHead, tableBody, sommaData(giorni));
};

confermaElimina.onclick = () => {
  //alla pressione del button conferma elimina stanza
  //viene ricercata la stanza da eliminare, viene restituito poi il nuovo dizionario
  //viene poi rigenerata la tabella modificata
  disp = generaNuovoDizionario(nomeStanzaDaEliminare.value, disp);
  for (let i = 0; i < prenotazionePerData.length; i++) {
    prenotazionePerData[i].prenotazioni = generaNuovoDizionario(
      nomeStanzaDaEliminare.value,
      prenotazionePerData[i].prenotazioni
    );
  }

  //prenotazionePerData = aggiornaPrenotazioni(disp);

  //console.log(nomeStanzaDaEliminare.value);
  nomeStanzaDaEliminare.value = "";
  console.log(disp);
  console.log(" :");
  console.log(prenotazionePerData);
  generaTabella(disp, tableHead, tableBody, sommaData(giorni));
  //console.log(prenotazionePerData);
};
avanti.onclick = () => {
  giorni += 30;
  indietro.disabled = false;
  generaTabella(disp, tableHead, tableBody, sommaData(giorni)); //genera la tabella iniziale che verrà poi scaricata dalla cache remota
};
indietro.onclick = () => {
  giorni -= 30;
  if (giorni == 0) indietro.disabled = true;
  generaTabella(disp, tableHead, tableBody, sommaData(giorni)); //genera la tabella iniziale che verrà poi scaricata dalla cache remota
};

prossimoModal.onclick = () => {
  scelta = select.selectedIndex;
  let dataScelta = date.value.split("-");
  let mese = 0;
  if (parseInt(dataScelta[1]) < 10) mese = dataScelta[1].charAt(1);
  else {
    mese = dataScelta[1];
  }
  dataFinale = dataScelta[2] + "/" + mese + "/" + dataScelta[0];
  index = recuperaIndexData(dataFinale, prenotazionePerData);
  numeroStanzeMax = numMaxStanze(disp, index, scelta, prenotazionePerData);
  console.log(numeroStanzeMax);
  if (numeroAttualeStanze === numeroStanzeMax - 1 || numeroStanzeMax === 0) {
    modalAggiungi.disabled = true;
  }
};

aggiungi.onclick = () => {
  select.innerHTML = valorizzaForm(disp);
  numeroAttualeStanze = 0;
  numeri.innerText = numeroAttualeStanze;
  modalAggiungi.disabled = false;
  modalTogli.disabled = true;
};

modalTogli.onclick = () => {
  modalAggiungi.disabled = false;
  if (numeroAttualeStanze === 1) modalTogli.disabled = true;
  numeroAttualeStanze--;
  numeri.innerText = numeroAttualeStanze;
};

modalAggiungi.onclick = () => {
  modalTogli.disabled = false;
  console.log("numero attuale " + numeroAttualeStanze);
  console.log("numero Max " + (numeroStanzeMax - 1));
  if (numeroAttualeStanze === numeroStanzeMax - 1) {
    modalAggiungi.disabled = true;
    console.log("MAX");
  }
  numeroAttualeStanze++;
  numeri.innerText = numeroAttualeStanze;
};

modalSet.onclick = () => {
  const stringa = Object.keys(disp)[scelta];
  console.log(Object.keys(disp)[scelta]);
  modificaArray(
    index,
    prenotazionePerData,
    stringa,
    numeroAttualeStanze,
    dataFinale,
    disp
  );
  generaTabella(disp, tableHead, tableBody, sommaData(giorni));
  numeroAttualeStanze = 0;
  numeri.innerText = numeroAttualeStanze;
};

modalIndietro.onclick = () => {
  numeroAttualeStanze = 0;
  modalAggiungi.disabled = false;
  modalTogli.disabled = true;
  numeri.innerText = numeroAttualeStanze;
};

saveModifiche.onclick = () => {
  salvaDati(disp, "disp");
  salvaDati(prenotazionePerData, "prenotazionePerData");
  console.log("cliccato");
};

saveModal.onclick = () => {
  salvaDati(disp, "disp");
  salvaDati(prenotazionePerData, "prenotazionePerData");
  console.log("cliccato");
};

setInterval(function () {
  mymodal.show();
}, 3600000);

recuperaDati("disp").then((response) => {
  console.log(JSON.parse(response.result));
  disp = JSON.parse(response.result);
  generaTabella(disp, tableHead, tableBody, sommaData(giorni));
});

recuperaDati("prenotazionePerData").then((response) => {
  console.log(response);
  prenotazionePerData = JSON.parse(response.result);
  generaTabella(disp, tableHead, tableBody, sommaData(giorni));
  const numElimina = controlEvent(prenotazionePerData);
  if (numElimina !== -1) prenotazionePerData.splice(0, numElimina);
  salvaDati(prenotazionePerData, "prenotazionePerData");
});

//generaTabella(disp, tableHead, tableBody, sommaData(giorni));
