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
  "hand",
  "talk",
  "sin",
  "heart",
  "day",
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

/*
 * generates random startup name! (NOT IN USE ANY MORE!)
 * no session memory
 */
const bullName = () => {
  const seedNoun = Math.floor(Math.random() * nouns.length);
  const seedEnd = Math.floor(Math.random() * endings.length);
  return capitalize(nouns[seedNoun]) + endings[seedEnd];
};

/*
 * generates random startup name!
 * each time the app is loaded a list of non repetitive bullnames is generated
 * and stored in bullNamesNoRepetition array.
 * then the seed just grabs the next bullname
 * => with session memory
 */
const generateBullNamesArrayWithNoRepetition = n => {
  let nounsLong = replicateAndShuffle(nouns, n); // nouns
  let endingsLong = replicateAndShuffle(endings, n); // endings
  return nounsLong.map((item, indx) => item + endingsLong[indx]) // combination
};

const replicateAndShuffle = (array, n) => {
  result = [];
  maxIter = Math.ceil(n / array.length);
  for (let i=0; i<maxIter; i++) {
    arrayCopy = array.slice();
    shuffleArray(arrayCopy);
    result = result.concat(arrayCopy);
  }
  return result.splice(0, n);
};

const shuffleArray = array => {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const bullNameWithSeed = (seed) => {
  return bullNamesNoRepetition[seed];
};

/*
 * initialize bullNames array with optimized repetition pattern!
 */
const bullNamesPerSession = 1000;
let bullNamesNoRepetition = generateBullNamesArrayWithNoRepetition(bullNamesPerSession);








