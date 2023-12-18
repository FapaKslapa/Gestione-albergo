/** 
Template degli input per modificare il numero di stanze disponibili nell'albergo
*/
const inputTemplate =
  "<div class=\"col\"><div class=\"form-floating\"><input type='number' class=\"form-control border-dark\" value='%DISPONIBILITA' placeholder=\"%TITOLO2\" id='%ID'><label for='%VAL'>%TITOLO</label></div></div>";

/** 
Funzione per generare l'html di modifica quantità utilizzabile all'esterno del modulo
*/
export const generaModificaQuantita = (disp) => {
  let html = "";
  const keys = Object.keys(disp);
  const values = Object.values(disp);
  for (let i = 0; i < keys.length; i++) {
    html += inputTemplate
      .replace("%ID", values[i])
      .replace("%VAL", values[i])
      .replace("%TITOLO2", keys[i])
      .replace("%TITOLO", keys[i])
      .replace("%DISPONIBILITA", values[i]);
  }
  return html;
};

/** 
Funzione per salvare le modifiche nel dizionario che poi andrà salvato sulla cache remota,
funzione utilizzabile all'esterno del modulo
*/
export const salvaModifiche = (disp) => {
  const values = Object.values(disp);
  const keys = Object.keys(disp);
  for (let i = 0; i < values.length; i++) {
    const nuovoValore = document.getElementById(values[i]).value;
    disp[keys[i]] = nuovoValore; //modifico i valori nel dizionario
  }
  return disp;
};

/** 
Funzione che ricerca l'elemento nel dizionario e lo elimina, ritorna un nuovo 
dizionario
*/
export const generaNuovoDizionario = (nomeDaCercare, dizionario) => {
  const keys = generaMaiuscole(Object.keys(dizionario));
  const values = generaMaiuscole(Object.values(dizionario));
  const posizione = keys.indexOf(nomeDaCercare.toUpperCase());
  if (posizione != -1) {
    //se viene trovata la posizione  restituisce un nuovo dizionario
    const newDict = {};
    for (let i = 0; i < keys.length; i++) {
      if (i != posizione) {
        newDict[Object.keys(dizionario)[i]] = values[i];
        console.log(Object.keys(dizionario)[i]);
        console.log(values[i]);
      }
    }
    return newDict;
  } //altrimenti se non viene trovato nulla
  else return dizionario; //restituisce il dizionario senza alcuna modifica
};

/** 
Funzione che prende in ingresso un array, verifica se all'interno ci sono stringhe,
se si mette la stringa in maiuscolo, altrimenti rimane cosi
*/
const generaMaiuscole = (values) => {
  const newValues = [];
  values.forEach((element) =>
    newValues.push(
      typeof element === "string" ? element.toUpperCase() : element
    )
  );
  return newValues;
};
