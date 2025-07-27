const city = "Rome";
const apiKey = "f5b80abacb64c94113d4cf1871d47b73";
const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


fetch(Url)
.then((res)=>{
    res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(`There was an Error:  ${err}`);
})
