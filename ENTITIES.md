# Verwendete Entitäten

Alle Entity-IDs in diesem Repo sind **Platzhalter**. Sie folgen dem Schema `domain.raum_funktion` und müssen an die eigenen IDs angepasst werden – am einfachsten per Suchen & Ersetzen in den Dashboard-Dateien, bevor sie im Raw-Editor eingefügt werden.

Insgesamt 406 Entitäten. Spalte „Dashboards“: wo die Entität vorkommt (start, uebersicht, klima-heizung, einkauf-liste, szenen).

## `person` (2)

| Entität | Dashboards |
|---|---|
| `person.person_1` | start, uebersicht |
| `person.person_2` | start, uebersicht |

## `calendar` (6)

| Entität | Dashboards |
|---|---|
| `calendar.abfallkalender` | start |
| `calendar.familie` | start |
| `calendar.kind_1` | start |
| `calendar.kind_2` | start |
| `calendar.person_1` | start |
| `calendar.person_2` | start |

## `light` (33)

| Entität | Dashboards |
|---|---|
| `light.aussenbeleuchtung_eingang` | start, uebersicht |
| `light.carport_haengelampe` | start, uebersicht |
| `light.deckenlampe_bad` | start, uebersicht |
| `light.deckenlampe_buro` | start, uebersicht |
| `light.deckenlampe_kinderzimmer` | start, uebersicht |
| `light.deckenlampe_schlafzimmer` | start, uebersicht |
| `light.deckenlampe_vorraum` | start, uebersicht |
| `light.deckenlampe_wohnzimmer` | start, uebersicht |
| `light.eingang_garten` | start, uebersicht |
| `light.eingangsbereich_1` | start, uebersicht |
| `light.flur_oben` | start, uebersicht |
| `light.flur_unten` | start, uebersicht |
| `light.garten_spot_baum_1` | start, uebersicht |
| `light.garten_spot_baum_2` | start, uebersicht |
| `light.garten_spot_beet_1` | start, uebersicht |
| `light.garten_spot_beet_2` | start, uebersicht |
| `light.garten_spot_beet_3` | start, uebersicht |
| `light.haustur_1` | start, uebersicht |
| `light.haustur_2` | start, uebersicht |
| `light.lampe_schrank` | start, uebersicht |
| `light.nachtlicht_schlafzimmer` | start, szenen, uebersicht |
| `light.nachttisch_1` | start, uebersicht |
| `light.nachttisch_2` | start, uebersicht |
| `light.schiebeturenschrank` | start, uebersicht |
| `light.stehlampe_buro` | start, szenen, uebersicht |
| `light.stehlampe_wohnzimmer` | start, szenen, uebersicht |
| `light.terassen_string` | start, uebersicht |
| `light.treppenhaus_oben` | start, uebersicht |
| `light.treppenhaus_unten` | start, uebersicht |
| `light.treppenhaus_wandlampe` | start, szenen, uebersicht |
| `light.wandlampe_terrasse` | start, uebersicht |
| `light.werkstatt_haengelampe` | start, uebersicht |
| `light.wohnzimmer_komode` | start, szenen, uebersicht |

## `switch` (16)

| Entität | Dashboards |
|---|---|
| `switch.computer` | uebersicht |
| `switch.drucker_3d_1` | uebersicht |
| `switch.dunstabzug` | uebersicht |
| `switch.gartenpumpe` | start, uebersicht |
| `switch.geschirrspuler` | uebersicht |
| `switch.heisswasserbereiter` | uebersicht |
| `switch.kaffeemaschine` | uebersicht |
| `switch.kuhlschrank_kuche` | uebersicht |
| `switch.luftreiniger_schlafzimmer` | uebersicht |
| `switch.server_router_nas` | start, uebersicht |
| `switch.stehlampe_flur_2` | start, szenen |
| `switch.trockner` | uebersicht |
| `switch.tv_konsole` | uebersicht |
| `switch.warmwasser_nachheizen` | klima-heizung, start, uebersicht |
| `switch.waschmaschine` | uebersicht |
| `switch.wasserkocher` | uebersicht |

## `cover` (20)

| Entität | Dashboards |
|---|---|
| `cover.badezimmer_langsam` | start, uebersicht |
| `cover.carport_tor` | start, uebersicht |
| `cover.dachfenster_bad_langsam` | start, uebersicht |
| `cover.garagentor` | start, uebersicht |
| `cover.kinderzimmer_links_langsam` | start, uebersicht |
| `cover.kinderzimmer_rechts_langsam` | start, uebersicht |
| `cover.rollladen_alle` | start, uebersicht |
| `cover.rollladen_eg` | start, uebersicht |
| `cover.rollladen_og` | start, uebersicht |
| `cover.schlafzimmer_gaube_links_langsam` | start, uebersicht |
| `cover.schlafzimmer_gaube_rechts_langsam` | start, uebersicht |
| `cover.schlafzimmer_rechts_langsam` | start, uebersicht |
| `cover.spielzimmer_links_langsam` | start, szenen, uebersicht |
| `cover.spielzimmer_rechts_langsam` | start, szenen, uebersicht |
| `cover.terrassentur_langsam` | start, szenen, uebersicht |
| `cover.treppenhaus_links_langsam` | start, uebersicht |
| `cover.treppenhaus_mitte_langsam` | start, uebersicht |
| `cover.treppenhaus_rechts_langsam` | start, uebersicht |
| `cover.wohnzimmer_links_langsam` | start, szenen, uebersicht |
| `cover.wohnzimmer_rechts_langsam` | start, szenen, uebersicht |

## `climate` (18)

| Entität | Dashboards |
|---|---|
| `climate.kuche_gesamt` | klima-heizung |
| `climate.treppenhaus_gesamt` | klima-heizung |
| `climate.vtherm_` | start |
| `climate.vtherm_ankleidezimmer` | klima-heizung, start |
| `climate.vtherm_badezimmer` | klima-heizung, start, uebersicht |
| `climate.vtherm_buro` | klima-heizung, start, uebersicht |
| `climate.vtherm_buro_1` | klima-heizung, start |
| `climate.vtherm_buro_2` | klima-heizung, start |
| `climate.vtherm_eingang` | klima-heizung, start, uebersicht |
| `climate.vtherm_gaste_wc` | klima-heizung, start |
| `climate.vtherm_kinderzimmer` | klima-heizung, start, uebersicht |
| `climate.vtherm_kuche` | klima-heizung, start, uebersicht |
| `climate.vtherm_schlafzimmer` | klima-heizung, start, uebersicht |
| `climate.vtherm_treppenhaus` | klima-heizung, start, uebersicht |
| `climate.vtherm_vorraum` | klima-heizung, start |
| `climate.vtherm_waschkuche` | klima-heizung, start, uebersicht |
| `climate.vtherm_wohnzimmer` | klima-heizung, start, uebersicht |
| `climate.wohnzimmer_gesamt` | klima-heizung |

## `sensor` (175)

| Entität | Dashboards |
|---|---|
| `sensor.a01_pumpe_zirkulation` | klima-heizung |
| `sensor.a02_pumpe_warmwasser` | klima-heizung |
| `sensor.a03_pumpe_hk1` | klima-heizung |
| `sensor.ankleidezimmer_absolute_feuchte` | klima-heizung |
| `sensor.ankleidezimmer_humidity` | klima-heizung |
| `sensor.ankleidezimmer_temperature` | klima-heizung |
| `sensor.aussen_humidity` | klima-heizung, start, uebersicht |
| `sensor.aussen_temperature` | klima-heizung, start, uebersicht |
| `sensor.aussentemperatur` | klima-heizung |
| `sensor.badezimmer_absolute_feuchte` | klima-heizung |
| `sensor.badezimmer_battery_level` | uebersicht |
| `sensor.badezimmer_humidity` | klima-heizung |
| `sensor.badezimmer_luminance` | uebersicht |
| `sensor.badezimmer_temperature` | klima-heizung |
| `sensor.batterien_batterieladung` | start, uebersicht |
| `sensor.batterien_kritisch` | uebersicht |
| `sensor.batterien_lade_entladeleistung` | start, uebersicht |
| `sensor.batterien_status` | uebersicht |
| `sensor.batterien_tagesentladung` | start, uebersicht |
| `sensor.batterien_tagesladung` | start, uebersicht |
| `sensor.beleuchtung_gesamt_leistung` | start |
| `sensor.buro_2_absolute_feuchte` | klima-heizung |
| `sensor.buro_2_humidity` | klima-heizung |
| `sensor.buro_2_temperature` | klima-heizung |
| `sensor.buro_absolute_feuchte` | klima-heizung |
| `sensor.buro_humidity` | klima-heizung |
| `sensor.buro_temperature` | klima-heizung, uebersicht |
| `sensor.computer_power` | start |
| `sensor.digin_stoerungen` | klima-heizung |
| `sensor.drucker_3d_1_leistung` | start |
| `sensor.dunstabzug_derzeitiger_verbrauch` | start |
| `sensor.eingang_absolute_feuchte` | klima-heizung |
| `sensor.eingang_humidity` | klima-heizung |
| `sensor.eingang_temperature` | klima-heizung |
| `sensor.elektroraum_absolute_feuchte` | klima-heizung |
| `sensor.elektroraum_humidity` | klima-heizung |
| `sensor.elektroraum_temperature` | klima-heizung |
| `sensor.energy_production_today` | start |
| `sensor.energy_production_tomorrow` | start |
| `sensor.gartenpumpe_leistung` | start |
| `sensor.gaste_wc_absolute_feuchte` | klima-heizung |
| `sensor.gaste_wc_humidity` | klima-heizung |
| `sensor.gaste_wc_temperature` | klima-heizung |
| `sensor.geschirrspuler_derzeitiger_verbrauch` | start |
| `sensor.geschirrspuler_programm` | uebersicht |
| `sensor.geschirrspuler_verbleibende_zeit` | start, uebersicht |
| `sensor.geschirrspuler_zustand` | start, uebersicht |
| `sensor.hausverbrauch` | start |
| `sensor.heisswasserbereiter_leistung` | start |
| `sensor.heizstab_energie_riemann` | klima-heizung |
| `sensor.heizstab_leistung` | klima-heizung, start |
| `sensor.heizungspuffertemperatur_oben` | klima-heizung |
| `sensor.heizungspuffertemperatur_unten` | klima-heizung |
| `sensor.heizungsraum_absolute_feuchte` | klima-heizung |
| `sensor.heizungsraum_humidity` | klima-heizung |
| `sensor.heizungsraum_temperature` | klima-heizung |
| `sensor.hkr1_absenktemperatur_nacht` | klima-heizung |
| `sensor.hkr1_betriebsart` | klima-heizung |
| `sensor.hkr1_solltemperatur_tag` | klima-heizung |
| `sensor.host_arbeitsspeicher_auslastung` | start, uebersicht |
| `sensor.host_cpu_auslastung` | start, uebersicht |
| `sensor.host_status` | start, uebersicht |
| `sensor.kaffeemaschine_power` | start |
| `sensor.kaltwassertemperatur` | klima-heizung |
| `sensor.keller_absolute_feuchte` | klima-heizung |
| `sensor.keller_humidity` | klima-heizung |
| `sensor.keller_temperature` | klima-heizung |
| `sensor.keller_wand_absolute_feuchte` | klima-heizung |
| `sensor.keller_wand_humidity` | klima-heizung |
| `sensor.keller_wand_temperature` | klima-heizung |
| `sensor.kinderzimmer_absolute_feuchte` | klima-heizung |
| `sensor.kinderzimmer_humidity` | klima-heizung |
| `sensor.kinderzimmer_links_battery_level` | uebersicht |
| `sensor.kinderzimmer_links_luminance` | uebersicht |
| `sensor.kinderzimmer_rechts_battery_level` | uebersicht |
| `sensor.kinderzimmer_rechts_luminance` | uebersicht |
| `sensor.kinderzimmer_temperature` | klima-heizung, uebersicht |
| `sensor.kuche_absolute_feuchte` | klima-heizung |
| `sensor.kuche_humidity` | klima-heizung |
| `sensor.kuche_temperature` | klima-heizung, uebersicht |
| `sensor.kuhlschrank_kuche_derzeitiger_verbrauch` | start |
| `sensor.kuhlschrank_vorraum_derzeitiger_verbrauch` | start |
| `sensor.ladegerate_werkstatt_power` | start |
| `sensor.luftentfeuchter_power` | start |
| `sensor.luftentfeuchter_wasche_leistung` | start |
| `sensor.luftreiniger_leistung` | start |
| `sensor.luftreiniger_schlafzimmer_derzeitiger_verbrauch` | start |
| `sensor.mold_indicator` | klima-heizung |
| `sensor.power_production_now` | start |
| `sensor.saugroboter_leistung` | start |
| `sensor.schlafzimmer_absolute_feuchte` | klima-heizung |
| `sensor.schlafzimmer_gaube_links_battery_level` | uebersicht |
| `sensor.schlafzimmer_gaube_links_luminance` | uebersicht |
| `sensor.schlafzimmer_gaube_rechts_battery_level` | uebersicht |
| `sensor.schlafzimmer_gaube_rechts_luminance` | uebersicht |
| `sensor.schlafzimmer_humidity` | klima-heizung, uebersicht |
| `sensor.schlafzimmer_rechts_battery_level` | uebersicht |
| `sensor.schlafzimmer_rechts_luminance` | uebersicht |
| `sensor.schlafzimmer_temperature` | klima-heizung, uebersicht |
| `sensor.server_router_nas_power` | start |
| `sensor.speicherreferenztemperatur` | klima-heizung |
| `sensor.spielzimmer_link_battery_level` | uebersicht |
| `sensor.spielzimmer_link_spielzimmer_links_luminance` | uebersicht |
| `sensor.spielzimmer_rech_battery_level` | uebersicht |
| `sensor.spielzimmer_rech_spielzimmer_rechts_luminance` | uebersicht |
| `sensor.steckdose_sprachassistent_leistung` | start |
| `sensor.stromzahler_exportierte_energie` | start, uebersicht |
| `sensor.stromzahler_phase_a_wirkleistung` | uebersicht |
| `sensor.stromzahler_phase_b_wirkleistung` | uebersicht |
| `sensor.stromzahler_phase_c_wirkleistung` | uebersicht |
| `sensor.stromzahler_verbrauch` | start, uebersicht |
| `sensor.stromzahler_wirkleistung` | start, uebersicht |
| `sensor.teamspeak_arbeitsspeicher_auslastung` | start, uebersicht |
| `sensor.teamspeak_arbeitsspeicher_auslastung_2` | start, uebersicht |
| `sensor.teamspeak_betriebszeit` | start, uebersicht |
| `sensor.teamspeak_cpu_auslastung` | start, uebersicht |
| `sensor.teamspeak_massenspeicher_auslastung` | start, uebersicht |
| `sensor.teamspeak_netzwerk_ausgang` | start, uebersicht |
| `sensor.teamspeak_netzwerk_eingang` | start, uebersicht |
| `sensor.teamspeak_nutzer_online` | start, uebersicht |
| `sensor.teamspeak_status` | start, uebersicht |
| `sensor.terrassentur_battery_level` | uebersicht |
| `sensor.terrassentur_terrassentur_luminance` | uebersicht |
| `sensor.treppenhaus_absolute_feuchte` | klima-heizung |
| `sensor.treppenhaus_humidity` | klima-heizung |
| `sensor.treppenhaus_links_battery_level` | uebersicht |
| `sensor.treppenhaus_links_luminance` | uebersicht |
| `sensor.treppenhaus_mitte_battery_level` | uebersicht |
| `sensor.treppenhaus_mitte_luminance` | uebersicht |
| `sensor.treppenhaus_rechts_battery_level` | uebersicht |
| `sensor.treppenhaus_rechts_luminance` | uebersicht |
| `sensor.treppenhaus_temperature` | klima-heizung |
| `sensor.trockner_power` | start |
| `sensor.trockner_programm` | uebersicht |
| `sensor.trockner_verbleibende_zeit` | start, uebersicht |
| `sensor.trockner_zustand` | start, uebersicht |
| `sensor.tv_konsole_leistung` | start |
| `sensor.versionnbg` | klima-heizung |
| `sensor.versionsc2` | klima-heizung |
| `sensor.vorlauftemperatur` | klima-heizung |
| `sensor.vorraum_absolute_feuchte` | klima-heizung |
| `sensor.vorraum_humidity` | klima-heizung |
| `sensor.vorraum_temperature` | klima-heizung |
| `sensor.warmepumpenleistung` | klima-heizung |
| `sensor.warmepumpenverbauch` | uebersicht |
| `sensor.warmwasserpuffer` | klima-heizung |
| `sensor.warmwassertemperatur` | klima-heizung |
| `sensor.waschmaschine_power` | start |
| `sensor.waschmaschine_programm` | uebersicht |
| `sensor.waschmaschine_verbleibende_zeit` | start, uebersicht |
| `sensor.waschmaschine_zustand` | start, uebersicht |
| `sensor.wasserkocher_leistung` | start |
| `sensor.waste_collection_schedule_biotonne` | start, uebersicht |
| `sensor.waste_collection_schedule_papiertonne` | start, uebersicht |
| `sensor.waste_collection_schedule_restmulltonne` | start, uebersicht |
| `sensor.waste_collection_schedule_wertstofftonne` | start, uebersicht |
| `sensor.wechselrichter_eingangsleistung` | start, uebersicht |
| `sensor.wechselrichter_geratestatus` | uebersicht |
| `sensor.wechselrichter_gesamtenergieertrag` | uebersicht |
| `sensor.wechselrichter_tagesertrag` | start, uebersicht |
| `sensor.wechselrichter_wirkleistung` | start, uebersicht |
| `sensor.wohnzimmer_absolute_feuchte` | klima-heizung |
| `sensor.wohnzimmer_humidity` | klima-heizung |
| `sensor.wohnzimmer_links_battery_level` | uebersicht |
| `sensor.wohnzimmer_links_wohnzimmer_links_luminance` | uebersicht |
| `sensor.wohnzimmer_recht_battery_level` | uebersicht |
| `sensor.wohnzimmer_recht_wohnzimmer_rechts_luminance` | uebersicht |
| `sensor.wohnzimmer_temperature` | klima-heizung, uebersicht |
| `sensor.wp_cop_aktuell` | klima-heizung |
| `sensor.wp_leistungsaufnahme` | klima-heizung, start |
| `sensor.wp_stromverbrauch` | klima-heizung |
| `sensor.ww_solltemperatur` | klima-heizung |
| `sensor.zapfanlage_leistung` | start |
| `sensor.zirkulation_betriebsart` | klima-heizung |
| `sensor.zirkulationsdurchfluss` | klima-heizung |

## `binary_sensor` (26)

| Entität | Dashboards |
|---|---|
| `binary_sensor.eingang_motion` | start, uebersicht |
| `binary_sensor.eingang_person_occupancy` | start, uebersicht |
| `binary_sensor.essbereich_motion` | start, uebersicht |
| `binary_sensor.fenster_kontakt_1` | start, uebersicht |
| `binary_sensor.fenster_kontakt_2` | start, uebersicht |
| `binary_sensor.garage_motion` | start, uebersicht |
| `binary_sensor.garten_motion` | start, uebersicht |
| `binary_sensor.kontakt_briefkasten_contact` | start, uebersicht |
| `binary_sensor.kontakt_fenster_spule_contact` | start, uebersicht |
| `binary_sensor.kontakt_haustur_contact` | start, uebersicht |
| `binary_sensor.kontakt_terrassentur_contact` | start, szenen, uebersicht |
| `binary_sensor.kontakt_werkstatt` | start, uebersicht |
| `binary_sensor.luften_sinnvoll_erdgeschoss` | klima-heizung |
| `binary_sensor.luften_sinnvoll_keller` | klima-heizung |
| `binary_sensor.luften_sinnvoll_obergeschoss` | klima-heizung |
| `binary_sensor.server_adguard` | start, uebersicht |
| `binary_sensor.server_bot` | start, uebersicht |
| `binary_sensor.server_homarr` | start, uebersicht |
| `binary_sensor.server_homeassistant` | start, uebersicht |
| `binary_sensor.server_n8n` | start, uebersicht |
| `binary_sensor.server_nginxproxymanager` | start, uebersicht |
| `binary_sensor.server_paperless_ngx` | start, uebersicht |
| `binary_sensor.server_pulse` | start, uebersicht |
| `binary_sensor.server_teamspeak` | start, uebersicht |
| `binary_sensor.server_uptimekuma` | start, uebersicht |
| `binary_sensor.terrasse_motion` | start, uebersicht |

## `media_player` (7)

| Entität | Dashboards |
|---|---|
| `media_player.apple_tv` | uebersicht |
| `media_player.bad` | start, szenen, uebersicht |
| `media_player.kuche` | start, szenen |
| `media_player.kuche_2` | uebersicht |
| `media_player.lautsprecher_mobil` | start |
| `media_player.treppenhaus` | start, szenen, uebersicht |
| `media_player.wohnzimmer` | start, szenen, uebersicht |

## `camera` (4)

| Entität | Dashboards |
|---|---|
| `camera.eingang` | start, uebersicht |
| `camera.garage` | start, uebersicht |
| `camera.garten` | start, uebersicht |
| `camera.terrasse` | start, uebersicht |

## `valve` (4)

| Entität | Dashboards |
|---|---|
| `valve.bewasserung_valve_1` | start, uebersicht |
| `valve.bewasserung_valve_2` | start, uebersicht |
| `valve.entnahmedose` | start, uebersicht |
| `valve.heckenbewasserung` | start, uebersicht |

## `script` (12)

| Entität | Dashboards |
|---|---|
| `script.bewasserung_start` | start, uebersicht |
| `script.bewasserung_stop` | start, uebersicht |
| `script.bewasserung_zone_1_start` | start, uebersicht |
| `script.bewasserung_zone_2_start` | start, uebersicht |
| `script.einkauf_artikel_umschalten` | einkauf-liste |
| `script.rolllaeden_abend` | start, uebersicht |
| `script.rolllaeden_morgen` | start, uebersicht |
| `script.rolllaeden_schlafraeume_nacht` | start, szenen, uebersicht |
| `script.szene_abend` | start |
| `script.szene_alles_aus` | start |
| `script.szene_gute_nacht` | start |
| `script.szene_guten_morgen` | start |

## `automation` (4)

| Entität | Dashboards |
|---|---|
| `automation.alarmo_alarm_ausgelost` | start, uebersicht |
| `automation.alarmo_armed_away_wenn_beide_weg` | start, uebersicht |
| `automation.alarmo_disarm_wenn_jemand_heimkommt` | start, uebersicht |
| `automation.alarmo_taster_schlafzimmer` | start, uebersicht |

## `input_boolean` (2)

| Entität | Dashboards |
|---|---|
| `input_boolean.ambientelicht_buro_heute_gelaufen` | szenen |
| `input_boolean.ambientelicht_heute_gelaufen` | szenen |

## `input_text` (6)

| Entität | Dashboards |
|---|---|
| `input_text.einkauf_freitext_drogerie` | einkauf-liste |
| `input_text.einkauf_freitext_kuche` | einkauf-liste |
| `input_text.einkauf_freitext_kuhlschrank` | einkauf-liste |
| `input_text.einkauf_freitext_tiefkuhler` | einkauf-liste |
| `input_text.einkauf_freitext_vorratsschrank` | einkauf-liste |
| `input_text.einkauf_liste_cache` | einkauf-liste |

## `counter` (64)

| Entität | Dashboards |
|---|---|
| `counter.einkauf_apfel` | einkauf-liste |
| `counter.einkauf_aufbackbrotchen` | einkauf-liste |
| `counter.einkauf_aufschnitt` | einkauf-liste |
| `counter.einkauf_avocado` | einkauf-liste |
| `counter.einkauf_bacon` | einkauf-liste |
| `counter.einkauf_bananen` | einkauf-liste |
| `counter.einkauf_beeren` | einkauf-liste |
| `counter.einkauf_beeren_tk` | einkauf-liste |
| `counter.einkauf_brechbohnen_dose` | einkauf-liste |
| `counter.einkauf_brot` | einkauf-liste |
| `counter.einkauf_brotchen` | einkauf-liste |
| `counter.einkauf_butter` | einkauf-liste |
| `counter.einkauf_cola` | einkauf-liste |
| `counter.einkauf_deo` | einkauf-liste |
| `counter.einkauf_duschgel` | einkauf-liste |
| `counter.einkauf_eier` | einkauf-liste |
| `counter.einkauf_eis` | einkauf-liste |
| `counter.einkauf_erbsen_dose` | einkauf-liste |
| `counter.einkauf_erbsen_tk` | einkauf-liste |
| `counter.einkauf_fischstabchen` | einkauf-liste |
| `counter.einkauf_fleischwurst` | einkauf-liste |
| `counter.einkauf_frischkase` | einkauf-liste |
| `counter.einkauf_gurke` | einkauf-liste |
| `counter.einkauf_hackfleisch` | einkauf-liste |
| `counter.einkauf_isodrink` | einkauf-liste |
| `counter.einkauf_joghurt` | einkauf-liste |
| `counter.einkauf_kartoffeln` | einkauf-liste |
| `counter.einkauf_kase` | einkauf-liste |
| `counter.einkauf_kidneybohnen_dose` | einkauf-liste |
| `counter.einkauf_kiste_wasser` | einkauf-liste |
| `counter.einkauf_klopapier` | einkauf-liste |
| `counter.einkauf_knoblauch` | einkauf-liste |
| `counter.einkauf_kuchenrolle` | einkauf-liste |
| `counter.einkauf_mais_dose` | einkauf-liste |
| `counter.einkauf_mehl` | einkauf-liste |
| `counter.einkauf_milch` | einkauf-liste |
| `counter.einkauf_mozzarella` | einkauf-liste |
| `counter.einkauf_mullbeutel` | einkauf-liste |
| `counter.einkauf_nudeln` | einkauf-liste |
| `counter.einkauf_orangen` | einkauf-liste |
| `counter.einkauf_passierte_tomaten` | einkauf-liste |
| `counter.einkauf_pizza` | einkauf-liste |
| `counter.einkauf_pommes` | einkauf-liste |
| `counter.einkauf_porree` | einkauf-liste |
| `counter.einkauf_quark` | einkauf-liste |
| `counter.einkauf_reibekase` | einkauf-liste |
| `counter.einkauf_reis` | einkauf-liste |
| `counter.einkauf_saft` | einkauf-liste |
| `counter.einkauf_sahne` | einkauf-liste |
| `counter.einkauf_salat` | einkauf-liste |
| `counter.einkauf_schinkenwurfel` | einkauf-liste |
| `counter.einkauf_shampoo` | einkauf-liste |
| `counter.einkauf_spulmaschinentabs` | einkauf-liste |
| `counter.einkauf_spulmittel` | einkauf-liste |
| `counter.einkauf_taschentucher` | einkauf-liste |
| `counter.einkauf_tk_gemuse` | einkauf-liste |
| `counter.einkauf_toast` | einkauf-liste |
| `counter.einkauf_tomaten` | einkauf-liste |
| `counter.einkauf_trauben` | einkauf-liste |
| `counter.einkauf_waschmittel` | einkauf-liste |
| `counter.einkauf_wraps` | einkauf-liste |
| `counter.einkauf_zahnpasta` | einkauf-liste |
| `counter.einkauf_zitronen` | einkauf-liste |
| `counter.einkauf_zwiebeln` | einkauf-liste |

## `todo` (1)

| Entität | Dashboards |
|---|---|
| `todo.einkaufsliste` | einkauf-liste |

## `button` (4)

| Entität | Dashboards |
|---|---|
| `button.teamspeak_neu_starten` | start, uebersicht |
| `button.teamspeak_snapshot_erstellen` | start, uebersicht |
| `button.teamspeak_starten` | start, uebersicht |
| `button.teamspeak_stoppen` | start, uebersicht |

## `weather` (1)

| Entität | Dashboards |
|---|---|
| `weather.forecast_home` | start, uebersicht |

## `sun` (1)

| Entität | Dashboards |
|---|---|
| `sun.sun` | start, szenen |
