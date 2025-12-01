# 🇵🇱 polish-cities

📅 **Aktualność danych:** czerwiec 2025

Zbiór danych o miastach (z powiązaniem do powiatu i województwa) w Polsce w formacie JSON – gotowy do użycia w aplikacjach frontendowych, backendowych lub do analiz.

Jest to lista wszystkich polskich miast, zawierająca informacje o:
- położeniu geograficznym każdego miasta – określonym jako środek bounding boxa (latitude, longitude) pobranego z danych Nominatim (OpenStreetMap),
- promieniu (radius) – liczonym jako największa odległość (w stopniach) od środka bounding boxa do jego narożników, co pozwala oszacować przybliżony zasięg miasta na mapie.

Dane te można wykorzystać m.in. do:
- filtrowania obiektów położonych w pobliżu danego miasta,
- lokalizacji punktów w obrębie miasta,
- prezentacji danych na mapach,
- prostych analiz przestrzennych.

Dane posiadają klucze możliwe do stworzenia relacji między nimi w bazie danych.

Dane pochodzą z:
- OpenStreetMap (https://nominatim.openstreetmap.org) © współtwórcy OSM, licencja ODbL 1.0: dane lokalizacyjne wyliczane na podstawie boundingbox
- Główny Urząd Statystyczny (https://stat.gov.pl/): baza TERYD (TERC + SIMC) (https://eteryt.stat.gov.pl/eTeryt/rejestr_teryt/udostepnianie_danych/baza_teryt/uzytkownicy_indywidualni/pobieranie/pobieranie.aspx?contrast=default)


## 📦 Instalacja

```bash
npm install polish-cities
```

## 🔢 Wersjonowanie

Pakiet używa wersjonowania dopasowanego do cyklu aktualizacji danych, w formacie:

- `rok.zmiana.fix`

Gdzie:
- **pierwszy numer (rok)** – rok, dla którego dane są aktualne (np. `2025.x.x` oznacza dane aktualne na rok 2025),
- **drugi numer (zmiana)** – zwiększany przy istotnej zmianie danych w trakcie danego roku (np. nowe źródło, poprawki/uzupełnienia rekordów),
- **trzeci numer (fix)** – zwiększany przy drobnych poprawkach, które nie zmieniają znacząco samych danych (np. poprawki techniczne, literówki w opisach).

Przykład: `2025.0.0` oznacza pierwsze wydanie danych aktualnych na rok 2025, bez dodatkowych zmian ani poprawek.
