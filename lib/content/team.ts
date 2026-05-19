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
  },
  { slug: "marie-bork", name: "Marie Bork", role: "Trainerin", group: "trainer" },
  {
    slug: "thomas-buergerhausen",
    name: "Thomas Bürgerhausen",
    role: "Trainer",
    group: "trainer",
  },
  { slug: "evelyn-schuette", name: "Evelyn Schütte", role: "Trainerin", group: "trainer" },
  { slug: "viviane-gerhardt", name: "Viviane Gerhardt", role: "Kursleitung", group: "trainer" },
  {
    slug: "saskia-klemke",
    name: "Saskia Klemke",
    role: "Physiotherapeutin",
    group: "physio",
  },
  { slug: "fabian-schuerfeld", name: "Fabian Schürfeld", role: "Trainer", group: "trainer" },
  {
    slug: "michaela-cordella",
    name: "Michaela Cordella",
    role: "Kursleitung",
    group: "trainer",
  },
  { slug: "agnieszka-reese", name: "Agnieszka Reese", role: "Team", group: "team" },
  { slug: "jil-kamml", name: "Jil Kamml", role: "Team", group: "team" },
];
