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
| [`scripts/paperless-suche.yaml`](scripts/paperless-suche.yaml) + [`config/paperless-rest-command.yaml`](config/paperless-rest-command.yaml) | Paperless-Suche für das Dienst-Popup (Skript mit Rückgabe + `rest_command`) | – |
| [`themes/frame/frame.yaml`](themes/frame/frame.yaml) | Themes **Frame** (randlose Frame-Ansichten) und **Frame Haus** (ganzes HA) | – |
| [`www/frame/frame.js`](www/frame/frame.js) | Hilfsfunktionen für die Start-Karten (Formatierung, Zustände, Service-Aufrufe) | – |
| [`www/frame/frame-layout.js`](www/frame/frame-layout.js) | Erweiterung für layout-card: `height`, `padding`, `margin` und eigene CSS-Variablen auch in `mediaquery` | – |
| [`www/frame/frame-popup.js`](www/frame/frame-popup.js) | Popup der Dienst-Kacheln (Verlauf, Info, Link zur Weboberfläche), wird von `frame.js` bei Bedarf nachgeladen | – |

## Dynamik auf der Startseite

Zwei Karten auf **Start** sind neu gegenüber ha-frame-starter und zeigen nicht feste Kacheln, sondern das, was gerade wichtig ist.

### „Jetzt“ (`frame_now`)

Eine Karte, die sich nach der Lage im Haus füllt – und leer bleibt, wenn nichts los ist („**Alles ruhig.** Nichts läuft, nichts steht offen.“). Die Einträge erscheinen in dieser Reihenfolge, höchstens `max` (Standard 5), der Rest als „+ N weitere“:

1. **Warnungen:** offene Fenster und Türen mit Dauer („seit 25 Min.“), Garagen- und Carport-Tor offen oder in Fahrt, Störung eines Haushaltsgeräts, Raumfühler eines Thermostats offline.
2. **Geräte:** Waschmaschine, Trockner, Geschirrspüler laufen mit Restzeit und voraussichtlichem Ende („noch 42 Min. · fertig ca. 14:35“), danach „ist fertig · ausräumen“.
3. **Musik:** was gerade spielt (oder seit weniger als 30 Minuten pausiert ist), mit Cover, Raum, Play/Pause und Weiter.
4. **Hinweise:** Müllabfuhr heute oder morgen („heute Abend rausstellen“), Hausakku unter 10 %, schwache Gerätebatterien unter 15 % (Handys, Tablets und Uhren ausgenommen).

Darunter steht immer die **Hauslage** – vier Kacheln, die sich selbst zusammensuchen, und per Tippen in die passende Ansicht springen:

| Kachel | Zeigt | Findet die Entitäten über |
|---|---|---|
| Heizung | „2 Räume heizen“ bzw. „Heizung ruht“, dazu der kälteste Raum unter Soll („Bad 19,2° → 21,0°“) | alle `climate.vtherm_*` |
| Licht | Anzahl eingeschalteter Lichter und die ersten zwei Namen | alle `light.*` (ohne Lichtgruppen) |
| Rollläden | „Alle offen“, „Alle zu“, „3 offen · 2 Spalt“ oder „Rollläden fahren“ | alle `cover.*_langsam` |
| Strom | Verbrauch im Haus und Sonne | `sensor.hausverbrauch`, `sensor.wechselrichter_wirkleistung` |

Ganz unten: der nächste Termin mit Person und der nächste Abholtag.

Einstellbar über die `variables` der Karte: `contacts` (Fenster/Türen), `gates` (Tore), `appliances` (Gerät mit Zustands- und Restzeit-Sensor), `media` (Player mit Raumname), `waste` (Abfall-Sensoren, Datum im Zustand als `TT.MM.JJJJ`), `battery` (Hausakku), `max`. Die Muster der Hauslage stehen direkt im Template – wer andere Namen nutzt, passt dort `climate.vtherm_`, `_langsam` und die beiden Strom-Sensoren an.

### Licht (`frame_lights`)

Statt einer festen Kachel pro Lampe ein Raster, das sich nach dem Zustand richtet:

- **Eingeschaltete Lichter stehen vorn**, danach ausgeschaltete bis zur Zahl `slots` (Standard 8). Sind mehr Lichter an, wächst das Raster mit.
- Lichter mit `auto: true` (Flur, Treppenhaus, außen – alles, was über Bewegung oder Zeitplan läuft) erscheinen **nur, solange sie an sind**.
- Der Hintergrund jeder Kachel füllt sich mit der **Helligkeit** („Wohnzimmer · 40 %“).
- **Tippen** schaltet sofort um, **Halten** (gut eine halbe Sekunde) öffnet die Detailansicht.
- Kopfzeile: „3 an · alle aus“ schaltet alles Eingeschaltete mit einem Tipp aus; ist alles aus, steht dort „alles aus · meist genutzt“.

```yaml
variables:
  slots: 8
  lights:
    - { e: light.wohnzimmer_komode, n: Komode, r: Wohnzimmer }
    - { e: light.flur_oben, n: Flur oben, r: Flur, auto: true }
```

## Weitere Besonderheiten

### iPad-Kiosk mit Menü-Knopf

Auf dem Wand-iPad soll nichts von Home Assistant zu sehen sein – trotzdem muss man an Einstellungen und andere Dashboards kommen.

- `kiosk_mode` blendet die Kopfzeile **nur auf dem iPad** aus (erkannt am User-Agent, auch iPadOS im Desktop-Modus). Handy und Rechner zeigen Home Assistant normal.
- Die Navigationsleiste (`frame_rail`) bekommt auf dem iPad oben einen **Menü-Knopf** (☰). Die HA-Seitenleiste wird dafür dauerhaft eingeklappt; ein Tipp auf „Menü“ öffnet sie als Overlay – darüber erreicht man Einstellungen, Karten, Energie und alle anderen Dashboards, ohne den Kiosk-Modus abzuschalten.
- Im Original sitzt unten in der Leiste eine kleine Uhr, die zu den Einstellungen führt; hier übernimmt das der Menü-Knopf.
- Optional: `variables.secondary` (Liste von View-Pfaden) verschiebt selten genutzte Ansichten hinter einen „Mehr“-Knopf (⋯) mit Aufklappmenü.

### Räume (`frame_room`)

Eine Karte pro Raum mit allem, was dort steuerbar ist:

- **Kopf:** Raumname und Ist-Temperatur.
- **Heizung:** je Thermostat Soll mit **− / +** in der Schrittweite des Thermostats; der neue Wert steht sofort da, auch wenn mehrmals schnell getippt wird. Zustand in Klartext: „heizt“, „Soll erreicht“, „zu kalt · Ventil zu“ (unter Soll, aber das Ventil heizt nicht) oder „Raumfühler offline“.
- **Licht:** ein Knopf pro Lampe und „N an · alle aus“.
- **Rollläden:** ↑ ■ ↓ je Rollladen mit Position als Füllung, bei mehreren zusätzlich „alle“ ↑ ↓.
- **Musik:** Lautstärke in 5-%-Schritten; schnelles Mehrfachtippen wird zusammengezählt.

`frame_room_heading` ist die passende Abschnittsüberschrift mit Kurzfassung („21,3° · Soll 21,0° · 48 % · heizt · 2 von 4 Lichtern an“).

### Energie (`frame_energy`)

Die Energie-Ansicht ist eine eigene Karte in vier Teilen (`variables.part`):

- **`now`** – Stromfluss jetzt: Sonne, Haus, Netz (Bezug oder Einspeisung) und Akku.
- **`today`** – der Tag in Zahlen: Verbrauch, Sonnenertrag, Eigenverbrauch, Autarkie, Netzbezug, Einspeisung, Akku.
- **`loads`** – „Wer gerade Strom braucht“: die Verbraucher aus der Liste, die gerade Leistung ziehen, dazu der Schalter „Warmwasser nachheizen“.
- **`devices`** – **Verbrauch nach Geräten**, stündlich für heute oder gestern (Umschalter). Die Karte liest die Energie-Einstellungen von Home Assistant (Netz, Solar, Akku, einzelne Geräte), rechnet daraus den Hausverbrauch je Stunde und zeigt, wie viel davon einem Gerät zugeordnet ist. Die Balken trennen **erfasst** und **nicht erfasst**; darunter die acht größten Verbraucher, „Nicht erfasst“ als eigene Zeile und ein Hinweis auf die größte Lücke („Meiste Lücke 18–19 Uhr: 0,8 kWh ohne Zuordnung“). Voraussetzung: ein eingerichtetes Energie-Dashboard mit Geräten.

### Dienst-Kacheln mit Popup (`frame_service`)

In der Server-Ansicht sind Proxmox, Frigate, AdGuard und Paperless keine einfachen Statuskacheln mehr. Antippen öffnet ein Popup im Frame-Stil, Halten weiterhin die normalen Details von Home Assistant.

- **Verlauf** (24 Std oder 7 Tage): ein Balken für die Erreichbarkeit mit Prozentwert („99,8 % erreichbar“), Ausfällen und Lücken ohne Daten, darunter Kurven für CPU und Arbeitsspeicher mit Durchschnitt und Spitze. Antippen oder Überfahren einer Kurve zeigt Uhrzeit und Wert.
- **Info**: Laufzeit, Speicher als „x von y GiB“ mit Füllbalken (rot ab einer Warnschwelle), letztes Backup, Versionen bzw. verfügbare Updates.
- **Zur Weboberfläche**: ein Knopf öffnet die Seite des Dienstes in einem neuen Tab.

Die Kurven kommen aus der Langzeitstatistik (5-Minuten- bzw. Stundenwerte), ohne Statistik aus der Historie. Welche Werte erscheinen, steht in der Karte:

```yaml
type: custom:button-card
template: frame_service
entity: binary_sensor.server_frigate        # Status: on/running/online = erreichbar
variables:
  name: Frigate
  icon: mdi:cctv
  url: http://frigate.local:5000
  link: Frigate öffnen
  charts:
    - { label: CPU, entity: sensor.frigate_cpu_auslastung }
  info:
    - { label: Läuft, entity: sensor.frigate_betriebszeit }
    - { label: Aufnahmen, entity: sensor.nas_aufnahmen_belegt, of: sensor.nas_aufnahmen_gesamt, warn_above: 90 }
    - { label: Frigate, entity: update.frigate_server }
```

#### Paperless-Suche im Popup

Die Paperless-Kachel hat zusätzlich ein **Suchfeld**: Treffer aus der Volltextsuche mit Titel, Korrespondent, Dokumenttyp, Datum und der gefundenen Textstelle, ohne Suchbegriff die zuletzt hinzugefügten Dokumente. Antippen öffnet das Dokument in Paperless. Die Abfrage läuft über ein Home-Assistant-Skript mit Rückgabewert – das API-Token bleibt in `secrets.yaml` und steht nie im Dashboard.

1. In Paperless unter *Mein Profil* ein API-Token erzeugen und in `/config/secrets.yaml` eintragen: `paperless_auth: "Token <token>"`.
2. Den Inhalt von [`config/paperless-rest-command.yaml`](config/paperless-rest-command.yaml) in `configuration.yaml` übernehmen (Adresse anpassen) und Home Assistant neu starten – `rest_command` lässt sich nicht neu laden.
3. [`scripts/paperless-suche.yaml`](scripts/paperless-suche.yaml) im Skript-Editor (YAML-Modus) als `script.paperless_suche` anlegen.
4. In der Kachel `variables.search` setzen:

```yaml
search:
  script: script.paperless_suche
  doc_url: http://paperless.local:8000/documents/{id}/details
  placeholder: In Paperless suchen …
```

Optional liefert die offizielle Integration [Paperless-ngx](https://www.home-assistant.io/integrations/paperless_ngx/) Zahlen wie „im Posteingang“ für die Info-Spalte. Das Dokument selbst öffnet sich nur dort, wo Paperless erreichbar ist (zu Hause oder per VPN).

`frame-popup.js` muss nicht als Ressource eingetragen werden – `frame.js` lädt es beim ersten Anzeigen einer Dienst-Kachel aus demselben Ordner.

### Kleine Bausteine

- `frame_gate` – Garagen- oder Carport-Tor: „Zu · antippen öffnet“, „Offen · seit 12 Min.“, „öffnet …“. Tippen fährt das Tor **mit Sicherheitsabfrage** („Wirklich öffnen: Garage?“), Halten öffnet die Details.
- `frame_tile` – allgemeine Statuskachel (Server-Dienste, Sicherheit, Garten). Erkennt „aktiv“ selbst an Zuständen wie `on`, `open`, `heating`, `playing`, `home`, `detected`; nicht verfügbare Entitäten werden blass.

### Ansichten und Layout

- **Sieben Ansichten** statt der drei im Starter: Start, Räume, Energie, Server (Host, Dienste, TeamSpeak), Garten (Bewässerung, Spots, Wetter), Rollläden, Sicherheit.
- **`frame-layout.js`** erweitert layout-card, damit in `mediaquery` auch `height`, `padding`, `margin` und eigene `--Variablen` greifen. So bleibt das iPad-Layout bildschirmfüllend, und unter 768 px wird daraus eine scrollende Spalte.
- Alle Texte, Datums- und Zahlenformate auf **Deutsch**.

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

## Direkt im Browser aufrufen

Jede Ansicht hat einen eigenen Pfad und lässt sich direkt öffnen, als Lesezeichen speichern oder auf dem iPad als Home-Bildschirm-App ablegen (Safari → Teilen → „Zum Home-Bildschirm“). `<ha>` steht für die eigene Adresse, z. B. `homeassistant.local:8123`.

| Dashboard | Ansichten |
|---|---|
| Start | `http://<ha>/dashboard-start/start` · `/raeume` · `/energie` · `/server` · `/garten` · `/rolllaeden` · `/sicherheit` |
| Übersicht (Handy) | `http://<ha>/dashboard-uebersicht/start` · gleiche sieben Ansichten |
| Klima & Heizung | `http://<ha>/klima-heizung/anlage` · `/raeume` · `/raumklima` · `/warmwasser` · `/technik` |
| Einkauf | `http://<ha>/einkauf-liste/start` · `/kuehlschrank` · `/vorrat` · `/tiefkuehler` · `/kueche` · `/drogerie` |

- Mit `?disable_km` am Ende (z. B. `…/dashboard-start/start?disable_km`) zeigt kiosk-mode auch auf dem iPad wieder die Kopfzeile – praktisch zum Bearbeiten.
- Die Weboberflächen von Proxmox, Frigate, AdGuard und Paperless erreichst du über die Dienst-Kacheln der Server-Ansicht (siehe [Dienst-Kacheln mit Popup](#dienst-kacheln-mit-popup-frame_service)). Die Adressen dort (`proxmox.local`, `frigate.local`, `adguard.local`, `paperless.local`) sind Platzhalter.

## Hinweise

- Ohne `frame-layout.js` fällt das Handy-Layout auf das iPad-Layout zurück (layout-card übernimmt in `mediaquery` sonst nur `grid-*`).
- Nach Änderungen an den JS-Dateien die `?v=` in der Ressourcen-URL hochzählen, sonst cachen iPad und Handy die alte Version. `frame-popup.js` übernimmt die Version von `frame.js` – nach Änderungen daran also die `?v=` von `frame.js` hochzählen.
- Personen und Kalender sind in `dashboards/start.yaml` oben unter `variables` (`people`, `calendars`, `categories`) zentral definiert – dort Namen, Farben und Entitäten eintragen.
- Die Klima-Ansichten erwarten [Versatile Thermostat](https://github.com/jmcollin78/versatile_thermostat) (`climate.vtherm_*`); die Start-Karte sucht Thermostate über dieses Präfix.

## Herkunft & Credits

Das Frame-Design, die Runtime und die Kartenvorlagen stammen von **Chris Jahn** aus [slcr/ha-frame-starter](https://github.com/slcr/ha-frame-starter) (MIT) – ein großes Danke dafür. Was hier von dort kommt und was neu ist:

| Datei | Herkunft |
|---|---|
| `www/frame/frame.js` | **Original von Chris Jahn** – die Frame-Runtime aus ha-frame-starter, Stand [`1becc23`](https://github.com/slcr/ha-frame-starter/commit/1becc23) vom 17.10.2026, gekürzt auf die hier genutzten Helfer. Keine eigenen Änderungen am Code. Neuere Versionen gibt es im Original-Repo. |
| `themes/frame/frame.yaml` | Theme **Frame** aus ha-frame-starter; **Frame Haus** (für das ganze HA) ist neu darauf aufgebaut. |
| `dashboards/start.yaml` | **Aus ha-frame-starter übernommen und angepasst** (13 von 23 Kartenvorlagen): `frame`, `frame_clock`, `frame_weather`, `frame_people`, `frame_next`, `frame_agenda`, `frame_scene`, `frame_light`, `frame_cover`, `frame_lock`, `frame_openings`, `frame_rooms`, `frame_heading`.<br>**Gleicher Name, weitgehend neu geschrieben:** `frame_rail` (iPad-Menü-Knopf, „Mehr“-Menü, siehe [Weitere Besonderheiten](#weitere-besonderheiten)) und `frame_stats`.<br>**Komplett neu:** `frame_now` und `frame_lights` (siehe [Dynamik auf der Startseite](#dynamik-auf-der-startseite)), `frame_energy` (eigene Energie-Ansicht, teilt mit dem Original nur den Namen), `frame_room`, `frame_room_heading`, `frame_tile`, `frame_gate`, `frame_service` – dazu alle Ansichten, Karten und deutschen Texte. |
| `www/frame/frame-layout.js` | Neu (Erweiterung für layout-card). |
| `www/frame/frame-popup.js` | Neu (Popup für `frame_service`). |
| `dashboards/uebersicht.yaml`, `klima-heizung.yaml`, `einkauf-liste.yaml`, `scripts/szenen.yaml` | Neu, im Frame-Look gestaltet. |

Wer Frame von Grund auf aufsetzen will, nimmt am besten direkt [ha-frame-starter](https://github.com/slcr/ha-frame-starter) – dort gibt es Setup-Seite, YAML-Generator, Installationsskript und viele optionale Module (Wetterfenster, Kalender, Energie, Timer …).

## Lizenz

MIT – siehe [`LICENSE`](LICENSE), mit beiden Urheberhinweisen.

## Entstehung

Dashboards, Skripte und diese Veröffentlichung sind zusammen mit [Claude](https://claude.ai) (Anthropic) entstanden – Claude ist in den Commits als Co-Autor eingetragen.
