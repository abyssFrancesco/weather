# 🌦️ WeatherApp

Una semplice applicazione web per ottenere le **condizioni meteo attuali** di qualsiasi città nel mondo, utilizzando l'API di **OpenWeatherMap**.

---

## 🚀 Descrizione

**WeatherApp** è un progetto frontend sviluppato in **vanilla JavaScript**, pensato per mostrare informazioni meteo in tempo reale tramite un’interfaccia semplice e intuitiva.

L’utente può inserire il nome di una città e visualizzare:

- 🌡️ Temperatura attuale  
- 💧 Umidità  
- 🌬️ Velocità del vento  
- 🌤️ Icona meteo dinamica

> Ho realizzato questo progetto per esercitarmi nell'integrazione con API esterne, nella gestione asincrona del codice e nella manipolazione dinamica del DOM.

---

## 🛠️ Tecnologie utilizzate

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API**
- **[OpenWeatherMap API](https://openweathermap.org/api)**
- **Node.js + dotenv** (per la gestione sicura della API key in locale)

---

## 📦 Funzionalità principali

- 🔍 Ricerca meteo per nome città
- 📊 Visualizzazione temperatura, umidità, vento
- 🎯 Icona meteo dinamica in base alle condizioni
- ❌ Gestione errori per città non trovate
- 🔐 Uso di variabili ambiente con `dotenv` per proteggere la chiave API

---

## ⚙️ Come eseguire il progetto

### 1. Clona il repository

```bash
git clone https://github.com/tuo-username/weatherapp.git
cd weatherapp
2. Installa le dipendenze
bash
Copia
Modifica
npm install
3. Crea un file .env nella root del progetto
env
Copia
Modifica
VITE_API_KEY=la_tua_api_key
💡 Puoi ottenere la tua API key da OpenWeatherMap

4. Avvia il server di sviluppo
bash
Copia
Modifica
npm run dev
Apri il browser su http://localhost:3000 (o la porta indicata in console)

📁 Struttura del progetto
text
Copia
Modifica
/public          # File statici
/src             # Codice JavaScript e CSS
  └── script.js  # Logica principale dell'app
.env             # Variabili ambiente (NON incluso nel repo)
index.html       # Entry point HTML
.gitignore       # Ignora node_modules e .env
👨‍💻 Cosa ho imparato
Interagire con API REST utilizzando fetch

Gestire asincronia e Promise in JavaScript

Manipolare dinamicamente il DOM

Gestire gli errori lato frontend

Usare .env per nascondere chiavi sensibili

📞 Contatti
Sono disponibile per collaborazioni, progetti personali o opportunità lavorative!
📧 Email: gragnaniellofrancescom@gmail.com
