# Installationsanleitung unter Visual Studio Code

## Voraussetzungen

- Installierte Version von _Node.js_ (inklusive _npm_)
- _Visual Studio Code_ als Entwicklungsumgebung
- _Git_ zur Versionsverwaltung

## Installationsschritte
1. Repository klonen
     - Öffnen Sie ein Terminal und führen Sie folgenden Befehl aus:  
```
git clone https://github.com/Smilefever/kleiderspende-iu
```

2. Projektordner öffnen
     - Navigieren Sie in _Visual Studio Code_ in das geklonte Verzeichnis.

3. Abhängigkeiten installieren
     - Installieren Sie alle im Projekt definierten Abhängigkeiten:
  
```
npm install
```
4. Zusätzliche Pakete installieren
     - Routing Framework installieren

```
npm install react-router-dom
```

- TailwindCSS Framework installieren

```
npm install -D tailwindcss@3
```
- QR-Code-Paket für React installieren

```
npm install react-qr-code
```

   
5. Entwicklungsserver starten
    - Starten Sie die Anwendung im Entwicklungsmodus:

```
npm start
```
  
6. Anwendung im Browser öffnen
   - Die Anwendung ist in der Regel unter [http://localhost:3000/](http://localhost:3000/) erreichbar.
   - Die tatsächlich verwendete URL wird nach dem Start in der Konsole angezeigt.
