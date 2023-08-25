# Consegna:

Dato un array di oggetti letterali con:

- url dell'immagine
- titolo
- descrizione
  Creare un carosello come nella foto allegata.

## Milestone 0: (fatto)

Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Consiglio: gestite bene il tempo. si può sempre tornare in seguito a migliorare la grafica, ma dedicargli molto tempo da subito può farvi rimanere indietro.

### svolgimento:

- creo la struttura del carosello in maniera molto spartana. immagino gli spazi dove inserirò le cose in un secondo momento.

## Milestone 1: (fatto)

Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

### svolgimento milestone 1:

- pulisco il carosello
- do degli ID all'immagine attiva + ai bottoni avanti e indietro

- al caricamento della pagina:
  - inserisco la prima immagine dell'array nello spazio di immagine attiva (fatto)
    -inserisco gli altri dati dell'oggetto dell'array in uno spazio che creerò ad hoc
- aggiungo event listener sui bottoni
  - al click del bottone avanti:
  - sostituisco l'immagine attiva con quella immediatamente successiva dell'array e così anche il testo

## Milestone 2: (fatto)

Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

## BONUS 1:

Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

## BONUS 2:

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

## BONUS 3:

Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay
