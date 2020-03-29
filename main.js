window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b3ec4eba475177904e2f7fc2bc38ece6/${lat},${long}`;

            const res = await fetch(api);

            const data = await res.json();

            const { summary, temperature, icon } = data.currently;

            document.getElementById(
                'timezone'
            ).innerHTML = `Timezone: ${data.timezone}`;
            document.getElementById('summary').innerHTML = summary;
            document.getElementById('temp').innerHTML = `${temperature}&#176;F`;

            setIcon('icon', icon);
        });
    }
});

const setIcon = (iconId, icon) => {
    var skycons = new Skycons({ monochrome: false });

    skycons.add(iconId, icon);

    skycons.play();
};
