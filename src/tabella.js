import { prenotazionePerData } from "./script.js";

const colori = {
  rosso: "bg-danger",
  blu: "bg-primary",
  giallo: "bg-warning",
  verde: "bg-success",
  azzurro: "bg-info",
};
/** 
Funzione per creare l'header della tabella
*/
const creaHeaderCompleta = (disp, table) => {
  let header = "<tr><th>Giorno</th>%CAMERE</tr>";
  const intestazione = "<th>%VALORE</th>";
  const keys = Object.keys(disp); //recupero le chiavi del dizionario
  let html = "";
  //genero il codice html dell'header della tabella
  keys.forEach((key) => {
    html += intestazione.replace("%VALORE", key);
  });
  header = header.replace("%CAMERE", html);
  table.innerHTML = header; //la inserisco come html
};
/** 
Recupera la data finale da inserire nella tabella
*/
function dataFinale(days, data) {
  let res = new Date(data); //creo l'oggetto data
  res.setDate(res.getDate() + days); //sommo alla data ottenuta il numero di giorni desiderati
  //restituisco la data nel formato gg/mm/yyyy
  return res.getDate() + "/" + (res.getMonth() + 1) + "/" + res.getFullYear();
}

function formattaData(days, data) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let res = new Date(data); //creo l'oggetto data
  res.setDate(res.getDate() + days); //sommo alla data ottenuta il numero di giorni desiderati
  //restituisco la data nel formato gg/mm/yyyy
  return res.toLocaleDateString(undefined, options);
}

function primaMaiuscola(stringa) {
  // Verifica se la stringa è vuota o nulla
  if (!stringa) {
    return "";
  }
  // Trasforma il primo carattere in maiuscolo e concatena il resto della stringa
  return stringa.charAt(0).toUpperCase() + stringa.slice(1);
}
/** 
Funzione per recuperare la posizione della data in un array di dizionari
*/
export const recuperaIndexData = (date, disp) => {
  return disp.findIndex(({ data }) => data === date);
};

/** 
Funzione per creare il body della tabella
*/
const creaBodyTabella = (disp, table, data) => {
  //genero il body della tabella
  let rows = "<tr >%VALORI</tr>";
  const dato = "<td>%DATO</td>";
  let body = "";

  for (let i = 0; i <= 30; i++) {
    let cont = 0;
    let html = "";
    const dataInserita = dataFinale(i, data);
    const giornoTabella = formattaData(i, data);
    html += dato.replace("%DATO", primaMaiuscola(giornoTabella));
    for (let j = 0; j < Object.values(disp).length; j++) {
      const indexData = recuperaIndexData(dataInserita, prenotazionePerData);
      const tmp =
        indexData !== -1
          ? Object.values(disp)[j] -
            Object.values(prenotazionePerData[indexData].prenotazioni)[j]
          : Object.values(disp)[j];

      //se la lunghezza dei giorni non è uguale al valore di i inserisco il numero massimo di camere disponibili altrimenti la differenza tra il numero di camere ed il numero di quelle camere prenotate
      const numeroPrenotazione =
        '<div class="progress" style="height: 30px;">\n' +
        '  <div class="progress-bar ' +
        Object.values(colori)[cont] +
        '" role="progressbar" aria-label="Example with label" style="width:' +
        (tmp / Object.values(disp)[j]) * 100 +
        '%; font-size: x-large;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">' +
        tmp +
        "</div>\n" +
        "</div>";
      if (tmp !== 0) html += dato.replace("%DATO", numeroPrenotazione);
      else
        html += dato.replace(
          "%DATO",
          '<img width="40" height="40" src="Icon/calendarioPieno.svg" alt="elimina">'
        );
      cont++;
      if (cont == 5) cont = 0;
    }
    body += rows.replace("%VALORI", html);
  }
  table.innerHTML = body; //lo inserisco come html
};

/** 
richiamo delle funzioni per generare la tabella, utilizzabile al di fuori del documento
*/
export const generaTabella = (disp, tableHead, tableBody, dataIniziale) => {
  creaHeaderCompleta(disp, tableHead);
  creaBodyTabella(disp, tableBody, dataIniziale);
};

/** 
Funzione per la ricerca della stanza
*/
const ricercaStanza = (prenotazioni, stanza) => {
  let bol = false;
  for (let i = 0; i < prenotazioni.length; i++) {
    bol = prenotazioni[i] === stanza ? true : false;
    if (bol) break;
  }
  return bol;
};
/** 
Funzione per modificare l'array di dizionari contenente il 
numero di prenotazioni per giorni
*/
export const aggiornaPrenotazioni = (disp) => {
  const totaleAggiornato = []; //array di dizionari aggiornato e poi restituito
  const chiaviDisponibilita = Object.keys(disp);
  for (let i = 0; i < prenotazionePerData.length; i++) {
    const chiaviPrenotati = Object.keys(prenotazionePerData[i].prenotazioni);
    const valoriPrenotati = Object.values(prenotazionePerData[i].prenotazioni);
    const data = prenotazionePerData[i].data; //data nell'array di dizionari
    const aggiornato = {}; //parte del dizionario aggiornata
    for (let j = 0; j < Object.keys(disp).length; j++) {
      aggiornato[Object.keys(disp)[j]] = Object.values(data)[j];
      if (ricercaStanza(chiaviPrenotati, chiaviDisponibilita[j])) {
        //se trova la stanza
        aggiornato[chiaviDisponibilita[j]] = valoriPrenotati[j];
      } else {
        //altrimenti se non lo trova
        aggiornato[chiaviDisponibilita[j]] = 0;
      }
    }
    totaleAggiornato.push({
      data: data,
      prenotazioni: aggiornato,
    });
  }
  return totaleAggiornato;
};
