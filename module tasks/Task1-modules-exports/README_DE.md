# Umgang mit Modulexporten

Der Großteil des Codes für diese Website ist fertig, jedoch fehlen die Modulexporte.

## Aufgaben

### Aufgabe 1

- Öffne die Website im Live Server und sieh dir die **Developer Tools** Konsole an
- Korrigiere das `<script>`-Element in [index.html](./index.html), sodass es Module unterstützt
- Überprüfe die Konsole erneut, du solltest einen Fehler wie diesen erhalten:

  > Uncaught SyntaxError: The requested module './elements.js' does not provide an export named 'day' (at updater.js:1:10)

### Aufgabe 2

In den folgenden Dateien, folge den Pfaden, die in den `import`-Anweisungen angegeben sind, und verwende das `export`-Schlüsselwort, um die benötigten Objekte korrekt zu exportieren.

- [js/main.js](./js/main.js)
- [js/init.js](./js/init.js)
- [js/updater.js](./js/updater.js)

## Erwartetes Ergebnis

![Erwartetes Ergebnis](./reference.png)
