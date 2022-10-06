let airIndex = document.getElementById("wert");
let levConcern = document.getElementById("concern");
let levEffect = document.getElementById("effect");
let aQI = document.getElementById("aqi");


function checkAirQuality() {
    if (aQI.value >= 0 && aQI.value <= 50) {
        wert.innerHTML = aQI.value;
        concern.innerHTML = " Good";
        effect.innerHTML = " Little or no risk";
        document.body.style.backgroundColor = "green";
        console.log(aQI.value);

    } else if (aQI.value >= 50 && aQI.value <= 100) {
        wert.innerHTML = aQI.value;
        levConcern.innerHTML = " Moderate";
        levEffect.innerHTML = " Acceptable quality";
        document.body.style.backgroundColor = "yellow";
        console.log(aQI.value);

    } else if (aQI.value > 100 && aQI.value <=150) {
        wert.innerHTML = aQI.value;
        levConcern.innerHTML = " Unhealthy for sensitive groups";
        levEffect.innerHTML = " Generable publics not likely affected";
        document.body.style.backgroundColor = "orange";
        console.log(aQI.value);
    }
}