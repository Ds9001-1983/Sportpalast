export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  group: "leitung" | "trainer" | "physio" | "team";
  bio?: string;
}

export const TEAM: TeamMember[] = [
  {
    slug: "uygar-oezcelik",
    name: "Uygar Özcelik",
    role: "Inhaber, Geschäftsführer & Trainer",
    group: "leitung",
  },
  {
    slug: "vera-duetting",
    name: "Vera Dütting",
    role: "Inhaberin & Geschäftsführerin",
    group: "leitung",
  },
  {
    slug: "wolfgang-feykens",
    name: "Wolfgang Feykens",
    role: "Inhaber, Geschäftsführer & Trainer",
    group: "leitung",
    bio: "Gründer des Sportpalast — seit 2004 dabei.",
  },
  {
    slug: "marie-bork",
    name: "Marie Bork",
    role: "Sportliche Leitung Group-Fitness",
    group: "trainer",
    bio: "YOGA move Mastertrainerin · Personal Functional Training Coach · TRX GSTC · TMX Coach",
  },
  {
    slug: "thomas-buergerhausen",
    name: "Thomas Bürgerhausen",
    role: "Sportliche Leitung Fitness",
    group: "trainer",
    bio: "Fitness B-Lizenz · Athletiktrainer · Bodybuilding A-Lizenz",
  },
  {
    slug: "thomas-rixgens-luedenbach",
    name: "Thomas Rixgens-Lüdenbach",
    role: "Personal Trainer & Coach",
    group: "trainer",
    bio: "Personal Trainer & Systemischer Coach",
  },
  {
    slug: "evelyn-schuette",
    name: "Evelyn Schütte",
    role: "Trainerin",
    group: "trainer",
    bio: "Sportliche Leitung Meinerzhagen",
  },
  { slug: "viviane-gerhardt", name: "Viviane Gerhardt", role: "Kursleitung", group: "trainer" },
  { slug: "fabian-schuerfeld", name: "Fabian Schürfeld", role: "Trainer (Azubi)", group: "trainer" },
  {
    slug: "michaela-cordella",
    name: "Michaela Cordella",
    role: "Kursleitung",
    group: "trainer",
  },
  { slug: "doris-meisel", name: "Doris Meisel", role: "Kursleitung", group: "trainer" },
  { slug: "kerstin-klein", name: "Kerstin Klein", role: "Kursleitung", group: "trainer" },
  { slug: "christina-sauer", name: "Christina Sauer", role: "Kursleitung", group: "trainer" },
  { slug: "katja-luedenbach", name: "Katja Lüdenbach", role: "Kursleitung", group: "trainer" },
  { slug: "marija", name: "Marija", role: "Kursleitung", group: "trainer" },
  {
    slug: "axel-lukas",
    name: "Axel Lukas",
    role: "WingTsun-Trainer",
    group: "trainer",
    bio: "5. Meistergrad WingTsun · externer Kursanbieter",
  },
  {
    slug: "saskia-klemke",
    name: "Saskia Klemke",
    role: "Praxisleitung Physiotherapie",
    group: "physio",
    bio: "Manuelle Therapie nach Maitland L2a · Manuelle Lymphdrainage · PNF",
  },
  { slug: "agnieszka-reese", name: "Agnieszka Reese", role: "Team", group: "team" },
  { slug: "jil-kamml", name: "Jil Kamml", role: "Team", group: "team" },
  { slug: "manni", name: "Manni", role: "Haustechnik", group: "team" },
];
