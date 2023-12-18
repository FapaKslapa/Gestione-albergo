const template = '<option value="%VALUE">%TITOLO</option>';

export const valorizzaForm = (disp) => {
  let html = "";
  for (let i = 0; i < Object.keys(disp).length; i++) {
    html += template
      .replace("%VALUE", i)
      .replace("%TITOLO", Object.keys(disp)[i]);
    html += "\n";
  }
  return html;
};

export function sommaData(days) {
  let res = new Date(); //creo l'oggetto data
  res.setDate(res.getDate() + days); //sommo alla data ottenuta il numero di giorni desiderati
  //restituisco la data nel formato gg/mm/yyyy
  return res.getFullYear() + "-" + (res.getMonth() + 1) + "-" + res.getDate();
}

export function numMaxStanze(disp, index, scelta, prenotazionePerData) {
  console.log(scelta);
  return index !== -1
    ? Object.values(disp)[scelta] -
        Object.values(prenotazionePerData[index].prenotazioni)[scelta]
    : Object.values(disp)[scelta];
}

export function modificaArray(
  index,
  prenotazionePerData,
  scelta,
  numero,
  data,
  disp
) {
  if (index !== -1) {
    prenotazionePerData[index].prenotazioni[scelta] += numero;
  } else {
    prenotazionePerData.push({
      data: data,
      prenotazioni: newDictZero(disp),
    });
    prenotazionePerData[prenotazionePerData.length - 1].prenotazioni[scelta] =
      numero;
  }
  return prenotazionePerData;
}

function newDictZero(dizionario) {
  const newDict = {};
  for (const chiave in dizionario) {
    if (dizionario.hasOwnProperty(chiave)) newDict[chiave] = 0;
  }
  return newDict;
}
