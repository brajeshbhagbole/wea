const apikey="c4553e3b8566b353ae7f527fa1be0f42";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox =document.querySelector("#search input");
const searchbtn =document.querySelector("#search button");
const weathericon=document.querySelector(".weather-icon");
const errorr=document.querySelector(".error");
async function   getData(city) {
     
    const response= await fetch(apiurl+city+`&appid=${apikey}`);
   console.log(response.status)
    const data = await response.json();
   console.log(data);
    if(data.name==undefined){
       errorr.style.display="inline"
       data.name="New York";
    }
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temprature").innerHTML=Math.round(data.main.temp) +"°c";
   document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
   document.querySelector(".Wind").innerHTML=data.wind.speed +" km/h";

   if(data.weather[0].main=="Clouds"){
    weathericon.src="/images/clouds.png";
   } else if(data.weather[0].main=="Clear"){
    weathericon.src="/images/clear.png";
   }
   else if(data.weather[0].main=="Rain"){
    weathericon.src="/images/rain.png";
   }
   else if(data.weather[0].main=="Drizzle"){
    weathericon.src="https://brajeshbhagbole.github.io/wea/images/drizzle.png";
   }
   else if(data.weather[0].main=="Mist"){
    weathericon.src="https://brajeshbhagbole.github.io/wea/images/drizzle.png" ;
   }
    else if(data.weather[0].main=="Wind"){
    weathericon.src="/images/wind.png";
   }
    else if(data.weather[0].main=="Snow"){
    weathericon.src="/images/snow.png";
   }
    else if(data.weather[0].main=="Mist"){
    weathericon.src="/images/humidity.png";
   }
}

searchbtn.addEventListener("click",()=>{
getData(searchbox.value);
})


