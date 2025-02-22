let city = document.getElementById("city-name")
let searchBTn = document.getElementById("search-btn")
searchBTn.addEventListener("click" , function(){
  let display = document.getElementById("result")
  display.innerHTML=""
  let cityName = city.value
  let apiUrl = `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json`;
  fetch(apiUrl)
  .then(response => response.json())
  .then(data =>{
    console.log("Full response : ",data)

    if(data.length === 0){
        console.log("No result found")
        return
    }
    //getting the latitude and the longitude of the city
    let latitude = data[0].lat
    let longitude = data[0].lon
    //searching about the prayer times after having the lan and lon
    let prayerApi = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
        fetch(prayerApi)
        .then(response => response.json())
        .then(data =>{
            console.log("Full response : ",data)
            let prayerTimings = data.data.timings
            //getting the timezone of the city
            let timezone = data.data.meta.timezone
            //getting the current time of the city
            let now = new Date();
            let options = { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: timezone };
            let cityTime = new Intl.DateTimeFormat("en-US", options).format(now);
            //extracting hours and minutes
            let dateObject = new Date(cityTime)
            let currentHour = dateObject.getHours()
            let currentMinute = dateObject.getMinutes()
            let prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
            let nextPrayer = "";
            let nextPrayerTime = "";

            for (let i = 0; i < prayerNames.length; i++) {
                let prayerTime = prayerTimings[prayerNames[i]];
                let [prayerHour, prayerMinute] = prayerTime.split(":").map(Number);

                if (prayerHour > currentHour || (prayerHour === currentHour && prayerMinute > currentMinute)) {
                    nextPrayer = prayerNames[i];
                    nextPrayerTime = prayerTime;
                    break;
                }else{
                    nextPrayer = "Fajr";
                    nextPrayerTime = prayerTimings.Fajr
                }
        }

            //displaying the result
           // let display = document.getElementById("result")
            display.innerHTML=`
            <h3>🕌 Prayer Time App  </h3>
            <h4>📆 Date: ${data.data.date.readable} | ${data.data.date.hijri.date}  </h4>
            <h4>📍 Location:  ${cityName} </h4>
            <p>🌙 Fajr: ${prayerTimings.Fajr}</p>
            <p>☀️ Dhuhr: ${prayerTimings.Dhuhr}</p>
            <p>🌅 Asr: ${prayerTimings.Asr}</p>
            <p>🌇 Maghrib: ${prayerTimings.Maghrib}</p>
            <p>🌌 Isha: ${prayerTimings.Isha}</p>
            <p>🔥 Next Prayer: ${nextPrayer} : ${nextPrayerTime} </p>
            `
        })
  })
  .catch(error => console.error("Error : ", error))

  console.log(cityName)
  
  
})
