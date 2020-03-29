window.addEventListener('load', async () => {
    const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b3ec4eba475177904e2f7fc2bc38ece6/37.8267,-122.4233`
    );

    const data = await res.json();

    const { summary, temperature, icon } = data.currently;

    document.getElementById('timezone').innerHTML = data.timezone;
    document.getElementById('summary').innerHTML = summary;
    document.getElementById('temp').innerHTML = temperature;

    setIcon('icon', icon);
});

const setIcon = (iconId, icon) => {
    var skycons = new Skycons({ monochrome: false });

    skycons.add(iconId, icon);

    skycons.play();
};
