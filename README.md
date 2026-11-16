# Magazzino Magliette

Gestionale per un piccolo marchio di magliette: grafiche e bozze, lotti prodotti, vendite e stock per taglia, più uno **Studio** per disegnare i template con mockup realistico, tessuti, tecniche di stampa e vista 3D.

## Avvio in locale

Serve [Node.js](https://nodejs.org/). Dalla cartella del progetto:

```bash
node server.js
```

Poi apri http://localhost:5173.

In locale i dati vengono salvati nel browser (localStorage) e restano solo su quel computer.
L'editor e la vista 3D caricano fabric.js e three.js da cdnjs, quindi serve la connessione a internet.

## Pubblicazione (Netlify)

Il sito pubblica `index.html`. Dopo ogni modifica a `magazzino-magliette.html` rigenera la pagina e fai il push:

```bash
node build-index.js
```

## File

- `magazzino-magliette.html`: l'intera applicazione (HTML, CSS e JavaScript).
- `server.js`: piccolo server locale che serve la pagina.
- `index.html`: la pagina completa generata da `build-index.js`, usata da Netlify.
- `build-index.js`: rigenera `index.html`.
