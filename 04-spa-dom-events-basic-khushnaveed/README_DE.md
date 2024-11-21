# Arbeiten mit JavaScript Event Listener

In dieser Aufgabe wirst Du praktische Event-Handler erstellen, um auf Maus- und Browser-Ereignisse zu hören und diese zu verarbeiten.

## Aufgaben

- Das [HTML](./index.html) wurde bereits für Dich vorbereitet. Bearbeite diese Datei nicht.
- Vervollständige die untenstehenden Aufgaben, indem Du Deinen JavaScript-Code in die [script.js](./script.js) Datei schreibst.

### Aufgabe 1 - Event Listener hinzufügen

Für den `<button>` mit der ID `#clickMe`;

- Füge einen Event Listener hinzu, um auf das `click` Ereignis zu hören
- Verwende `console.log()`, um eine Nachricht in die Konsole zu schreiben, wenn der Button geklickt wird

### Aufgabe 2 - Mausereignisse

- Füge 2 weitere Event Listener zu diesem Button hinzu;
  1. Für das `mouseenter` Ereignis
  2. Für das `mouseleave` Ereignis
- Verwende `console.log()`, um eine Nachricht zu schreiben, wenn jedes Ereignis ausgelöst wird

### Aufgabe 3 - Event Listener entfernen

Für den `<button>` mit der ID `#clickMeOnce`;

- Füge einen Event Listener hinzu, um auf das `click` Ereignis zu hören
- Wenn dieser geklickt wird;
  - Verwende `console.log()`, um eine Nachricht in die Konsole zu schreiben
  - Verwende die Methode `removeEventListener()`, um den `click` Event Listener zu entfernen

> Durch das Entfernen des Event Listeners sollte es nicht möglich sein, den Button ein zweites Mal zu aktivieren

### Aufgabe 4 - Auf Browser-Ereignisse hören

Für das `document` Objekt;

- Füge einen `DOMContentLoaded` Event Listener hinzu
- Verwende `console.log()`, um eine Nachricht zu schreiben, wenn dieses Ereignis ausgelöst wird
