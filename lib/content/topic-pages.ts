// Content for Fitness and Gesundheit sub-pages — all rendered via TopicPageTemplate.
// Original German prose, on-brand, substantielle Body-Sektionen pro Page.

export interface TopicPage {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: { title: string; body: string }[];
  body?: string[]; // zusätzliche Absätze unter den Highlights, eigenständige Prosa
  cta?: { label: string; href: string };
}

export const TOPIC_PAGES: Record<string, TopicPage> = {
  // ===== Fitness =====
  "fitness/trainingsflaeche": {
    eyebrow: "Trainingsfläche",
    title: "2 000 m² Glas, Licht und Aussicht.",
    intro:
      "Unsere Trainingsfläche ist komplett verglast und blickt direkt ins Oberbergische — trainieren wie draußen, nur mit dem Komfort eines top ausgestatteten Studios.",
    highlights: [
      { title: "Kraftbereich", body: "Geräte und Freihanteln für jede Erfahrungsstufe. Hochwertige Marken, perfekt gewartet." },
      { title: "Cardio mit Panorama", body: "Laufband, Crosstrainer, Bike, Stepper — alles mit Blick ins Grüne." },
      { title: "Functional Zone", body: "Eigenes Areal für TRX, Plyo, Kettlebells und Bodyweight-Drills." },
      { title: "EGYM-Zirkel", body: "Smart Strength Geräte für effiziente, vollautomatisch angepasste Workouts." },
      { title: "Bewegungsfreiheit", body: "Großzügige Wegeführung, kaum Stau, immer Platz für eine Pause am Wasserspender." },
      { title: "Lounge & Café", body: "Vor oder nach dem Training: Espresso, Smoothie, einfach abhängen." },
    ],
    body: [
      "Wir haben unsere Trainingsfläche so geplant, dass sich kein Bereich wie ein Engpass anfühlt. Zwischen den Geräte-Inseln bleibt Platz zum Atmen, die Wegeführung ist klar, und die deckenhohen Glasfronten halten den Raum hell — selbst im November.",
      "Ob du dich am Hantelrack auspowerst oder im Functional-Bereich mit dem TRX arbeitest: du teilst dir die Fläche mit Menschen, die genauso ernsthaft trainieren wie du, ohne dass es nach Industriehalle riecht. Holz, Pflanzen, warmes Licht — wir glauben, dass die Atmosphäre Teil des Trainings ist.",
      "Wenn du noch nie in einem Studio warst, kein Problem: ein Trainer geht beim ersten Termin mit dir durch die Stationen, zeigt dir die wichtigsten Geräte und beantwortet alle Fragen. Danach trainierst du frei — mit der Sicherheit, immer jemanden ansprechen zu können.",
    ],
    cta: { label: "Probetraining", href: "/kontakt" },
  },

  "fitness/egym": {
    eyebrow: "EGYM",
    title: "Geräte, die sich an dich erinnern.",
    intro:
      "EGYM Smart Strength analysiert dich in zwei Minuten, stellt die Geräte automatisch auf dich ein und führt dich durch einen wissenschaftlich validierten Plan — bis zu viermal effizienter als klassisches Training.",
    highlights: [
      { title: "Body-Scan in 2 Minuten", body: "3D-Kameratechnologie misst Körperzusammensetzung und Beweglichkeit präzise." },
      { title: "RFID-Identifikation", body: "Chip auflegen, Gerät erkennt dich, stellt alles ein — du fängst sofort an." },
      { title: "Adaptive Last", body: "Das Gerät passt Gewicht und Wiederholungen pro Satz an deine Leistung an." },
      { title: "Komplett in 30 Min.", body: "Effizientes Ganzkörper-Workout — perfekt für volle Wochen." },
      { title: "App-Tracking", body: "Fortschritt, BioAge und Trainingsplan in der EGYM-App immer dabei." },
      { title: "Für jedes Level", body: "Anfänger bis Fortgeschrittene — die Geräte holen dich da ab, wo du stehst." },
    ],
    body: [
      "Klassisches Krafttraining hat ein Problem: zwischen den Sätzen vergisst man, was man letztes Mal gemacht hat. Welches Gewicht? Wie viele Wiederholungen? Sitzhöhe? EGYM löst das, indem die Geräte sich merken, wer du bist — und sich beim Hinsetzen sofort auf dich einstellen.",
      "Die Steuerung passiert über deinen RFID-Chip, den du am Eingang bekommst. Beim ersten Termin scannt dich ein Trainer mit dem Fitness Hub: 3D-Kamera, Sensoren, Kraftmessung. Daraus generiert das System deinen Plan, der pro Satz nachjustiert wird — wenn du Power hast, gibt's mehr Last; an einem schwachen Tag weniger.",
      "Das Ergebnis sind kurze, dichte Trainingseinheiten. 25 bis 30 Minuten reichen für ein vollständiges Ganzkörper-Workout. Du verlierst keine Zeit mit Suchen, Einstellen und Notieren — du trainierst.",
    ],
    cta: { label: "Probetraining", href: "/kontakt" },
  },

  "fitness/athletic-box": {
    eyebrow: "Athletic Box",
    title: "Funktionell. Intensiv. Kompromisslos.",
    intro:
      "Die Athletic Box ist unser Bereich für funktionales Training — TRX, Battle Ropes, Plyo, Kettlebells und alles, was dich athletisch macht.",
    highlights: [
      { title: "Komplette Ausstattung", body: "TRX-Rigs, Plyo-Boxen, Battle Ropes, Sleds, Kettlebells, Med Balls." },
      { title: "Eigenes Areal", body: "Separierter Raum für Group Workouts ohne Konflikte mit dem Hauptbereich." },
      { title: "Coach-geführt", body: "Functional-Kurse und Personal Training auf Wunsch." },
      { title: "Athletisch & alltagsnah", body: "Stärke, die du im Alltag spürst — nicht nur im Studio." },
    ],
    body: [
      "Funktionelles Training trainiert Bewegungen, nicht einzelne Muskeln. Push, Pull, Hinge, Squat, Rotation — die Grundmuster, aus denen jeder Sport und jede Alltagsbewegung besteht. Genau dafür ist die Athletic Box gebaut.",
      "Du kannst sie frei nutzen oder in einem unserer Functional-Kurse mit Coach trainieren. Beides funktioniert: Frei trainieren, wenn du weißt, was du tust, oder geführt, wenn du mehr Struktur willst. Personal Training auf Anfrage.",
    ],
  },

  "fitness/lady-fitness": {
    eyebrow: "Lady Fitness",
    title: "Ein Raum, der für dich gemacht ist.",
    intro:
      "Spezielle Angebote für Frauen, ergänzt durch Damensauna mittwochs und Kurse, die Kraft, Beweglichkeit und Wohlbefinden in den Mittelpunkt stellen.",
    highlights: [
      { title: "Damensauna mittwochs", body: "Ab 11 Uhr ausschließlich für unsere weiblichen Mitglieder." },
      { title: "Frauenfreundliche Kurse", body: "Pilates, Yoga, Dance Aerobic, Zumba — ein bewusst breites Spektrum." },
      { title: "Beratung auf Augenhöhe", body: "Unsere Trainerinnen begleiten dich individuell und respektvoll." },
      { title: "Hormonelle Phasen mitdenken", body: "Training kann mehr als reine Performance — wir passen es an dich an." },
    ],
    body: [
      "Studios sind oft als reine Performance-Räume gebaut. Wir denken Fitness ganzheitlicher — und nehmen die Lebensrealität von Frauen mit. Zyklusphasen, Schwangerschaft, Wechseljahre: alles spielt eine Rolle für sinnvolles Training. Unsere Trainerinnen wissen das und holen dich da ab.",
      "Mittwochs ab 11 Uhr gehört die Sauna nur den Frauen. Eine bewusste Pause vom gemischten Studio-Alltag, die viele unserer Mitgliederinnen schätzen.",
    ],
  },

  "fitness/inbody": {
    eyebrow: "InBody / SECA",
    title: "Was im Spiegel nicht zu sehen ist.",
    intro:
      "Professionelle Körperanalyse mit SECA und InBody — wir messen Muskelmasse, Körperfett, Wasserhaushalt und mehr. Daten, mit denen man wirklich arbeiten kann.",
    highlights: [
      { title: "Präzise Messwerte", body: "Segmentale Muskelmasse, Körperfett, viszerales Fett — wissenschaftlich genau." },
      { title: "Verlauf statt Snapshot", body: "Wir messen regelmäßig, du siehst Fortschritte in Zahlen." },
      { title: "Auf dich abgestimmt", body: "Die Werte fließen direkt in deine Trainings- und Ernährungsberatung ein." },
      { title: "Im Tarif enthalten", body: "Im Starterpaket inklusive — und auf Wunsch jederzeit wiederholbar." },
    ],
    body: [
      "Die Waage lügt nicht — aber sie sagt auch nicht die Wahrheit. Wer Muskeln aufbaut und Fett verliert, kann gleich viel wiegen wie vorher und trotzdem deutlich gesünder sein. Genau hier setzt die Körperanalyse an: sie zerlegt deinen Körper in Bestandteile.",
      "Eine Messung dauert keine zwei Minuten. Du stellst dich auf das Gerät, hältst die Elektroden, und bekommst hinterher einen Ausdruck mit deinen Werten: Muskelmasse pro Körperseite, Körperfettanteil, Wasserverteilung, viszerales Bauchfett. Daraus lässt sich ein Training planen, das wirklich passt.",
    ],
  },

  "fitness/vibrafit": {
    eyebrow: "Vibrafit",
    title: "Training auf Frequenz.",
    intro:
      "Vibrationstraining für mehr Tiefenmuskulatur in kürzerer Zeit — sanft auf die Gelenke, intensiv auf das Bindegewebe.",
    highlights: [
      { title: "Tiefenmuskulatur", body: "Vibration aktiviert Muskelschichten, die klassisches Training kaum erreicht." },
      { title: "Gelenkschonend", body: "Wenig Belastung auf Knie und Wirbelsäule — ideal in Aufbauphasen." },
      { title: "Kurz & wirksam", body: "Schon 10 – 15 Minuten zeigen messbare Effekte." },
      { title: "Kombinierbar", body: "Perfekte Ergänzung zu Kraft, Cardio oder Reha." },
    ],
    body: [
      "Die Idee ist simpel: stehst du auf einer vibrierenden Platte, reagiert dein Körper mit hunderten kleinen Muskelkontraktionen pro Minute. Das aktiviert vor allem die tieferliegende Muskulatur, die normales Training oft auslässt — und das ohne Stoßbelastung für Knie oder Wirbelsäule.",
      "Vibrafit lässt sich sehr gut in Phasen nach Verletzungen einsetzen, als sanfter Einstieg, oder als Ergänzung an Tagen, an denen ein volles Workout nicht passt. Ein Trainer zeigt dir die Übungen, danach machst du sie selbstständig.",
    ],
  },

  "fitness/fitnesskurse": {
    eyebrow: "Fitnesskurse",
    title: "Über 30 Kurse pro Woche.",
    intro:
      "Yoga, Pilates, Zumba, HOT IRON, Boxen, Functional, Jumping, WingTsun — finde, was zu dir passt. Alle Kurse im Tarif enthalten.",
    highlights: [
      { title: "Vielfalt", body: "22 verschiedene Kurstypen — von ruhig bis intensiv." },
      { title: "Klare Ziele", body: "Kurse sind nach Ausdauer, Kräftigung, Entspannung etc. kategorisiert." },
      { title: "Profi-Kursleitung", body: "Erfahrene Trainerinnen und Trainer mit aktuellen Lizenzen." },
      { title: "Stetig erweitert", body: "Neue Formate kommen regelmäßig dazu — frag uns, was du dir wünschst." },
    ],
    body: [
      "Manche Menschen trainieren am liebsten allein im eigenen Tempo. Andere brauchen die Gruppe, die Musik, jemanden, der ansagt. Wir haben beides — und genau deshalb über 30 Kurse pro Woche, damit für jedes Mood die richtige Stunde dabei ist.",
      "Du brauchst dich für die meisten Kurse nicht anzumelden — schau dir den Kursplan an, komm zehn Minuten früher und sicher dir deinen Platz. Bei besonders gefragten Stunden (Jumping, HOT IRON, HOT YOGA) reservieren wir Plätze auf Anfrage.",
    ],
    cta: { label: "Kursplan ansehen", href: "/fitness/kursplan" },
  },

  "fitness/app": {
    eyebrow: "Sportpalast App",
    title: "Alles in einer App.",
    intro:
      "Trainingsplan, Kursbuchung, Fortschritts-Tracking und EGYM-Daten — alles in deiner Tasche.",
    highlights: [
      { title: "Trainingsplan", body: "Dein individueller Plan, jederzeit abrufbar — auch im Studio am Gerät." },
      { title: "Fortschritt", body: "BioAge, Kraftwerte, Verlauf — wir machen Erfolg sichtbar." },
      { title: "Sync mit EGYM", body: "Alle Werte aus dem Smart-Strength-Zirkel werden automatisch übernommen." },
      { title: "Mehr in Planung", body: "Kursbuchung und Mitgliederbereich folgen." },
    ],
    body: [
      "Die App ist im Hintergrund mit dem EGYM-System verbunden und übernimmt alle Werte automatisch. Du musst nichts manuell eintragen. Wenn du am Hub gescannt wurdest, siehst du in der App deinen Plan und kannst Fortschritte abrufen — auch zu Hause.",
      "Im Studio brauchst du die App nicht zwingend: dein RFID-Chip macht den Job an den Geräten. Aber wer den Überblick mag, hat alles dabei.",
    ],
  },

  "fitness/lounge-cafe": {
    eyebrow: "Lounge & Café",
    title: "Bevor und nachher zählt auch.",
    intro:
      "Unsere Lounge mit Café ist der Ort für den Espresso vor dem Training, den Smoothie danach oder ein Gespräch mit der Trainerin.",
    highlights: [
      { title: "Hochwertige Getränke", body: "Frische Smoothies, Espresso aus Siebträger, alkoholfreie Drinks." },
      { title: "Getränkeflat", body: "Wasser, Tee und Erfrischungen sind in allen Mitgliedschaften enthalten." },
      { title: "Treffpunkt", body: "Verabrede dich mit Trainingspartnern, lerne Mitglieder kennen." },
      { title: "Mit Aussicht", body: "Die Lounge ist Teil des Glaspalasts — Blick ins Grüne inklusive." },
    ],
    body: [
      "Ein gutes Studio ist mehr als seine Geräte. Es ist auch der Ort, an dem du gerne fünf Minuten länger bleibst, weil die Atmosphäre stimmt. Unsere Lounge ist genau dafür gemacht: helles Holz, gutes Licht, Espresso aus dem Siebträger.",
      "Wer will, holt sich nach dem Training einen Smoothie und arbeitet noch zwanzig Minuten auf dem Sofa weiter — WLAN ist da, der Blick ins Oberbergische auch.",
    ],
  },

  // ===== Gesundheit =====
  "gesundheit/muskelaufbau": {
    eyebrow: "Muskelaufbau",
    title: "Kraft, die man im Alltag spürt.",
    intro:
      "Strukturierter Muskelaufbau mit fundierten Plänen — egal ob du dünn warst und Masse willst oder ein paar Reserven loslassen möchtest.",
    highlights: [
      { title: "Wissenschaftlich fundiert", body: "Aktuelle Trainingswissenschaft trifft praktische Erfahrung." },
      { title: "Individuelle Pläne", body: "Wir analysieren deinen Status und planen passend zu deinem Ziel." },
      { title: "Geräte & Freihantel", body: "Beides hat seinen Platz — wir kombinieren sinnvoll." },
      { title: "Coaching auf Wunsch", body: "Personal Training für schnellere und sicherere Fortschritte." },
    ],
    body: [
      "Muskelaufbau ist kein Mysterium. Genug Reiz, genug Erholung, genug Protein — wenn diese drei Faktoren stimmen, wachsen Muskeln. Wir sorgen dafür, dass dein Training den richtigen Reiz setzt, ohne dich zu überlasten.",
      "Im EGYM-Zirkel bekommst du die adaptive Last automatisch. Im Freihantelbereich planen wir mit dir die Übungsauswahl und Progression. Für besonders Ambitionierte gibt es Personal Training, in dem wir tiefer in deine Technik gehen.",
    ],
  },

  "gesundheit/kondition": {
    eyebrow: "Kondition",
    title: "Atem, der trägt.",
    intro:
      "Bessere Ausdauer macht Alltag, Sport und Erholung leichter. Wir bringen dich Schritt für Schritt dorthin.",
    highlights: [
      { title: "Smarte Cardio-Pläne", body: "Pulszonen, Intervalle, gleichmäßige Einheiten — wir wählen, was wirkt." },
      { title: "Vielfältige Kurse", body: "Jumping Fitness, Zumba, Step Aerobic, Dance Aerobic." },
      { title: "EGYM Cardio", body: "Adaptive Geräte mit individueller Belastungssteuerung." },
      { title: "Mess- und sichtbar", body: "Tests zeigen, wie sich dein Herz-Kreislauf entwickelt." },
    ],
    body: [
      "Ausdauer ist die Basis fast aller Fitness-Ziele. Wer mehr Puste hat, kann mehr Volumen im Krafttraining stemmen, erholt sich schneller zwischen den Sätzen und lebt nachweislich länger gesund. Wir bauen sie systematisch auf — in deinem Tempo.",
      "Nicht jede Cardio-Einheit muss anstrengend sein. Viel davon ist ruhig-gleichmäßiges Training in der ersten Pulszone, ergänzt durch gelegentliche intensive Intervalle. Wir zeigen dir, wann was sinnvoll ist.",
    ],
  },

  "gesundheit/rueckentraining": {
    eyebrow: "Rückentraining",
    title: "Kein Rücken, der ewig schweigt.",
    intro:
      "Gezielte Kräftigung, Mobilisation und Entspannung — Rückenbeschwerden vorbeugen oder bestehende Probleme lindern.",
    highlights: [
      { title: "Rückenfit & Rücken & Relax", body: "Spezialkurse, die genau auf den Rücken zielen." },
      { title: "Stabilisation", body: "Tiefenmuskulatur und Core sind das Fundament." },
      { title: "Physio im Haus", body: "Bei akuten Beschwerden direkt zur Therapie wechseln." },
      { title: "Alltagsnah trainieren", body: "Bewegungsmuster, die du im Büro und im Leben brauchst." },
    ],
    body: [
      "Rückenschmerz ist die Volkskrankheit Nummer eins. Stundenlanges Sitzen, schwache Hüftbeuger, unbenutzte Tiefenmuskulatur — die Ursachen sind bekannt. Bewegung ist die wirksamste Medizin, und sie ist günstiger als jede Behandlung.",
      "Wir bieten dir mehrere Wege: präventive Kurse wie Rückenfit oder Rücken & Relax, das stabilisierende Functional Training, oder im akuten Fall die direkte Übergabe an unsere Physiotherapie im Haus. So entstehen keine Wartezeiten zwischen Diagnose und Übungsplan.",
    ],
  },

  "gesundheit/fitness-im-alter": {
    eyebrow: "Fitness im Alter",
    title: "Stark bleiben, beweglich bleiben.",
    intro:
      "Training, das auf den späteren Lebensabschnitt zugeschnitten ist — Stürze vermeiden, Selbstständigkeit erhalten, Lebensfreude stärken.",
    highlights: [
      { title: "Gelenkschonend", body: "Aufbau ohne Überlastung — passend zu deinem aktuellen Niveau." },
      { title: "Beweglichkeit", body: "Mobility und Stretching für mehr Spielraum im Alltag." },
      { title: "Gleichgewicht & Koordination", body: "Übungen, die Stürzen aktiv vorbeugen." },
      { title: "Soziales Miteinander", body: "Gruppentraining mit Gleichgesinnten — gut für Körper und Seele." },
    ],
    body: [
      "Wer ab 60 weiter beweglich, stark und selbstbestimmt leben will, kommt um Krafttraining nicht herum. Studien zeigen klar: gezieltes Training ist die wirksamste Maßnahme gegen Stürze, Frailty und Pflegebedürftigkeit. Wir bauen es behutsam auf — mit Geräten, die genau zu dir passen.",
      "Viele unserer Mitglieder im fortgeschrittenen Alter trainieren morgens, wenn das Studio ruhig ist. Sie tauschen sich an der Lounge aus, bleiben in Bewegung und merken nach wenigen Monaten messbare Veränderungen — leichter aus dem Stuhl aufstehen, sicher Treppen steigen, ohne Anstrengung den Einkauf tragen.",
    ],
  },

  "gesundheit/gesundheitsfoerderung": {
    eyebrow: "Gesundheitsförderung",
    title: "Vorsorge schlägt Nachsorge.",
    intro:
      "Programme rund um Bewegung, Entspannung und Ernährung — viele davon werden von Krankenkassen bezuschusst.",
    highlights: [
      { title: "Bezuschusste Kurse", body: "Präventionskurse nach §20 SGB V — bis zu 100 € pro Jahr zurück." },
      { title: "Ganzheitlich", body: "Bewegung, Entspannung, Ernährung — alle drei Säulen." },
      { title: "Niederschwellig", body: "Auch für absolute Einsteiger geeignet — wir holen dich ab." },
      { title: "Begleitet & nachhaltig", body: "Wissenstransfer für gesundes Verhalten im Alltag." },
    ],
    body: [
      "Prävention zahlt sich aus — körperlich und finanziell. Unsere zertifizierten Kurse erfüllen die Anforderungen der Krankenkassen nach §20 SGB V. Du zahlst die Kursgebühr vor, deine Kasse erstattet einen Großteil oder alles, je nach Tarif.",
      "Wir helfen dir mit allem, was du dafür brauchst: Teilnahmebescheinigung, Quittung, Kursnummer. Frag bei deiner Kasse nach, was sie bezuschusst — die meisten übernehmen 75 bis 100 % bei zertifizierten Anbietern wie uns.",
    ],
  },

  "gesundheit/stressabbau": {
    eyebrow: "Stressabbau",
    title: "Runterkommen — bewusst und regelmäßig.",
    intro:
      "Yoga, Yin Yoga, Pilates, Soundhealing, Sauna — Wege, dem Alltag den Stresslevel zu nehmen.",
    highlights: [
      { title: "Yoga & Yin Yoga", body: "Vom dynamischen Flow bis zur tiefen Faszienarbeit." },
      { title: "Pilates", body: "Kontrolle, Atem und Mitte — beruhigend und kräftigend zugleich." },
      { title: "Sauna & Wellness", body: "Wärme als Reset — körperlich und mental." },
      { title: "Soundhealing", body: "Spezielle Events mit Klangschalen und Gong — Termine in den News." },
    ],
    body: [
      "Chronischer Stress ist ein körperlicher Zustand. Erhöhter Cortisolspiegel, flache Atmung, verkürzte Faszien — das alles lässt sich messen und verändern. Die wirksamsten Werkzeuge sind ironischerweise die ältesten: Atem, Bewegung, Wärme, Stille.",
      "Yoga und Pilates regulieren das autonome Nervensystem. Die Sauna ist nach Studienlage so wirkungsvoll wie ein moderates Cardio-Training und reduziert nachweislich Stresshormone. Und wenn du einmal richtig abschalten willst, hilft ein Soundhealing-Abend mehr als viele meinen.",
    ],
  },

  "gesundheit/abnehmen": {
    eyebrow: "Abnehmen",
    title: "Nachhaltig statt schnell.",
    intro:
      "Training, Ernährung und Alltag — wir helfen dir, ein gesundes Gewicht zu erreichen und zu halten. Keine Crash-Diäten.",
    highlights: [
      { title: "Ausgangslage messen", body: "InBody/SECA zeigt, woher du startest und wohin du willst." },
      { title: "Cardio + Kraft", body: "Die Kombination wirkt — Muskeln verbrennen auch in Ruhe." },
      { title: "Fatburner-Kurse", body: "Intervall-Workouts, die den Stoffwechsel anheizen." },
      { title: "Verlauf statt Snapshot", body: "Wir schauen auf Trends, nicht auf Tagesschwankungen." },
    ],
    body: [
      "Abnehmen ist keine Geheimwissenschaft, aber auch keine Kleinigkeit. Wer es nachhaltig macht, kombiniert moderates Kaloriendefizit, ausreichend Protein und konsequente Bewegung. Crash-Diäten verlieren Wasser und Muskeln; was du behalten willst, ist Fett zu verlieren, ohne Muskeln einzubüßen.",
      "Wir messen alle paar Wochen mit dem InBody, was wirklich passiert. So siehst du, ob du Fett oder Muskeln verlierst — und kannst Training und Ernährung gezielt nachsteuern. Die Waage alleine reicht dafür nicht.",
    ],
  },

  "gesundheit/praeventionskurse": {
    eyebrow: "Präventionskurse",
    title: "Krankenkasse zahlt mit.",
    intro:
      "Zertifizierte Kurse nach §20 SGB V — Rücken, Entspannung, Bewegung. Deine Krankenkasse bezuschusst bis zu 100 € pro Jahr.",
    highlights: [
      { title: "Zertifiziert", body: "Unsere Präventionskurse erfüllen die Anforderungen der Krankenkassen." },
      { title: "Bezuschusst", body: "Du zahlst vor, deine Kasse erstattet einen Großteil oder alles." },
      { title: "Vielfältige Themen", body: "Rückenfit, Yoga, Entspannung — frag nach aktuellen Kursen." },
      { title: "Wir helfen beim Antrag", body: "Wir geben dir alles an die Hand, was du für die Erstattung brauchst." },
    ],
    body: [
      "Die Krankenkassen unterstützen zertifizierte Präventionskurse mit bis zu 100 € pro Jahr — bei manchen Tarifen mehr. Voraussetzung ist die Anerkennung durch die ZPP (Zentrale Prüfstelle Prävention). Unsere relevanten Kurse haben dieses Siegel.",
      "Du meldest dich bei uns für den Kurs an und zahlst die Kursgebühr direkt. Am Ende bekommst du von uns die Teilnahmebescheinigung mit Kursnummer und Datum. Diese reichst du bei deiner Krankenkasse ein — der Großteil oder die volle Summe kommt zurück. Wir erklären dir das im Detail, wenn du fragst.",
    ],
  },

  "gesundheit/rehasport": {
    eyebrow: "Rehasport",
    title: "100 % Kassenleistung. 0 % Wartezeit.",
    intro:
      "Mit Verordnung deines Arztes startest du sofort. Wir kümmern uns um den Rest — und du um deine Gesundheit.",
    highlights: [
      { title: "Voll bezahlt", body: "Gesetzliche Krankenkassen tragen die Kosten zu 100 %." },
      { title: "Sofort starten", body: "Keine Wartezeit — sobald die Verordnung genehmigt ist, geht's los." },
      { title: "Rehasport Soft", body: "Sanftere Variante mittwochs — für besonders schonenden Wiedereinstieg." },
      { title: "Rehasport Plus", body: "Kombiniert Gruppentraining mit vollem Studio-Zugang inklusive Sauna." },
      { title: "Kurse Mo–Do", body: "Morgens 10:00 oder abends 19:00 — passend für jeden Alltag." },
      { title: "Geschulte Übungsleitung", body: "Zertifizierte Übungsleiter mit medizinischem Hintergrund." },
    ],
    body: [
      "Rehasport ist eine vom Gesetzgeber vorgesehene Leistung der Krankenkassen — gedacht für Menschen mit chronischen Erkrankungen, nach Operationen, mit orthopädischen Beschwerden oder im Anschluss an eine Reha. Die Kosten trägt deine Kasse vollständig.",
      "Der Weg dorthin ist einfacher als viele denken: Hausarzt oder Facharzt stellt das Formular 56 aus, du reichst es bei deiner Krankenkasse ein, sie genehmigt — fertig. In der Regel bewilligt: 50 Einheiten über 18 Monate, 1 bis 2 mal pro Woche.",
      "Bei uns kannst du sofort einsteigen, ohne Wartezeit. Unsere Übungsleitung ist speziell geschult und arbeitet eng mit der Physiotherapie im Haus zusammen. Wer mehr will als nur die Reha-Stunden, ergänzt mit Rehasport Plus — dann hast du auch außerhalb der Kurse Zugriff auf alle Geräte und die Sauna.",
    ],
    cta: { label: "Mehr erfahren · Kontakt", href: "/kontakt" },
  },

  "gesundheit/firmenfitness": {
    eyebrow: "Firmenfitness",
    title: "Gesunde Mitarbeiter. Stabile Teams.",
    intro:
      "Firmen-Mitgliedschaften für Unternehmen jeder Größe — wir machen es einfach und attraktiv.",
    highlights: [
      { title: "Konditionen für Teams", body: "Reduzierte Beiträge ab einer bestimmten Mitarbeiterzahl." },
      { title: "Unbürokratisch", body: "Wir übernehmen Verwaltung und Onboarding — du nur die Anmeldung." },
      { title: "Sichtbarer Mehrwert", body: "Gesundheit, weniger Krankheitstage, bessere Bindung." },
      { title: "Beratung", body: "Schreib uns — wir machen dir ein Angebot, das zu eurem Team passt." },
    ],
    body: [
      "Betriebliches Gesundheitsmanagement zahlt sich nachweislich aus — bessere Bindung, weniger Krankheitstage, höhere Zufriedenheit. Die Investition rechnet sich für die meisten Unternehmen schon ab fünf Mitarbeitern.",
      "Wir machen das Onboarding für dich: Anmeldeformular, Beitragsabrechnung, Sammelrechnung. Deine Mitarbeiter trainieren wie alle anderen, du bekommst einmal im Monat eine Rechnung. Punkt.",
    ],
    cta: { label: "Anfragen", href: "/kontakt" },
  },
};
