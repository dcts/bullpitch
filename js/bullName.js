const endings = [
  // VERBS
  "kick",
  "stop",
  "able",
  // NOUNS
  "hub",
  "link",
  "tube",
  "risk",
  "now",
  "job",
  "scam",
  "run",
  // WEBSITES
  "ly",
  "ify",
  ".me",
  ".io",
  ".app",
  ".it",
  ".us",
  ".coin"
];

const nouns = [
  "shave",
  "smoke",
  "cat",
  "letter",
  "mom",
  "pump",
  "wash",
  "soap",
  "dream",
  "plan",
  "wish",
  "sniff",
  "fuck",
  "hand",
  "talk",
  "sin",
  "heart",
  "day",
  "you",
  "slap",
  "drugs",
  "pony",
  "lock",
  "beer",
  "pot",
  "drive",
  "Laugh",
  "fool",
  "trip",
  "port",
  "buzz",
  "void",
  "hole",
  "plane",
  "lip",
  "shop",
  "rebel",
  "tooth",
  "nail",
  "snail",
  "shit",
  "die",
  "tax",
  "dog",
  "dock",
  "stalk",
  "talk",
  "touch",
  "wire",
  "sucker"
];

const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1)
};

const bullName = () => {
  const seedNoun = Math.floor(Math.random() * nouns.length);
  const seedEnd = Math.floor(Math.random() * endings.length);
  return capitalize(nouns[seedNoun]) + endings[seedEnd];
};

console.log(bullNames());






