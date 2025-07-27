const searchbtn = document.querySelector(".search-btn");
searchbtn.addEventListener("click", () => {
  /* alert("PA"); */
  const city = document.querySelector(".input").value;
  /* console.log(city); */

  //fetching dati da api
  /*   const city = "Rome"; */
  const apiKey = import.meta.env.VITE_API_KEY;
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(Url)
    .then((res) => {
      // casistiche di errori
      if (!res.ok) {
        // facciamo comparire l'errore
        document.querySelector(".error").style.display = "block";
        //facciamo non comparire il blocco weather
        document.querySelector(".weather").style.display = "none";
        //interrompiamo esecuzione se non esce la citta
        throw new Error("Città non trovata");
      }
      // se non c'è errore
      document.querySelector(".error").style.display = "none";
      //compaiono le informazioni
      document.querySelector(".weather").style.display = "block";
      return res.json();
    })
    .then((data) => {
      //destruttura la variabile data per prenderti i dati che ti servono
      const {
        main: { temp, humidity },
        weather,
        name,
        wind,
      } = data;

      /* console.log(data); */

      //facciamo comparire il blocco weather per far vedere le informazioni
      /*       document.querySelector(".weather").style.display = "block"; */

      // adesso mostriamo il nome della città, la temperatura attuale, l'umidità e il vento e l'icona

      //prendiamoci l'icona, weather è un array e quindi accediamo così
      const iconCode = weather[0].icon; // es: "01d"
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      // per cambiare l'immagine cambi il src

      const wicon = document.querySelector(".weather-icon");
      //cosi mettiamo l'icona di quella specifica città e la mettiamo nel src dell'immagine
      wicon.src = iconUrl;
      /*       wicon.alt = weather[0].description; */

      const cityName = document.querySelector(".city");
      cityName.textContent = `${data.name}`;
      const cityTemp = document.querySelector(".temp");
      //arrotondiamo la temperatura
      const roundtemp = Math.round(data.main.temp);
      cityTemp.textContent = `${roundtemp}°c`;
      const cityHumidity = document.querySelector(".humidity");
      cityHumidity.textContent = `${data.main.humidity}%`;
      const windspeed = document.querySelector(".wind");
      //arrotodniamo la velocità del tempo
      const roundspeed = Math.round(data.wind.speed);
      // wind object has 2 variables
      windspeed.textContent = `${roundspeed} km/h`;
    })
    .catch((err) => {
      console.error(`There was an Error:  ${err}`);
    });
});
