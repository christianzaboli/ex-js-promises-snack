// 🏆 Snack 1
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

const getPostTitle = (id) => {
  const promessa = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res.title))
      .catch(reject);
  });
  return promessa;
};

const getPost = (id) => {
  const promessa = new Promise((resolve, reject) => {
    let post;
    const fetchAuthor = () => {
      fetch(`https://dummyjson.com/users/${post.userId}`)
        .then((res) => res.json())
        .then((res) => {
          post.user = res;
          resolve(post);
        })
        .catch(reject);
    };
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        post = res;
        fetchAuthor();
      })
      .catch(reject);
  });
  return promessa;
};

getPostTitle(2)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

getPost(2)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

const lanciaDado = () => {
  const promessa = new Promise((resolve, reject) => {
    let numero;
    const inceppo = Math.round(Math.random() * 100 + 1);

    setTimeout(() => {
      console.log("probabilita inceppo: " + inceppo);
      if (inceppo < 20) {
        reject("Funzione inceppata!");
      } else {
        numero = Math.floor(Math.random() * 6 + 1);
        resolve("Risultato: " + numero);
      }
    }, 3000);
  });
  return promessa;
};

function creaLanciaDado() {
  let ultimoDado = 0;
  return (lancioDado = () => {
    const promessa = new Promise((resolve, reject) => {
      let numero;
      const inceppo = Math.round(Math.random() * 100 + 1);

      setTimeout(() => {
        console.log("cap inceppo: " + inceppo);
        if (inceppo > 80) {
          reject("Funzione inceppata!");
        } else {
          numero = Math.floor(Math.random() * 2 + 1);
          resolve(console.log(`Risultato: ${numero}`));
          numero === ultimoDado
            ? console.log("Incredibile!")
            : (ultimoDado = numero);
        }
      }, 3000);
    });
    return promessa;
  });
}

const lancio1 = creaLanciaDado();
lancio1();
lancio1();
lancio1();
lancio1();
