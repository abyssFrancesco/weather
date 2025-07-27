# 
WeatherApp
Una semplice applicazione web per ottenere le condizioni meteo attuali di qualsiasi città nel mondo utilizzando l'API di OpenWeatherMap.

🚀 Descrizione
WeatherApp è un progetto frontend realizzato in JavaScript puro (vanilla JS), pensato per mostrare informazioni meteo in tempo reale tramite una interfaccia intuitiva e minimalista. L'app permette all'utente di inserire il nome di una città e ricevere temperatura, umidità, vento e l'icona meteo corrispondente.

Ho sviluppato questo progetto per migliorare la mia capacità di interagire con API esterne, gestire errori e lavorare sul DOM dinamicamente.

🛠️ Tecnologie usate
HTML5

CSS3

JavaScript (ES6+)

Fetch API per chiamate HTTP

OpenWeatherMap API

Node.js + dotenv (per la gestione della API key in ambiente di sviluppo)

📦 Funzionalità principali
Ricerca meteo per città

Visualizzazione temperatura, umidità, velocità del vento

Visualizzazione icona meteo dinamica

Gestione degli errori per città non trovata

Uso di variabili ambiente per nascondere la API key (con dotenv)

⚙️ Come eseguire il progetto
Clona il repository:

bash
Copia
Modifica
git clone https://github.com/tuo-username/weatherapp.git
Installa le dipendenze:

bash
Copia
Modifica
npm install
Crea un file .env nella root con la tua API key:

env
Copia
Modifica
VITE_API_KEY=la_tua_api_key
Avvia il server di sviluppo (ad esempio con Vite o altro bundler):

bash
Copia
Modifica
npm run dev
Apri il browser su http://localhost:3000 (o la porta indicata)

📁 Struttura del progetto
bash
Copia
Modifica
/public        # file statici
/src           # codice JS, CSS
.env           # file variabile ambiente (NON incluso nel repo)
index.html     # entry point HTML
script.js      # codice principale JS
.gitignore     # file per ignorare .env e node_modules
👨‍💻 Cosa ho imparato
Interazione con API REST usando fetch

Gestione asincrona delle chiamate

Manipolazione dinamica del DOM

Gestione degli errori in frontend

Uso di variabili ambiente per sicurezza delle API keys

📞 Contatti
Sono disponibile per collaborazioni, progetti e opportunità lavorative!
LinkedIn | Email
