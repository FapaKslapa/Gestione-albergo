export function salvaDati(dict, key) {
  fetch("https://ws.progettimolinari.it/cache/set", {
    method: "Post",
    headers: {
      "content-type": "application/json",
      key: "93bb2bf0-9b41-4066-971f-1ecbf8ce02fd",
    },
    body: JSON.stringify({
      key: key,
      value: JSON.stringify(dict),
    }),
  })
    .then((element) => element.json())
    .then((element) => console.log(element))
    .catch((error) => console.error(error));
}

export function recuperaDati(chiave, dict) {
  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/get", {
      method: "Post",
      headers: {
        "content-type": "application/json",
        key: "93bb2bf0-9b41-4066-971f-1ecbf8ce02fd",
      },
      body: JSON.stringify({ key: chiave }),
    })
      .then((element) => {
        resolve(element.json());
      })
      .catch((error) => reject(error));
  });
}

export function controlEvent(array) {
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0); // Imposta l'orario a mezzanotte
  for (let i = 0; i < array.length; i++) {
    const data = array[i].data.split("/");
    const dataSelezionata = new Date(data[2], data[1] - 1, data[0]);
    if (dataSelezionata >= oggi) {
      return i;
    }
  }
  return -1;
}
