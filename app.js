/*Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità 
sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags 
(tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
 */

const express = require("express");
const app = express();
const port = 3000;

// general route
app.get('/', (req, res) => {
	res.send('Server del mio blog')
})

// static 
app.use(express.static("public"));

//array
const food = [
    {
        "titolo": "ciambellone",
        "contenuto": "ciambellone",
        "immagine": "./images/ciambellone.jpeg",
        "tags": ["cibo", "dolce",],
    },
    {
        "titolo": "cracker_barbabietola",
        "contenuto": "cracker_barbabietola",
        "immagine": "./images/cracker_barbabietola.jpeg",
        "tags": ["cibo", "salato",],
    },
    {
        "titolo": "pane_fritto_dolce",
        "contenuto": "pane_fritto_dolce",
        "immagine": "./images/pane_fritto_dolce.jpeg",
        "tags": ["cibo", "dolce",],
    },
    {
        "titolo": "pasta_barbabietola",
        "contenuto": "pasta_barbabietola",
        "immagine": "./images/pasta_barbabietola.jpeg",
        "tags": ["cibo", "primo",],
    },
    {
        "titolo": "torta_paesana",
        "contenuto": "torta_paesana",
        "immagine": "./images/torta_paesana.jpeg",
        "tags": ["cibo", "dolce",],
    },
];

// bacheca
app.get('/bacheca', (req, res) => {
	res.json(food)
})



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})