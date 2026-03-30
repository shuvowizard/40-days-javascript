console.log("Country Explorer App");

const countryDetails = document.getElementById("countryDetails");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

let map;

searchBtn.addEventListener("click", async () => {
    const countryName = searchInput.value.trim();

    if (!countryName) return;

    await fetchCountry(countryName);
});


async function fetchCountry(name) {
    loader.classList.remove("hidden");
    error.classList.add("hidden");
    countryDetails.innerHTML = "";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

        const data = await response.json();
        const country = data[0];
        if (!country) {
            throw new Error("Invalid country name");
        }

        const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";
        
        countryDetails.innerHTML = `
            <div class="p-4 border rounded shadow w-200">
                <img src="${country.flags.svg}" alt="flag" class="w-32 mb-2">
                <h2 class="text-xl font-bold mb-2">${country.name.common}</h2>
                <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Languages:</strong> ${languages}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <div class="mb-4">
                    <h2 class="text-sl font-semibold mb-2">Local Times:</h2>
                    <ul id="timezoneList" class="list-disc list-inside ml-6">
                    </ul>
                </div>
            </div>
        `;

        updateTimezones(country.timezones);
        drawMap(country.latlng, country.name.common);

    } catch (err) {
        error.classList.remove("hidden");
        error.textContent = err.message || "Failed to load country information";
    } finally {
        loader.classList.add("hidden");
    }
}

function updateTimezones(timezones) {
    const timezoneList = document.getElementById("timezoneList");
    timezoneList.innerHTML = "";

    timezones.forEach((timezone) => {
        const li = document.createElement("li");
        const localTime = getTimeUsingIntl(timezone);

        li.textContent = `${timezone} - Local Time: ${localTime}`;
        timezoneList.appendChild(li);
    });
}

function getTimeUsingIntl(timezone) {
    try {
        const options = {
            timeZone: convertToIANA(timezone),
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
        return Intl.DateTimeFormat("en-US", options).format(new Date());
    } catch (err) {
        console.warn(`Timezone ${timezone} is not supported, falling back to UTC`);
        return "Unsupported Timezone";
    }
}

function convertToIANA(utcString) {
    // Basic support for known UTC formats
    if (utcString === "UTC") return "Etc/UTC";

    const match = utcString.match(/^UTC([+-]\d{2}):(\d{2})$/);
    if (match) {
        const [, hour, min] = match;
        // Convert UTC offset to Etc/GMT format (note: reverse sign for IANA)
        const offset = parseInt(hour, 10);
        const sign = offset < 0 ? "+" : "-";
        return `Etc/GMT${sign}${Math.abs(offset)}`; // IANA flips signs
    }

    return "Etc/UTC"; // fallback
}

function drawMap(latlng, countryName) {
    const [lat, lng] = latlng;

    if (!map) {
        map = L.map('map').setView([lat, lng], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    } else {
        map.setView([lat, lng], 5);
    }

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>${countryName}</b><br>Lat: ${lat}, Lng: ${lng}`)
        .openPopup();
}

