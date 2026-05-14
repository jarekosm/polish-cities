# Historia zmian

Format oparty na [Keep a Changelog](https://keepachangelog.com/pl/1.0.0/).  
Numer wersji pakietu: `rok.zmiana.fix` — zgodnie z opisem w [README](README.md#-wersjonowanie).

## [Unreleased]

- Rozporządzenie Rady Ministrów z dnia 31 lipca 2025 r. w sprawie ustalenia granic niektórych gmin i miast, nadania niektórym miejscowościom statusu miasta oraz zmiany nazwy gminy: https://dziennikustaw.gov.pl/DU/2025/1046

## [2025.1.3] - 2026-05-14

### Zmienione

- README: dodano link do tej historii zmian.

### Dodane

- CHANGELOG wraz z historią wszystkich wersji

## [2025.1.2] - 2026-04-28

### Zmienione

- Podbicie segmentu `fix` w numerze wersji (brak zmian w danych ani w README względem 2025.1.1 w tym samym cyklu commitów).

## [2025.1.1] - 2026-04-28

### Dodane

- Skrypt `scripts/cityDataGetter.js` do szybkiego wyliczania środka i promienia z bounding boxa.
- Plik `.vscode/settings.json` z ustawieniami edytora dla repozytorium.

### Zmienione

- README: zaktualizowano datę aktualności danych na grudzień 2025.

## [2025.1.0] - 2026-04-28

### Zmienione

- `data/city.json`: korekta listy miast względem rozporządzenia Rady Ministrów z dnia 30 lipca 2024 r. (m.in. granice gmin, nadanie statusu miasta, siedziby władz gmin).

## [2025.0.0] - 2025-12-01

### Zmienione

- Przejście na wersjonowanie kalendarzowe `rok.zmiana.fix`; pierwsza wersja w tym schemacie: `2025.0.0` dla danych aktualnych na rok 2025.
- README: dodano sekcję opisującą zasady wersjonowania.

## [1.0.1] - 2025-06-23

### Zmienione

- README: uzupełnienia (m.in. źródła danych, licencje).
- `package.json`: porządki formatowania oraz adres repozytorium.

## [1.0.0] - 2025-06-16

### Dodane

- Pierwsze wydanie zbioru: `data/city.json`, `data/county.json`, `data/voivodeship.json`, metadane npm (`package.json`), podstawowy README.

