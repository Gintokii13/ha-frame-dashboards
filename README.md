# Frame-Dashboards für Home Assistant

Vier Home-Assistant-Dashboards im **Frame-Design** („paper & ink“, nach [slcr/ha-frame-starter](https://github.com/slcr/ha-frame-starter)) – gebaut für ein Familienhaus mit iPad an der Wand (Kiosk) und Handy.

> **Alle Entity-IDs sind Platzhalter.** Sie folgen dem Schema `domain.raum_funktion` (z. B. `light.wohnzimmer_komode`, `person.person_1`, `calendar.kind_1`) und müssen auf die eigenen IDs umgestellt werden. Die vollständige Liste steht in [`ENTITIES.md`](ENTITIES.md).

## Inhalt

| Datei | Dashboard | Karten |
|---|---|---|
| [`dashboards/start.yaml`](dashboards/start.yaml) | **Start** – das eigentliche Frame-Dashboard: Jetzt-Karte (Uhr, Wetter, Anwesenheit, Termine), Hauslage (Heizung, Licht, Rollläden, Strom), Räume, Energie, Garten, Sicherheit, Server | button-card, layout-card |
| [`dashboards/uebersicht.yaml`](dashboards/uebersicht.yaml) | **Übersicht** – Räume, Energie, Rollläden, Garten, Sicherheit, Server | mushroom, button-card, mini-graph-card |
| [`dashboards/klima-heizung.yaml`](dashboards/klima-heizung.yaml) | **Klima & Heizung** – Thermostate (Versatile Thermostat), Feuchte, Wärmepumpe/Speicher | mushroom |
| [`dashboards/einkauf-liste.yaml`](dashboards/einkauf-liste.yaml) | **Einkauf** – Artikel-Knöpfe nach Ort (Kühlschrank, Vorrat, TK, Drogerie, Küche) mit Häufigkeitszählern | mushroom |
| [`scripts/szenen.yaml`](scripts/szenen.yaml) | Szenen-Skripte für die Knöpfe „Guten Morgen“, „Abend“, „Gute Nacht“, „Alles aus“ | – |
| [`themes/frame/frame.yaml`](themes/frame/frame.yaml) | Themes **Frame** (randlose Frame-Ansichten) und **Frame Haus** (ganzes HA) | – |
| [`www/frame/frame.js`](www/frame/frame.js) | Hilfsfunktionen für die Start-Karten (Formatierung, Zustände, Service-Aufrufe) | – |
| [`www/frame/frame-layout.js`](www/frame/frame-layout.js) | Erweiterung für layout-card: `height`, `padding`, `margin` und eigene CSS-Variablen auch in `mediaquery` | – |

## Voraussetzungen

Über HACS:
- [button-card](https://github.com/custom-cards/button-card)
- [lovelace-layout-card](https://github.com/thomasloven/lovelace-layout-card)
- [Mushroom](https://github.com/piitaya/lovelace-mushroom)
- [mini-graph-card](https://github.com/kalkih/mini-graph-card)
- [card-mod](https://github.com/thomasloven/lovelace-card-mod)
- [kiosk-mode](https://github.com/NemesisRE/kiosk-mode) (optional, für das Wand-iPad)

Dashboard-Ressourcen (Einstellungen → Dashboards → Ressourcen):

| URL | Typ |
|---|---|
| `https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Instrument+Serif:ital@0;1&display=swap` | Stylesheet |
| `/local/frame/frame.js?v=1` | JavaScript-Modul |
| `/local/frame/frame-layout.js?v=1` | JavaScript-Modul |

## Installation

1. `www/frame/` nach `/config/www/frame/` und `themes/frame/` nach `/config/themes/frame/` kopieren. In `configuration.yaml` müssen Themes eingebunden sein (`frontend: themes: !include_dir_merge_named themes`). Danach Themes neu laden.
2. Ressourcen wie oben anlegen.
3. **Entity-IDs anpassen**: In den Dashboard-Dateien die Platzhalter aus [`ENTITIES.md`](ENTITIES.md) durch die eigenen IDs ersetzen. Was es bei dir nicht gibt, löschen.
4. Dashboards anlegen (Einstellungen → Dashboards → Dashboard hinzufügen) mit den URL-Pfaden `dashboard-start`, `dashboard-uebersicht`, `klima-heizung` und `einkauf-liste` – die Navigation zwischen den Dashboards verweist auf diese Pfade. Dann jeweils im **Raw-Konfigurationseditor** den Inhalt der YAML-Datei einfügen.
5. Skripte aus `scripts/szenen.yaml` im Skript-Editor (YAML-Modus) anlegen.

Einige Karten verlinken auf weitere Dashboards (`/dashboard-kameras`, `/pflanzen-uebersicht`, `/system-gesundheit`), die nicht Teil dieses Repos sind – Links anpassen oder entfernen.

## Hinweise

- Ohne `frame-layout.js` fällt das Handy-Layout auf das iPad-Layout zurück (layout-card übernimmt in `mediaquery` sonst nur `grid-*`).
- Nach Änderungen an den JS-Dateien die `?v=` in der Ressourcen-URL hochzählen, sonst cachen iPad und Handy die alte Version.
- Personen und Kalender sind in `dashboards/start.yaml` oben unter `variables` (`people`, `calendars`, `categories`) zentral definiert – dort Namen, Farben und Entitäten eintragen.
- Die Klima-Ansichten erwarten [Versatile Thermostat](https://github.com/jmcollin78/versatile_thermostat) (`climate.vtherm_*`); die Start-Karte sucht Thermostate über dieses Präfix.

## Herkunft & Credits

Das Frame-Design, die Runtime und die Kartenvorlagen stammen von **Chris Jahn** aus [slcr/ha-frame-starter](https://github.com/slcr/ha-frame-starter) (MIT) – ein großes Danke dafür. Was hier von dort kommt und was neu ist:

| Datei | Herkunft |
|---|---|
| `www/frame/frame.js` | **Original von Chris Jahn** – die Frame-Runtime aus ha-frame-starter, Stand [`1becc23`](https://github.com/slcr/ha-frame-starter/commit/1becc23) vom 17.10.2026, gekürzt auf die hier genutzten Helfer. Keine eigenen Änderungen am Code. Neuere Versionen gibt es im Original-Repo. |
| `themes/frame/frame.yaml` | Theme **Frame** aus ha-frame-starter; **Frame Haus** (für das ganze HA) ist neu darauf aufgebaut. |
| `dashboards/start.yaml` | 16 der 23 Kartenvorlagen (`button_card_templates`) stammen aus ha-frame-starter und sind angepasst: `frame`, `frame_rail`, `frame_clock`, `frame_weather`, `frame_people`, `frame_next`, `frame_agenda`, `frame_scene`, `frame_light`, `frame_cover`, `frame_lock`, `frame_openings`, `frame_rooms`, `frame_stats`, `frame_heading`, `frame_energy`. Neu sind `frame_now`, `frame_tile`, `frame_gate`, `frame_news`, `frame_room`, `frame_room_heading`, `frame_lights` sowie Ansichten, Karten und deutsche Texte. |
| `www/frame/frame-layout.js` | Neu (Erweiterung für layout-card). |
| `dashboards/uebersicht.yaml`, `klima-heizung.yaml`, `einkauf-liste.yaml`, `scripts/szenen.yaml` | Neu, im Frame-Look gestaltet. |

Wer Frame von Grund auf aufsetzen will, nimmt am besten direkt [ha-frame-starter](https://github.com/slcr/ha-frame-starter) – dort gibt es Setup-Seite, YAML-Generator, Installationsskript und viele optionale Module (Wetterfenster, Kalender, Energie, Timer …).

## Lizenz

MIT – siehe [`LICENSE`](LICENSE), mit beiden Urheberhinweisen.

## Entstehung

Dashboards, Skripte und diese Veröffentlichung sind zusammen mit [Claude](https://claude.ai) (Anthropic) entstanden – Claude ist in den Commits als Co-Autor eingetragen.
