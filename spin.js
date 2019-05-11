// console.log("HI from spin.js");

// random degree function (n = number of spins)
const randomExtraSpins = n => Math.random()*n*360;
const minSpinDegrees = 4 * 360; // 6 spins minimum!
let degreeSpinSum = minSpinDegrees + randomExtraSpins(3); // 3 extra spins max!

// initialize DOM objects
const button = document.getElementById("btn-spinner");
const spinner = document.getElementById("spinner-img");
const bullbar = document.getElementById("bull-bar");

// ON BUTTON CLICK -> SPIN THE WHEEL!
button.addEventListener('click', (event) => {
  // reset
  bullbar.setAttribute("style", "border: none;");
  spinner.innerHTML = "Spin";
  bullbar.innerHTML = "- - - - -";

  // calculate spinner degrees and spin! (transformation)
  degreeSpinSum += minSpinDegrees + randomExtraSpins(3);
  const selectedBezier = selectBezier();
  let buildStyle = `transform: rotate(${degreeSpinSum}deg); transition-timing-function: ${selectedBezier}`;
  spinner.setAttribute("style", buildStyle);

  // wait for spinner transition to end
  $("#spinner-img").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
    bullbar.innerHTML = `${startupify()}` ; //setAttribute("class", "bigfont");
    bullbar.setAttribute("style", "border: 5px solid #8BFFC7; transition: ease 0.25s;");
    button.innerHTML = "Pitch" ; //setAttribute("class", "bigfont");
  });
});


/*
 * SELECT BEZIER
 * randomly picks one predefined bezier transition function
 * resources used: https://codepen.io/Guilh/full/ZQxoOX/
 */
function selectBezier() {
  let sampleArray = [
    "cubic-bezier(0.6, 1.5, 0.6, 1)",
    "cubic-bezier(.1, .9, .9, .1)",
    "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "cubic-bezier(0.25, 0. 1, 0.25, 1)"
  ];
  return sampleArray[Math.floor(Math.random() * sampleArray.length)];
}

/*
 * STARTUPIFY
 * first 600 names scraped from https://tiffzhang.com/startup and saved in an array
 */
function startupify() {
  sampleArray = [
    "PeopleNow",
    "SmellSustain",
    "Sustainify",
    "SustainLink",
    "Stopable",
    "Unfastenable",
    "Warnstr",
    "Provideify",
    "Heightin",
    "Talkit",
    "Flighthub",
    "KingNow",
    "Screamit",
    "Diskable",
    "WhirlPlan",
    "Planr",
    "Libraryly",
    "Yousuffer",
    "Datestr",
    "Youpour",
    "Lessonin",
    "Temptify",
    "Youorange",
    "Textstr",
    "PumpLink",
    "Strapit",
    "Trth",
    "SaveNow",
    "Shad",
    "Remindhub",
    "Impressionly",
    "Realityin",
    "Trembleify",
    "ReleaseNow",
    "Suspecthub",
    "Villager",
    "Controlr",
    "Youspoil",
    "Youlink",
    "Gashub",
    "Speechy",
    "Teait",
    "Youdeath",
    "Youhope",
    "Registr",
    "RockLink",
    "Spark",
    "Smartresult",
    "Wrapin",
    "Trapify",
    "Youbeer",
    "Officerin",
    "ThankLink",
    "Soundly",
    "Accomplishn",
    "Pointhub",
    "Committeey",
    "Weaknessn",
    "Pineify",
    "Employerit",
    "Roleify",
    "Suspectable",
    "Wavely",
    "Womanly",
    "Situationy",
    "Birthdy",
    "Smartrisk",
    "Ziphub",
    "Mealme",
    "Eyein",
    "TrapInvest",
    "InvestNow",
    "SighPlan",
    "Planable",
    "Welcome",
    "Priceify",
    "Stff",
    "Relaxable",
    "Whipit",
    "Determine",
    "Carehub",
    "Chesthub",
    "WishLink",
    "Suit",
    "Rockstr",
    "Printin",
    "Tradeify",
    "Heightme",
    "Reviewstr",
    "Youprick",
    "Filer",
    "Movieify",
    "Tickle",
    "Ordr",
    "Rejectr",
    "Youpower",
    "Journeyly",
    "Insurancely",
    "Highwayly",
    "Perseverely",
    "Topicstr",
    "Smartrace",
    "Achievey",
    "Obligation",
    "Agehub",
    "Smarthoney",
    "Persistable",
    "Tug",
    "Sailhub",
    "ReceptionNow",
    "ShaveNow",
    "Scrapeable",
    "Youvisit",
    "Damagein",
    "Thawme",
    "DesignNow",
    "Smoker",
    "Boyfriendn",
    "Plugin",
    "Yoususpect",
    "AttemptNow",
    "Shopme",
    "Addrss",
    "Scoldn",
    "Packhub",
    "Letterify",
    "Basketr",
    "Familyin",
    "Terrifyable",
    "Whisperly",
    "Membershipn",
    "Paddlehub",
    "Hospitalify",
    "Momhub",
    "Smartvillage",
    "Smartedge",
    "Wriggley",
    "HandSucceed",
    "Smartsucceed",
    "Youbelieve",
    "Fanhub",
    "Impressionr",
    "Youway",
    "Actstr",
    "Smartpush",
    "Wreck",
    "Sectin",
    "Rulen",
    "Smartpaste",
    "WriggleLink",
    "Stirify",
    "Youinfluence",
    "Groundify",
    "Samplein",
    "Tickleable",
    "Undressify",
    "HearingLink",
    "Strengtheny",
    "ClientLink",
    "Stripify",
    "Exploreit",
    "Evnt",
    "Relaxme",
    "Blackly",
    "Collegen",
    "Pointy",
    "Obligationit",
    "Marketingify",
    "Labr",
    "Personr",
    "Productit",
    "Flightify",
    "Employerit",
    "Driverify",
    "Sessionr",
    "Librarystr",
    "ProtectHonor",
    "HonorNow",
    "Separat",
    "Scoldify",
    "Heightn",
    "Passn",
    "Pedaly",
    "FortuneThink",
    "Youthink",
    "Capitalstr",
    "Pumpify",
    "EmployerLink",
    "Stitchable",
    "UseStrike",
    "Strike",
    "Subjectn",
    "Ordern",
    "Pickin",
    "Tamer",
    "Strategystr",
    "Precedestr",
    "Punchhub",
    "Arrivl",
    "Remind",
    "Sportly",
    "Employmenthub",
    "Chapterme",
    "Modelify",
    "Difficultyable",
    "WashNow",
    "Separateme",
    "Issuehub",
    "Smartgirl",
    "Youaccomplish",
    "Attmpt",
    "Relaxable",
    "Smartwhistle",
    "Accomplsh",
    "Rescueable",
    "Weighstr",
    "Raiseit",
    "Nightn",
    "Pass",
    "AccessNow",
    "Soakit",
    "Departmently",
    "Wealthhub",
    "FarmerGive",
    "Giveit",
    "Smartattention",
    "Challengeme",
    "Structure",
    "Smartpiece",
    "Dreamme",
    "Designify",
    "Operationit",
    "Paintingn",
    "Pedalify",
    "Variationit",
    "Celln",
    "PlanNow",
    "Settl",
    "Rotn",
    "Permitn",
    "Planit",
    "Conceptstr",
    "Pressr",
    "Wayable",
    "Wishly",
    "Responsely",
    "Attituder",
    "Examify",
    "Drawingin",
    "Smarttrick",
    "Filen",
    "Occurn",
    "Paus",
    "ReturnNow",
    "Sniffable",
    "Usestr",
    "PushKnow",
    "Knowin",
    "Youtame",
    "Capitally",
    "Solutionhub",
    "Smartearn",
    "Yawnify",
    "Confusin",
    "ReignNow",
    "Shop",
    "Actionhub",
    "Chapterme",
    "Culture",
    "Housen",
    "Pedaly",
    "Fishit",
    "Love",
    "Clss",
    "Robr",
    "Societyr",
    "Foodable",
    "WhipNow",
    "Snoreit",
    "Zoomit",
    "Teachery",
    "Waveme",
    "Head",
    "Subjecthub",
    "Youriver",
    "Conditionit",
    "Paintingly",
    "Theory",
    "Key",
    "Rescueable",
    "Wobble",
    "Keyable",
    "Uniteme",
    "Stockify",
    "Employerit",
    "Learnin",
    "TalkNow",
    "Soothey",
    "Youbook",
    "Dedicateit",
    "Concepthub",
    "Assistanceit",
    "Associationr",
    "Industryme",
    "Designr",
    "Birdit",
    "Brsh",
    "Remov",
    "Retirestr",
    "PourNow",
    "Screwify",
    "Letterit",
    "Newspapern",
    "PointNow",
    "Sinly",
    "Heartly",
    "Contractit",
    "Lengthify",
    "Restaurantly",
    "Smartwarn",
    "Exitit",
    "Smartliving",
    "Youyawn",
    "Noticeit",
    "Childable",
    "Wish",
    "Schooly",
    "Dayit",
    "TruthNow",
    "Desireme",
    "Itemstr",
    "Reducein",
    "Tow",
    "Kind",
    "Sackify",
    "Ratioy",
    "Jobhub",
    "Baseballstr",
    "Preparehub",
    "Inspectionit",
    "Youteaching",
    "Targetable",
    "Wishme",
    "Viewit",
    "Magazinein",
    "Trickly",
    "Complaintr",
    "FactPersist",
    "Persistit",
    "Medicinen",
    "Pat",
    "Intereststr",
    "ProtectNow",
    "Separatein",
    "Tiehub",
    "Presencestr",
    "PreserveLink",
    "Squeakme",
    "Yougift",
    "Youfriend",
    "BudgetLink",
    "Sufferr",
    "Libraryly",
    "Patiencen",
    "Plughub",
    "Warningit",
    "Mathhub",
    "Farmerable",
    "Useme",
    "Sourcehub",
    "Receively",
    "Remainable",
    "Winkin",
    "Tour",
    "Servicely",
    "Directorn",
    "Smartpoke",
    "Yelln",
    "Pointit",
    "Smarttruth",
    "Envisionme",
    "Bankn",
    "PlaceNow",
    "Scrubin",
    "Youtime",
    "Challeng",
    "Robme",
    "Reviewy",
    "Tonguey",
    "Pizzar",
    "CameraNow",
    "Sipr",
    "HealthNow",
    "Sniffly",
    "Emphasisify",
    "Electionme",
    "Metalable",
    "UnpackLink",
    "Sparkhub",
    "Volumely",
    "Incomeit",
    "Instanceme",
    "Youchicken",
    "GasNow",
    "Ski",
    "Namen",
    "Overflowme",
    "Paintify",
    "Policeable",
    "WishNow",
    "SkiLink",
    "StartLink",
    "Sparkl",
    "Scoldin",
    "Trainn",
    "Partr",
    "YearLink",
    "StampNow",
    "Separateify",
    "Youmom",
    "PlantLink",
    "Strengthn",
    "Rinseable",
    "Wantly",
    "Studioy",
    "Wriggleify",
    "Time",
    "Repeatin",
    "Troubler",
    "Areaify",
    "Waitable",
    "Wantify",
    "Wrry",
    "Rejectn",
    "Paintr",
    "Moviehub",
    "Grow",
    "Scarestr",
    "Preserveify",
    "Excitementme",
    "GiftImagine",
    "Imaginey",
    "Affairy",
    "Analystin",
    "Relaxn",
    "Postn",
    "Possessify",
    "BonusNow",
    "Shaveify",
    "Protectionn",
    "Offendhub",
    "ImpressionNow",
    "Slapify",
    "Heightstr",
    "Smartproduce",
    "Accomplishr",
    "Weeky",
    "Dirtme",
    "Careerin",
    "Transportme",
    "Ballr",
    "Policy",
    "LightLink",
    "StuffLink",
    "StitchLink",
    "Storehub",
    "Fact",
    "Remainme",
    "Sparkly",
    "Deliveryify",
    "Learnme",
    "Chanceit",
    "SuccessNow",
    "Slowme",
    "Speedn",
    "PaddleInvest",
    "Investify",
    "Relationit",
    "Youteacher",
    "SavingsNow",
    "Satisfystr",
    "PourStrike",
    "Strikely",
    "Agreemnt",
    "Scattr",
    "Repet",
    "Rollly",
    "Radiately",
    "Depthit",
    "Shoppingly",
    "Topicin",
    "Tremblestr",
    "Rech",
    "Rescuer",
    "Personit",
    "Leadership",
    "AmountLink",
    "Stuffit",
    "Math",
    "Funit",
    "MathLink",
    "Yousqueal",
    "Youofficer",
    "FrontLink",
    "Youspare",
    "Budgt",
    "Replyit",
    "Death",
    "Yousmoke",
    "Desir",
    "ReturnLink",
    "Stuff",
    "Taxable",
    "Tumblely",
    "Aspectify",
    "Basketable",
    "Turn",
    "Saveable",
    "Whisperin",
    "Youtour",
    "Lock",
    "Wordin",
    "Train",
    "Recordstr",
    "Rech",
    "Requestn",
    "Playin",
    "Youthank",
    "Northstr",
    "Pressme",
    "Hairin"
  ];
  return sampleArray[Math.floor(Math.random() * sampleArray.length)];
}

// "SCRAPE" startupify code
// let arr = [];
// for (let i=0; i<12000; i++) {
//   arr.push(startupify(i));
// }
// console.log(arr);
