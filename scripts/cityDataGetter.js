// Przykładowe uruchomienie:
// node ./cityDataGetter.js Kujawsko-Pomorskie,Bydgoszcz

const [,,city] = process.argv;

if (!city) {
  console.log("Podaj miasto, np. node ./cityDataGetter.js Kujawsko-Pomorskie,Bydgoszcz");
  process.exit(1);
}

console.log("Sprawdzane miasto:", city);

async function getDataFromAPI(city) {
  const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "polish-cities"
    }
  });
  const data = await response.json();

  return data;
}

function calculateCenter(boundingbox) {
    console.log('Boundingbox:', boundingbox);
  const center = [
    (Number(boundingbox[0]) + Number(boundingbox[1])) / 2,
    (Number(boundingbox[2]) + Number(boundingbox[3])) / 2,
  ];
  return center;
}

function toRad(value) {
  return (Number(value) * Math.PI) / 180;
}

function round(value, precision) {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
}

function calculareRadius(lat1, lon1, lat2, lon2) {
    const R = 6371; // promień Ziemi w km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
}

const data = await getDataFromAPI(city);
if (!data.length) {
    console.log("NIe znaleziono miasta!");
    process.exit(1);
}
console.log('Dane z API:', data);

const center = calculateCenter(data[0].boundingbox);
console.log('Środek:', round(center[0], 6), round(center[1], 6));

const radius = calculareRadius(center[0], center[1], Number(data[0].boundingbox[0]), Number(data[0].boundingbox[2]));
console.log('Promień:', round(radius, 2));
