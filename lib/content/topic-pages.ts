// Content for Fitness and Gesundheit sub-pages — all rendered via TopicPageTemplate.
// Keeping copy short, original and on-brand; the live site can later be replaced with
// editorial long-form if desired.

export interface TopicPage {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: { title: string; body: string }[];
  cta?: { label: string; href: string };
}

export const TOPIC_PAGES: Record<string, TopicPage> = {
  // Fitness
  "fitness/trainingsflaeche": {
    eyebrow: "Trainingsfläche",
    title: "2 000 m² Glas, Licht und Aussicht.",
    intro:
      "Unsere Trainingsfläche ist komplett verglast und blickt direkt ins Oberbergische — trainieren wie draußen, nur mit dem Komfort eines top ausgestatteten Studios.",
    highlights: [
      {
        title: "Kraftbereich",
        body: "Geräte und Freihanteln für jede Erfahrungsstufe. Hochwertige Marken, perfekt gewartet.",
      },
      {
        title: "Cardio mit Panorama",
        body: "Laufband, Crosstrainer, Bike, Stepper — alles mit Blick ins Grüne.",
      },
      {
        title: "Functional Zone",
        body: "Eigenes Areal für TRX, Plyo, Kettlebells und Bodyweight-Drills.",
      },
      {
        title: "EGYM-Zirkel",
        body: "Smart Strength Geräte für effiziente, vollautomatisch angepasste Workouts.",
      },
      {
        title: "Bewegungsfreiheit",
        body: "Großzügige Wegeführung, kaum Stau, immer Platz für eine Pause am Wasserspender.",
      },
      {
        title: "Lounge & Café",
        body: "Vor oder nach dem Training: Espresso, Smoothie, einfach abhängen.",
      },
    ],
    cta: { label: "Probetraining", href: "/kontakt" },
  },
  "fitness/egym": {
    eyebrow: "EGYM",
    title: "Geräte, die sich an dich erinnern.",
    intro:
      "EGYM Smart Strength analysiert dich in zwei Minuten, stellt die Geräte automatisch auf dich ein und führt dich durch einen wissenschaftlich validierten Plan — bis zu viermal effizienter als klassisches Training.",
    highlights: [
      {
        title: "Body-Scan in 2 Minuten",
        body: "3D-Kameratechnologie misst Körperzusammensetzung und Beweglichkeit präzise.",
      },
      {
        title: "RFID-Identifikation",
        body: "Chip auflegen, Gerät erkennt dich, stellt alles ein — du fängst sofort an.",
      },
      {
        title: "Adaptive Last",
        body: "Das Gerät passt Gewicht und Wiederholungen pro Satz an deine Leistung an.",
      },
      {
        title: "Komplett in 30 Min.",
        body: "Effizientes Ganzkörper-Workout — perfekt für volle Wochen.",
      },
      {
        title: "App-Tracking",
        body: "Fortschritt, BioAge und Trainingsplan in der EGYM-App immer dabei.",
      },
      {
        title: "Für jedes Level",
        body: "Anfänger bis Fortgeschrittene — die Geräte holen dich da ab, wo du stehst.",
      },
    ],
    cta: { label: "Probetraining", href: "/kontakt" },
  },
  "fitness/athletic-box": {
    eyebrow: "Athletic Box",
    title: "Funktionell. Intensiv. Kompromisslos.",
    intro:
      "Die Athletic Box ist unser Bereich für funktionales Training — TRX, Battle Ropes, Plyo, Kettlebells und alles, was dich athletisch macht.",
    highlights: [
      {
        title: "Komplette Ausstattung",
        body: "TRX-Rigs, Plyo-Boxen, Battle Ropes, Sleds, Kettlebells, Med Balls.",
      },
      {
        title: "Eigenes Areal",
        body: "Separierter Raum für Group Workouts ohne Konflikte mit dem Hauptbereich.",
      },
      {
        title: "Coach-geführt",
        body: "Functional-Kurse und Personal Training auf Wunsch.",
      },
      {
        title: "Athletisch & alltagsnah",
        body: "Stärke, die du im Alltag spürst — nicht nur im Studio.",
      },
    ],
  },
  "fitness/lady-fitness": {
    eyebrow: "Lady Fitness",
    title: "Ein Raum, der für dich gemacht ist.",
    intro:
      "Spezielle Angebote für Frauen, ergänzt durch Damensauna mittwochs und Kurse, die Kraft, Beweglichkeit und Wohlbefinden in den Mittelpunkt stellen.",
    highlights: [
      {
        title: "Damensauna mittwochs",
        body: "Ab 11 Uhr ausschließlich für unsere weiblichen Mitglieder.",
      },
      {
        title: "Frauenfreundliche Kurse",
        body: "Pilates, Yoga, Dance Aerobic, Zumba — ein bewusst breites Spektrum.",
      },
      {
        title: "Beratung auf Augenhöhe",
        body: "Unsere Trainerinnen begleiten dich individuell und respektvoll.",
      },
      {
        title: "Hormonelle Phasen mitdenken",
        body: "Training kann mehr als reine Performance — wir passen es an dich an.",
      },
    ],
  },
  "fitness/inbody": {
    eyebrow: "InBody / SECA",
    title: "Was im Spiegel nicht zu sehen ist.",
    intro:
      "Professionelle Körperanalyse mit SECA und InBody — wir messen Muskelmasse, Körperfett, Wasserhaushalt und mehr. Daten, mit denen man wirklich arbeiten kann.",
    highlights: [
      {
        title: "Präzise Messwerte",
        body: "Segmentale Muskelmasse, Körperfett, viszerales Fett — wissenschaftlich genau.",
      },
      {
        title: "Verlauf statt Snapshot",
        body: "Wir messen regelmäßig, du siehst Fortschritte in Zahlen.",
      },
      {
        title: "Auf dich abgestimmt",
        body: "Die Werte fließen direkt in deine Trainings- und Ernährungsberatung ein.",
      },
      {
        title: "Im Tarif enthalten",
        body: "Im Starterpaket inklusive — und auf Wunsch jederzeit wiederholbar.",
      },
    ],
  },
  "fitness/vibrafit": {
    eyebrow: "Vibrafit",
    title: "Training auf Frequenz.",
    intro:
      "Vibrationstraining für mehr Tiefenmuskulatur in kürzerer Zeit — sanft auf die Gelenke, intensiv auf das Bindegewebe.",
    highlights: [
      {
        title: "Tiefenmuskulatur",
        body: "Vibration aktiviert Muskelschichten, die klassisches Training kaum erreicht.",
      },
      {
        title: "Gelenkschonend",
        body: "Wenig Belastung auf Knie und Wirbelsäule — ideal in Aufbauphasen.",
      },
      {
        title: "Kurz & wirksam",
        body: "Schon 10 – 15 Minuten zeigen messbare Effekte.",
      },
      {
        title: "Kombinierbar",
        body: "Perfekte Ergänzung zu Kraft, Cardio oder Reha.",
      },
    ],
  },
  "fitness/fitnesskurse": {
    eyebrow: "Fitnesskurse",
    title: "Über 30 Kurse pro Woche.",
    intro:
      "Yoga, Pilates, Zumba, HOT IRON, Boxen, Functional, Jumping, WingTsun — finde, was zu dir passt. Alle Kurse im Tarif enthalten.",
    highlights: [
      {
        title: "Vielfalt",
        body: "22 verschiedene Kurstypen — von ruhig bis intensiv.",
      },
      {
        title: "Klare Ziele",
        body: "Kurse sind nach Ausdauer, Kräftigung, Entspannung etc. kategorisiert.",
      },
      {
        title: "Profi-Kursleitung",
        body: "Erfahrene Trainerinnen und Trainer mit aktuellen Lizenzen.",
      },
      {
        title: "Stetig erweitert",
        body: "Neue Formate kommen regelmäßig dazu — frag uns, was du dir wünschst.",
      },
    ],
    cta: { label: "Kursplan ansehen", href: "/fitness/kursplan" },
  },
  "fitness/app": {
    eyebrow: "Sportpalast App",
    title: "Alles in einer App.",
    intro:
      "Trainingsplan, Kursbuchung, Fortschritts-Tracking und EGYM-Daten — alles in deiner Tasche.",
    highlights: [
      {
        title: "Trainingsplan",
        body: "Dein individueller Plan, jederzeit abrufbar — auch im Studio am Gerät.",
      },
      {
        title: "Fortschritt",
        body: "BioAge, Kraftwerte, Verlauf — wir machen Erfolg sichtbar.",
      },
      {
        title: "Sync mit EGYM",
        body: "Alle Werte aus dem Smart-Strength-Zirkel werden automatisch übernommen.",
      },
      {
        title: "Mehr in Planung",
        body: "Kursbuchung und Mitgliederbereich folgen.",
      },
    ],
  },
  "fitness/lounge-cafe": {
    eyebrow: "Lounge & Café",
    title: "Bevor und nachher zählt auch.",
    intro:
      "Unsere Lounge mit Café ist der Ort für den Espresso vor dem Training, den Smoothie danach oder ein Gespräch mit der Trainerin.",
    highlights: [
      {
        title: "Hochwertige Getränke",
        body: "Frische Smoothies, Espresso aus Siebträger, alkoholfreie Drinks.",
      },
      {
        title: "Getränkeflat",
        body: "Wasser, Tee und Erfrischungen sind in allen Mitgliedschaften enthalten.",
      },
      {
        title: "Treffpunkt",
        body: "Verabrede dich mit Trainingspartnern, lerne Mitglieder kennen.",
      },
      {
        title: "Mit Aussicht",
        body: "Die Lounge ist Teil des Glaspalasts — Blick ins Grüne inklusive.",
      },
    ],
  },

  // Gesundheit
  "gesundheit/muskelaufbau": {
    eyebrow: "Muskelaufbau",
    title: "Kraft, die man im Alltag spürt.",
    intro:
      "Strukturierter Muskelaufbau mit fundierten Plänen — egal ob du dünn warst und Masse willst oder ein paar Reserven loslassen möchtest.",
    highlights: [
      {
        title: "Wissenschaftlich fundiert",
        body: "Aktuelle Trainingswissenschaft trifft praktische Erfahrung.",
      },
      {
        title: "Individuelle Pläne",
        body: "Wir analysieren deinen Status und planen passend zu deinem Ziel.",
      },
      {
        title: "Geräte & Freihantel",
        body: "Beides hat seinen Platz — wir kombinieren sinnvoll.",
      },
      {
        title: "Coaching auf Wunsch",
        body: "Personal Training für schnellere und sicherere Fortschritte.",
      },
    ],
  },
  "gesundheit/kondition": {
    eyebrow: "Kondition",
    title: "Atem, der trägt.",
    intro:
      "Bessere Ausdauer macht Alltag, Sport und Erholung leichter. Wir bringen dich Schritt für Schritt dorthin.",
    highlights: [
      {
        title: "Smarte Cardio-Pläne",
        body: "Pulszonen, Intervalle, gleichmäßige Einheiten — wir wählen, was wirkt.",
      },
      {
        title: "Vielfältige Kurse",
        body: "Jumping Fitness, Zumba, Step Aerobic, Dance Aerobic.",
      },
      {
        title: "EGYM Cardio",
        body: "Adaptive Geräte mit individueller Belastungssteuerung.",
      },
      {
        title: "Mess- und sichtbar",
        body: "Tests zeigen, wie sich dein Herz-Kreislauf entwickelt.",
      },
    ],
  },
  "gesundheit/rueckentraining": {
    eyebrow: "Rückentraining",
    title: "Kein Rücken, der ewig schweigt.",
    intro:
      "Gezielte Kräftigung, Mobilisation und Entspannung — Rückenbeschwerden vorbeugen oder bestehende Probleme lindern.",
    highlights: [
      {
        title: "Rückenfit & Rücken & Relax",
        body: "Spezialkurse, die genau auf den Rücken zielen.",
      },
      {
        title: "Stabilisation",
        body: "Tiefenmuskulatur und Core sind das Fundament.",
      },
      {
        title: "Physio im Haus",
        body: "Bei akuten Beschwerden direkt zur Therapie wechseln.",
      },
      {
        title: "Alltagsnah trainieren",
        body: "Bewegungsmuster, die du im Büro und im Leben brauchst.",
      },
    ],
  },
  "gesundheit/fitness-im-alter": {
    eyebrow: "Fitness im Alter",
    title: "Stark bleiben, beweglich bleiben.",
    intro:
      "Training, das auf den späteren Lebensabschnitt zugeschnitten ist — Stürze vermeiden, Selbstständigkeit erhalten, Lebensfreude stärken.",
    highlights: [
      {
        title: "Gelenkschonend",
        body: "Aufbau ohne Überlastung — passend zu deinem aktuellen Niveau.",
      },
      {
        title: "Beweglichkeit",
        body: "Mobility und Stretching für mehr Spielraum im Alltag.",
      },
      {
        title: "Gleichgewicht & Koordination",
        body: "Übungen, die Stürzen aktiv vorbeugen.",
      },
      {
        title: "Soziales Miteinander",
        body: "Gruppentraining mit Gleichgesinnten — gut für Körper und Seele.",
      },
    ],
  },
  "gesundheit/gesundheitsfoerderung": {
    eyebrow: "Gesundheitsförderung",
    title: "Vorsorge schlägt Nachsorge.",
    intro:
      "Programme rund um Bewegung, Entspannung und Ernährung — viele davon werden von Krankenkassen bezuschusst.",
    highlights: [
      {
        title: "Bezuschusste Kurse",
        body: "Präventionskurse nach §20 SGB V — bis zu 100 € pro Jahr zurück.",
      },
      {
        title: "Ganzheitlich",
        body: "Bewegung, Entspannung, Ernährung — alle drei Säulen.",
      },
      {
        title: "Niederschwellig",
        body: "Auch für absolute Einsteiger geeignet — wir holen dich ab.",
      },
      {
        title: "Begleitet & nachhaltig",
        body: "Wissenstransfer für gesundes Verhalten im Alltag.",
      },
    ],
  },
  "gesundheit/stressabbau": {
    eyebrow: "Stressabbau",
    title: "Runterkommen — bewusst und regelmäßig.",
    intro:
      "Yoga, Yin Yoga, Pilates, Soundhealing, Sauna — Wege, dem Alltag den Stresslevel zu nehmen.",
    highlights: [
      {
        title: "Yoga & Yin Yoga",
        body: "Vom dynamischen Flow bis zur tiefen Faszienarbeit.",
      },
      {
        title: "Pilates",
        body: "Kontrolle, Atem und Mitte — beruhigend und kräftigend zugleich.",
      },
      {
        title: "Sauna & Wellness",
        body: "Wärme als Reset — körperlich und mental.",
      },
      {
        title: "Soundhealing",
        body: "Spezielle Events mit Klangschalen und Gong — Termine in den News.",
      },
    ],
  },
  "gesundheit/abnehmen": {
    eyebrow: "Abnehmen",
    title: "Nachhaltig statt schnell.",
    intro:
      "Training, Ernährung und Alltag — wir helfen dir, ein gesundes Gewicht zu erreichen und zu halten. Keine Crash-Diäten.",
    highlights: [
      {
        title: "Ausgangslage messen",
        body: "InBody/SECA zeigt, woher du startest und wohin du willst.",
      },
      {
        title: "Cardio + Kraft",
        body: "Die Kombination wirkt — Muskeln verbrennen auch in Ruhe.",
      },
      {
        title: "Fatburner-Kurse",
        body: "Intervall-Workouts, die den Stoffwechsel anheizen.",
      },
      {
        title: "Verlauf statt Zahl",
        body: "Wir schauen auf Trends, nicht auf Tagesschwankungen.",
      },
    ],
  },
  "gesundheit/praeventionskurse": {
    eyebrow: "Präventionskurse",
    title: "Krankenkasse zahlt mit.",
    intro:
      "Zertifizierte Kurse nach §20 SGB V — Rücken, Entspannung, Bewegung. Deine Krankenkasse bezuschusst bis zu 100 € pro Jahr.",
    highlights: [
      {
        title: "Zertifiziert",
        body: "Unsere Präventionskurse erfüllen die Anforderungen der Krankenkassen.",
      },
      {
        title: "Bezuschusst",
        body: "Du zahlst vor, deine Kasse erstattet einen Großteil oder alles.",
      },
      {
        title: "Vielfältige Themen",
        body: "Rückenfit, Yoga, Entspannung — frag nach aktuellen Kursen.",
      },
      {
        title: "Wir helfen beim Antrag",
        body: "Wir geben dir alles an die Hand, was du für die Erstattung brauchst.",
      },
    ],
  },
  "gesundheit/rehasport": {
    eyebrow: "Rehasport",
    title: "100 % Kassenleistung. 0 % Wartezeit.",
    intro:
      "Mit Verordnung deines Arztes startest du sofort. Wir kümmern uns um den Rest — und du um deine Gesundheit.",
    highlights: [
      {
        title: "Voll bezahlt",
        body: "Gesetzliche Krankenkassen tragen die Kosten zu 100 %.",
      },
      {
        title: "Sofort starten",
        body: "Keine Wartezeit — sobald die Verordnung genehmigt ist, geht's los.",
      },
      {
        title: "Rehasport Soft",
        body: "Sanftere Variante mittwochs — für besonders schonenden Wiedereinstieg.",
      },
      {
        title: "Rehasport Plus",
        body: "Kombiniert Gruppentraining mit vollem Studio-Zugang inklusive Sauna.",
      },
      {
        title: "Kurse Mo–Do",
        body: "Morgens 10:00 oder abends 19:00 — passend für jeden Alltag.",
      },
      {
        title: "Geschulte Übungsleitung",
        body: "Zertifizierte Übungsleiter mit medizinischem Hintergrund.",
      },
    ],
    cta: { label: "Mehr erfahren · Kontakt", href: "/kontakt" },
  },
  "gesundheit/firmenfitness": {
    eyebrow: "Firmenfitness",
    title: "Gesunde Mitarbeiter. Stabile Teams.",
    intro:
      "Firmen-Mitgliedschaften für Unternehmen jeder Größe — wir machen es einfach und attraktiv.",
    highlights: [
      {
        title: "Konditionen für Teams",
        body: "Reduzierte Beiträge ab einer bestimmten Mitarbeiterzahl.",
      },
      {
        title: "Unbürokratisch",
        body: "Wir übernehmen Verwaltung und Onboarding — du nur die Anmeldung.",
      },
      {
        title: "Sichtbarer Mehrwert",
        body: "Gesundheit, weniger Krankheitstage, bessere Bindung.",
      },
      {
        title: "Beratung",
        body: "Schreib uns — wir machen dir ein Angebot, das zu eurem Team passt.",
      },
    ],
    cta: { label: "Anfragen", href: "/kontakt" },
  },
};
