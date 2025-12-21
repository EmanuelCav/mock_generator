import { faker } from "./fakerGenerator"

import { IParameters, ITopic } from "../interface/Column";

export const topics: ITopic[] = [
  { label: 'All topics', value: 'all topics', iconName: 'apps' },
  { label: 'Animal', value: 'animal', iconName: 'paw' },
  { label: 'Book', value: 'book', iconName: 'book-open-page-variant' },
  { label: 'Color', value: 'color', iconName: 'palette' },
  { label: 'Company', value: 'company', iconName: 'domain' },
  { label: 'Computing', value: 'computing', iconName: 'laptop' },
  { label: 'Date', value: 'date', iconName: 'calendar' },
  { label: 'Finance', value: 'finance', iconName: 'cash-multiple' },
  { label: 'Food', value: 'food', iconName: 'food' },
  { label: 'General', value: 'general', iconName: 'star-outline' },
  { label: 'Geography', value: 'geography', iconName: 'map-marker' },
  { label: 'Music', value: 'music', iconName: 'music-note' },
  { label: 'Number', value: 'number', iconName: 'numeric' },
  { label: 'Transport', value: 'transport', iconName: 'car' },
  { label: 'Science', value: 'science', iconName: 'atom' },
  { label: 'Person', value: 'person', iconName: 'account' },
  { label: 'Word', value: 'word', iconName: 'format-letter-case' },
]

export const column = [
  { type: ["min", "max"], topic: ["Person", "All topics"], name: "Age", data: (min: number = 18, max: number = 95) => faker.number.int({ min, max }) },
  { type: [], topic: ["Person", "All topics"], name: "Biography", data: () => faker.person.bio() },
  { type: [], topic: ["Person", "All topics"], name: "Full name", data: () => faker.person.fullName() },
  { type: [], topic: ["Person", "All topics"], name: "Full name female", data: () => faker.person.fullName({ sex: "female" }) },
  { type: [], topic: ["Person", "All topics"], name: "Full name male", data: () => faker.person.fullName({ sex: "male" }) },
  { type: [], topic: ["Person", "All topics"], name: "First name", data: () => faker.person.firstName() },
  { type: [], topic: ["Person", "All topics"], name: "First name female", data: () => faker.person.firstName("female") },
  { type: [], topic: ["Person", "All topics"], name: "First name male", data: () => faker.person.firstName("male") },
  { type: [], topic: ["Person", "All topics"], name: "Gender", data: () => faker.person.sex() },
  { type: [], topic: ["Person", "All topics"], name: "Job area", data: () => faker.person.jobArea() },
  { type: [], topic: ["Person", "All topics"], name: "Job descriptor", data: () => faker.person.jobDescriptor() },
  { type: [], topic: ["Person", "All topics"], name: "Job title", data: () => faker.person.jobTitle() },
  { type: [], topic: ["Person", "All topics"], name: "Job type", data: () => faker.person.jobTitle() },
  { type: [], topic: ["Person", "All topics"], name: "Last name", data: () => faker.person.lastName() },
  { type: [], topic: ["Person", "All topics"], name: "Middle name", data: () => faker.person.middleName() },
  { type: [], topic: ["Person", "All topics"], name: "Middle name female", data: () => faker.person.middleName("female") },
  { type: [], topic: ["Person", "All topics"], name: "Middle name male", data: () => faker.person.middleName("male") },
  { type: [], topic: ["Person", "All topics"], name: "Prefix", data: () => faker.person.prefix() },
  { type: [], topic: ["Person", "All topics"], name: "Suffix", data: () => faker.person.suffix() },
  { type: [], topic: ["Person", "All topics"], name: "Zodiac sign", data: () => faker.person.zodiacSign() },
  { type: [], topic: ["Transport", "All topics"], name: "Aircraft type", data: () => faker.airline.aircraftType() },
  { type: [], topic: ["Transport", "All topics"], name: "Airlane", data: () => faker.airline.airline().name },
  { type: [], topic: ["Transport", "All topics"], name: "Airplane", data: () => faker.airline.airplane().name },
  { type: [], topic: ["Transport", "All topics"], name: "Airport", data: () => faker.airline.airport().name },
  { type: [], topic: ["Transport", "All topics"], name: "Flight number", data: () => faker.airline.flightNumber() },
  { type: [], topic: ["Transport", "All topics"], name: "Record locator", data: () => faker.airline.recordLocator() },
  { type: [], topic: ["Transport", "All topics"], name: "Seat", data: () => faker.airline.seat() },
  { type: [], topic: ["Transport", "All topics"], name: "Type of bicycle", data: () => faker.vehicle.bicycle() },
  { type: [], topic: ["Transport", "All topics"], name: "Fuel type", data: () => faker.vehicle.fuel() },
  { type: [], topic: ["Transport", "All topics"], name: "Manufacturer", data: () => faker.vehicle.manufacturer() },
  { type: [], topic: ["Transport", "All topics"], name: "Vehicle model", data: () => faker.vehicle.model() },
  { type: [], topic: ["Transport", "All topics"], name: "Vehicle type", data: () => faker.vehicle.type() },
  { type: [], topic: ["Transport", "All topics"], name: "Vehicle", data: () => faker.vehicle.vehicle() },
  { type: [], topic: ["Transport", "All topics"], name: "Vehicle identification number", data: () => faker.vehicle.vin() },
  { type: [], topic: ["Transport", "All topics"], name: "Vehicle registration number", data: () => faker.vehicle.vrm() },
  { type: [], topic: ["Animal", "All topics"], name: "Animal", data: () => faker.animal.type() },
  { type: [], topic: ["Animal", "All topics"], name: "Bear", data: () => faker.animal.bear() },
  { type: [], topic: ["Animal", "All topics"], name: "Bird", data: () => faker.animal.bird() },
  { type: [], topic: ["Animal", "All topics"], name: "Cat", data: () => faker.animal.cat() },
  { type: [], topic: ["Animal", "All topics"], name: "Cetacean", data: () => faker.animal.cetacean() },
  { type: [], topic: ["Animal", "All topics"], name: "Cow", data: () => faker.animal.cow() },
  { type: [], topic: ["Animal", "All topics"], name: "Crocodilia", data: () => faker.animal.crocodilia() },
  { type: [], topic: ["Animal", "All topics"], name: "Dog", data: () => faker.animal.dog() },
  { type: [], topic: ["Animal", "All topics"], name: "Fish", data: () => faker.animal.fish() },
  { type: [], topic: ["Animal", "All topics"], name: "Horse", data: () => faker.animal.horse() },
  { type: [], topic: ["Animal", "All topics"], name: "Insect", data: () => faker.animal.insect() },
  { type: [], topic: ["Animal", "All topics"], name: "Lion", data: () => faker.animal.lion() },
  { type: [], topic: ["Animal", "All topics"], name: "Pet name", data: () => faker.animal.petName() },
  { type: [], topic: ["Animal", "All topics"], name: "Rabbit", data: () => faker.animal.rabbit() },
  { type: [], topic: ["Animal", "All topics"], name: "Rodent", data: () => faker.animal.rodent() },
  { type: [], topic: ["Animal", "All topics"], name: "Snake", data: () => faker.animal.snake() },
  { type: [], topic: ["Book", "All topics"], name: "Book author", data: () => faker.book.author() },
  { type: [], topic: ["Book", "All topics"], name: "Book title", data: () => faker.book.title() },
  { type: [], topic: ["Book", "All topics"], name: "Book format", data: () => faker.book.format() },
  { type: [], topic: ["Book", "All topics"], name: "Book genre", data: () => faker.book.genre() },
  { type: [], topic: ["Book", "All topics"], name: "Publisher", data: () => faker.book.publisher() },
  { type: [], topic: ["Book", "All topics"], name: "Series", data: () => faker.book.series() },
  { type: [], topic: ["Computing", "All topics"], name: "Database type", data: () => faker.database.type() },
  { type: [], topic: ["Computing", "All topics"], name: "Database collation", data: () => faker.database.collation() },
  { type: [], topic: ["Computing", "All topics"], name: "Database column", data: () => faker.database.column() },
  { type: [], topic: ["Computing", "All topics"], name: "Database engine", data: () => faker.database.engine() },
  { type: [], topic: ["Computing", "All topics"], name: "Git branch", data: () => faker.git.branch() },
  { type: [], topic: ["Computing", "All topics"], name: "Git commit date", data: () => faker.git.commitDate() }, // date
  { type: [], topic: ["Computing", "All topics"], name: "Git commit message", data: () => faker.git.commitMessage() },
  { type: [], topic: ["Computing", "All topics"], name: "IT text abbreviation", data: () => faker.hacker.abbreviation() },
  { type: [], topic: ["Computing", "All topics"], name: "IT adjective", data: () => faker.hacker.adjective() },
  { type: [], topic: ["Computing", "All topics"], name: "IT noun", data: () => faker.hacker.noun() },
  { type: [], topic: ["Computing", "All topics"], name: "IT phrase", data: () => faker.hacker.phrase() },
  { type: [], topic: ["Computing", "All topics"], name: "IT verb", data: () => faker.hacker.verb() },
  { type: [], topic: ["Computing", "Person", "All topics"], name: "Username", data: () => faker.internet.username() },
  { type: [], topic: ["Computing", "All topics"], name: "Domain name", data: () => faker.internet.domainName() },
  { type: [], topic: ["Computing", "All topics"], name: "Domain suffix", data: () => faker.internet.domainSuffix() },
  { type: [], topic: ["Computing", "All topics"], name: "Domain word", data: () => faker.internet.domainWord() },
  { type: [], topic: ["Computing", "Person", "All topics"], name: "Email", data: () => faker.internet.email() }, // provider
  { type: [], topic: ["Computing", "All topics"], name: "Http method", data: () => faker.internet.httpMethod() },
  { type: [], topic: ["Computing", "All topics"], name: "Http status code", data: () => faker.internet.httpStatusCode() },
  { type: [], topic: ["Computing", "All topics"], name: "IPv4", data: () => faker.internet.ipv4() },
  { type: [], topic: ["Computing", "All topics"], name: "IPv6", data: () => faker.internet.ipv6() },
  { type: [], topic: ["Computing", "All topics"], name: "Token", data: () => faker.internet.jwt() },
  { type: [], topic: ["Computing", "All topics"], name: "Mac address", data: () => faker.internet.mac() },
  { type: [], topic: ["Computing", "Person", "All topics"], name: "Password", data: () => faker.internet.password() }, // length
  { type: [], topic: ["Computing", "All topics"], name: "Port number", data: () => faker.internet.port() },
  { type: [], topic: ["Computing", "All topics"], name: "Web protocol", data: () => faker.internet.protocol() },
  { type: [], topic: ["Computing", "All topics"], name: "URL", data: () => faker.internet.url() }, // protocol
  { type: [], topic: ["Computing", "All topics"], name: "User agent", data: () => faker.internet.userAgent() },
  { type: [], topic: ["Computing", "All topics"], name: "Common file extension", data: () => faker.system.commonFileExt() },
  { type: [], topic: ["Computing", "All topics"], name: "Common file name", data: () => faker.system.commonFileName() }, // Common file name
  { type: [], topic: ["Computing", "All topics"], name: "Common file type", data: () => faker.system.commonFileType() },
  { type: [], topic: ["Computing", "All topics"], name: "Cron", data: () => faker.system.cron() },
  { type: [], topic: ["Computing", "All topics"], name: "Directory path", data: () => faker.system.directoryPath() },
  { type: [], topic: ["Computing", "All topics"], name: "File extension", data: () => faker.system.fileExt() },
  { type: [], topic: ["Computing", "All topics"], name: "File name", data: () => faker.system.fileName() },
  { type: [], topic: ["Computing", "All topics"], name: "File path", data: () => faker.system.filePath() },
  { type: [], topic: ["Computing", "All topics"], name: "File type", data: () => faker.system.fileType() },
  { type: [], topic: ["Computing", "All topics"], name: "MIME type", data: () => faker.system.mimeType() },
  { type: [], topic: ["Computing", "All topics"], name: "Network interface", data: () => faker.system.networkInterface() },
  { type: ["min", "max"], topic: ["Computing", "General", "All topics"], name: "Alphabet letters", data: (min: number = 1, max: number = 10) => faker.string.alpha({ length: { max, min } }) },
  { type: ["min", "max"], topic: ["Computing", "General", "All topics"], name: "Alpha characters and digits", data: (min: number = 1, max: number = 10) => faker.string.alphanumeric({ length: { max, min } }) },
  { type: ["min", "max"], topic: ["Computing", "All topics"], name: "Characters", data: (min: number = 1, max: number = 1) => faker.string.fromCharacters("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", { min, max }) },
  { type: ["min", "max"], topic: ["Computing", "All topics"], name: "Nano ID", data: (min: number = 13, max: number = 37) => faker.string.nanoid({ max, min }) },
  { type: ["min", "max"], topic: ["Computing", "General", "All topics", "Number"], name: "Digits", data: (min: number = 1, max: number = 40) => faker.string.numeric({ length: { max, min } }) },
  { type: ["min", "max"], topic: ["Computing", "All topics"], name: "Octal", data: (min: number = 1, max: number = 10) => faker.string.octal({ length: { min, max } }) },
  { type: ["min", "max"], topic: ["Computing", "All topics"], name: "UTF-16 chars", data: (min: number = 1, max: number = 10) => faker.string.sample({ min, max }) },
  { type: ["min", "max"], topic: ["Computing", "General", "All topics"], name: "Symbol", data: (min: number = 1, max: number = 1) => faker.string.symbol({ max, min }) },
  { type: [], topic: ["Computing", "All topics"], name: "ULID", data: () => faker.string.ulid() },
  { type: [], topic: ["Computing", "All topics"], name: "UUID", data: () => faker.string.uuid() },
  { type: [], topic: ["Computing", "General", "All topics"], name: "Boolean", data: () => faker.datatype.boolean() },  // probability
  { type: ["min", "max"], topic: ["Computing", "Number", "All topics"], name: "BigInt number", data: (min: number = 0, max: number = 1000000) => faker.number.bigInt({ min, max }) },
  { type: ["min", "max"], topic: ["Computing", "Number", "All topics"], name: "Binary number", data: (min: number = 0, max: number = 65535) => faker.number.binary({ max, min }) },
  { type: ["min", "max"], topic: ["Computing", "Number", "All topics"], name: "Float number", data: (min: number = 0, max: number = 10000) => faker.number.float({ max, min }) }, // functionLengths, multipleOf
  { type: ["min", "max"], topic: ["Computing", "Number", "All topics"], name: "Number", data: (min: number = 0, max: number = 1000000) => faker.number.int({ max, min }) }, // multipleOf
  { type: ["min", "max"], topic: ["Computing", "Number", "All topics"], name: "Roman numeral", data: (min: number = 1, max: number = 1000) => faker.number.romanNumeral({ max, min }) },
  { type: [], topic: ["Number", "All topics"], name: "IMEI number", data: () => faker.phone.imei() },
  { type: [], topic: ["Number", "Person", "All topics"], name: "Phone number national", data: () => faker.phone.number({ style: "national" }) },
  { type: [], topic: ["Number", "Person", "All topics"], name: "Phone number international", data: () => faker.phone.number({ style: "international" }) },
  { type: ["minDate", "maxDate"], topic: ["Date", "Person", "All topics"], name: "Birthdate", data: (min: number = 1940, max: number = 2007) => faker.date.between({ from: `${min}-01-01T00:00:00.000Z`, to: `${max}-01-01T00:00:00.000Z` }).toISOString().split("T")[0] },
  { type: ["min", "max"], topic: ["Date", "General", "All topics"], name: "Year", data: (min: number = 1940, max: number = new Date().getFullYear() - 1) => faker.number.int({ min, max }) },
  { type: [], topic: ["Date", "General", "All topics"], name: "Any datatime", data: () => faker.date.anytime() },
  { type: [], topic: ["Date", "General", "All topics"], name: "Any date", data: () => faker.date.anytime().toISOString().split("T")[0] }, // dates
  { type: ["minDate", "maxDate"], topic: ["Date", "General", "All topics"], name: "Date", data: (min: number = 1980, max: number = new Date().getFullYear() - 1) => faker.date.between({ from: `${min}-01-01T00:00:00.000Z`, to: `${max}-01-01T00:00:00.000Z` }).toISOString().split("T")[0] },
  { type: ["max"], topic: ["Date", "All topics"], name: "Future datetime", data: (min: number = 90) => faker.date.future({ years: min }) },
  { type: ["max"], topic: ["Date", "All topics"], name: "Future date", data: (min: number = 90) => faker.date.future({ years: min }).toISOString().split("T")[0] },
  { type: [], topic: ["Date", "General", "All topics"], name: "Month", data: () => faker.date.month() },
  { type: ["min"], topic: ["Date", "All topics"], name: "Past datetime", data: (min: number = 90) => faker.date.past({ years: min }) },
  { type: ["min"], topic: ["Date", "All topics"], name: "Past date", data: (min: number = 90) => faker.date.past({ years: min }).toISOString().split("T")[0] },
  { type: ["min"], topic: ["Date", "All topics"], name: "Recent datetime", data: (min: number = 1) => faker.date.recent({ days: min }) },
  { type: ["max"], topic: ["Date", "All topics"], name: "Soon datetime", data: (min: number = 1) => faker.date.soon({ days: min }) },
  { type: [], topic: ["Date", "Geography", "All topics"], name: "Time zone", data: () => faker.location.timeZone() },
  { type: [], topic: ["Date", "General", "All topics"], name: "Day of the week", data: () => faker.date.weekday() },
  { type: [], topic: ["Color", "Computing", "All topics"], name: "CYMK color", data: () => faker.color.cmyk() },
  { type: [], topic: ["Color", "Computing", "All topics"], name: "HSL color", data: () => faker.color.hsl() },
  { type: [], topic: ["Color", "Computing", "All topics"], name: "HWB color", data: () => faker.color.hwb() },
  { type: [], topic: ["Color", "Computing", "All topics"], name: "LAB color", data: () => faker.color.lab() },
  { type: [], topic: ["Color", "Computing", "All topics"], name: "LCH color", data: () => faker.color.lch() },
  { type: [], topic: ["Color", "Computing", "All topics"], name: "Hexadecimal", data: () => faker.color.rgb() },
  { type: [], topic: ["Color", "General", "All topics"], name: "Color name", data: () => faker.color.human() },
  { type: [], topic: ["Company", "All topics"], name: "Buzz adjective", data: () => faker.company.buzzAdjective() },
  { type: [], topic: ["Company", "All topics"], name: "Buzz noun", data: () => faker.company.buzzNoun() },
  { type: [], topic: ["Company", "All topics"], name: "Buzz phrase", data: () => faker.company.buzzPhrase() },
  { type: [], topic: ["Company", "All topics"], name: "Buzz verb", data: () => faker.company.buzzVerb() },
  { type: [], topic: ["Company", "All topics"], name: "Catch phrase", data: () => faker.company.catchPhrase() },
  { type: [], topic: ["Company", "All topics"], name: "Catch phrase adjective", data: () => faker.company.catchPhraseAdjective() },
  { type: [], topic: ["Company", "All topics"], name: "Catch phrase descriptor", data: () => faker.company.catchPhraseDescriptor() },
  { type: [], topic: ["Company", "All topics"], name: "Catch phrase noun", data: () => faker.company.catchPhraseNoun() },
  { type: [], topic: ["Company", "General", "Person", "All topics"], name: "Company name", data: () => faker.company.name() },
  { type: ["length"], topic: ["Finance", "Person", "All topics"], name: "Account number", data: () => faker.finance.accountNumber() },
  { type: ["min", "max"], topic: ["Finance", "Company", "General", "All topics"], name: "Price", data: (min: number = 1, max: number = 1000) => faker.finance.amount({ symbol: "$", dec: 2, max, min }) },
  { type: [], topic: ["Finance", "All topics"], name: "Bitcoin address", data: () => faker.finance.bitcoinAddress() },
  { type: [], topic: ["Finance", "All topics"], name: "Credit card CVV", data: () => faker.finance.creditCardCVV() },
  { type: [], topic: ["Finance", "All topics"], name: "Credit card issuer", data: () => faker.finance.creditCardIssuer() },
  { type: [], topic: ["Finance", "All topics"], name: "Credit card number", data: () => faker.finance.creditCardNumber() },
  { type: [], topic: ["Finance", "All topics"], name: "Currency code", data: () => faker.finance.currencyCode() },
  { type: [], topic: ["Finance", "All topics"], name: "Currency name", data: () => faker.finance.currencyName() },
  { type: [], topic: ["Finance", "All topics"], name: "Currency numeric code", data: () => faker.finance.currencyNumericCode() },
  { type: [], topic: ["Finance", "All topics"], name: "Currency symbol", data: () => faker.finance.currencySymbol() },
  { type: [], topic: ["Finance", "All topics"], name: "Ethereum address", data: () => faker.finance.ethereumAddress() },
  { type: [], topic: ["Finance", "All topics"], name: "IBAN", data: () => faker.finance.iban() },
  { type: [], topic: ["Finance", "All topics"], name: "SWIFT/BIC", data: () => faker.finance.bic() },
  { type: [], topic: ["Finance", "All topics"], name: "Litecoin address", data: () => faker.finance.litecoinAddress() },
  { type: [], topic: ["Finance", "Number", "All topics"], name: "PIN number", data: () => faker.finance.pin() },
  { type: [], topic: ["Finance", "Number", "All topics"], name: "Routing number", data: () => faker.finance.routingNumber() },
  { type: [], topic: ["Finance", "All topics"], name: "Transaction description", data: () => faker.finance.transactionDescription() },
  { type: [], topic: ["Finance", "All topics"], name: "Transaction type", data: () => faker.finance.transactionType() },
  { type: [], topic: ["Food", "All topics"], name: "Food adjective", data: () => faker.food.adjective() },
  { type: [], topic: ["Food", "All topics"], name: "Food description", data: () => faker.food.description() },
  { type: [], topic: ["Food", "All topics"], name: "Dish", data: () => faker.food.dish() },
  { type: [], topic: ["Food", "All topics"], name: "Food's ethnic category", data: () => faker.food.ethnicCategory() },
  { type: [], topic: ["Food", "All topics"], name: "Fruit", data: () => faker.food.fruit() },
  { type: [], topic: ["Food", "All topics"], name: "Ingredient", data: () => faker.food.ingredient() },
  { type: [], topic: ["Food", "All topics"], name: "Meat", data: () => faker.food.meat() },
  { type: [], topic: ["Food", "All topics"], name: "Spice", data: () => faker.food.spice() },
  { type: [], topic: ["Food", "All topics"], name: "Vegetable", data: () => faker.food.vegetable() },
  { type: [], topic: ["Geography", "All topics"], name: "Building number", data: () => faker.location.buildingNumber() },
  { type: [], topic: ["Geography", "All topics"], name: "Cardinal direction", data: () => faker.location.cardinalDirection() },
  { type: [], topic: ["Geography", "All topics"], name: "City", data: () => faker.location.city() },
  { type: [], topic: ["Geography", "All topics"], name: "Continent", data: () => faker.location.continent() },
  { type: [], topic: ["Geography", "All topics"], name: "Country", data: () => faker.location.country() },
  { type: [], topic: ["Geography", "All topics"], name: "Country code", data: () => faker.location.countryCode() },
  { type: [], topic: ["Geography", "All topics"], name: "County", data: () => faker.location.county() },
  { type: [], topic: ["Geography", "All topics"], name: "Direction", data: () => faker.location.direction() },
  { type: [], topic: ["Geography", "All topics"], name: "Language", data: () => faker.location.language().name },
  { type: [], topic: ["Geography", "All topics"], name: "Latitude", data: () => faker.location.latitude().toString() },
  { type: [], topic: ["Geography", "All topics"], name: "Longitude", data: () => faker.location.longitude().toString() },
  { type: [], topic: ["Geography", "All topics"], name: "GPS coordinate", data: () => JSON.stringify(faker.location.nearbyGPSCoordinate()) },
  { type: [], topic: ["Geography", "All topics"], name: "Secondary address", data: () => faker.location.secondaryAddress() },
  { type: [], topic: ["Geography", "All topics"], name: "State", data: () => faker.location.state() },
  { type: [], topic: ["Geography", "All topics"], name: "Street", data: () => faker.location.street() },
  { type: [], topic: ["Geography", "Person", "All topics"], name: "Street address", data: () => faker.location.streetAddress() },
  { type: [], topic: ["Geography", "All topics"], name: "Zip code", data: () => faker.location.zipCode() },
  { type: [], topic: ["Music", "All topics"], name: "Album", data: () => faker.music.album() },
  { type: [], topic: ["Music", "All topics"], name: "Artist", data: () => faker.music.artist() },
  { type: [], topic: ["Music", "All topics"], name: "Music genre", data: () => faker.music.genre() },
  { type: [], topic: ["Music", "All topics"], name: "Song name", data: () => faker.music.songName() },
  { type: [], topic: ["Science", "All topics"], name: "Chemical element", data: () => faker.science.chemicalElement().name },
  { type: [], topic: ["Science", "All topics"], name: "Scientific unit", data: () => faker.science.unit().name },
  { type: [], topic: ["Word", "All topics"], name: "Adjective", data: () => faker.word.adjective() },
  { type: [], topic: ["Word", "All topics"], name: "Adverb", data: () => faker.word.adverb() },
  { type: [], topic: ["Word", "All topics"], name: "Conjunction", data: () => faker.word.conjunction() },
  { type: [], topic: ["Word", "All topics"], name: "Interjection", data: () => faker.word.interjection() },
  { type: [], topic: ["Word", "All topics"], name: "Noun", data: () => faker.word.noun() },
  { type: [], topic: ["Word", "All topics"], name: "Preposition", data: () => faker.word.preposition() },
  { type: [], topic: ["Word", "All topics"], name: "Word", data: () => faker.word.sample() },
  { type: [], topic: ["Word", "All topics"], name: "Verb", data: () => faker.word.verb() },
  { type: ["min", "max"], topic: ["Word", "All topics"], name: "Separate words", data: (min: number = 1, max: number = 8) => faker.word.words({ count: { max, min } }) },
  { type: [], topic: ["Image", "General", "All topics"], name: "Image", data: () => faker.image.url() },
  { type: [], topic: ["Image", "Person", "All topics"], name: "Avatar", data: () => faker.image.avatar() },
  { type: [], topic: ["Image", "Computing", "All topics"], name: "Avatar GitHub", data: () => faker.image.avatarGitHub() },
  { type: [], topic: ["Image", "All topics"], name: "Data uri", data: () => faker.image.dataUri() },
  { type: [], topic: ["Image", "Person", "All topics"], name: "Person portrait", data: () => faker.image.personPortrait() },
  { type: [], topic: ["Image", "All topics"], name: "Url lorem flickr", data: () => faker.image.urlLoremFlickr() },
  { type: [], topic: ["Image", "All topics"], name: "Url picsum photos", data: () => faker.image.urlPicsumPhotos() },
  { type: [], topic: ["All topics", "Company"], name: "Shop department", data: () => faker.commerce.department() },
  { type: [], topic: ["All topics", "Company"], name: "ISBN indentifier", data: () => faker.commerce.isbn() },
  { type: [], topic: ["All topics", "Company"], name: "Product name", data: () => faker.commerce.product() },
  { type: [], topic: ["All topics", "Company"], name: "Product adjective ", data: () => faker.commerce.productAdjective() },
  { type: [], topic: ["All topics", "Company"], name: "Product description", data: () => faker.commerce.productDescription() },
  { type: [], topic: ["All topics", "Company"], name: "Product material", data: () => faker.commerce.productMaterial() },
  { type: ["min", "max"], topic: ["All topics", "Word"], name: "Lines", data: (min: number = 1, max: number = 5) => faker.lorem.lines({ max, min }) },
  { type: ["min", "max"], topic: ["All topics", "Word", "General"], name: "Paragraph", data: (min: number = 1, max: number = 3) => faker.lorem.paragraph({ max, min }) },
  { type: ["min", "max"], topic: ["All topics", "Word"], name: "Paragraphs", data: (min: number = 1, max: number = 3) => faker.lorem.paragraphs({ min, max }) },
  { type: ["min", "max"], topic: ["All topics", "Word", "General"], name: "Sentence", data: (min: number = 3, max: number = 10) => faker.lorem.sentence({ max, min }) },
  { type: ["min", "max"], topic: ["All topics", "Word"], name: "Sentences", data: (min: number = 2, max: number = 6) => faker.lorem.sentences({ max, min }) },
  { type: [], topic: ["All topics", "Word"], name: "Slug", data: () => faker.lorem.slug() },
  { type: [], topic: ["All topics", "Word"], name: "Text", data: () => faker.lorem.text() },
  { type: [], topic: ["All topics", "General", "Computing"], name: "Array elements", data: (_: number, __: number, array: string[] = ["Element 1"]) => faker.helpers.arrayElement(array) },
  { type: [], topic: ["All topics", "General", "Number"], name: "Row number", data: () => null },
];

export const fieldDefaultValue = (fieldName: string): IParameters => {

  switch (fieldName) {
    case "Age":
      return {
        min: 18,
        max: 95
      }

    case "Alphabet letters":
      return {
        min: 1,
        max: 10
      }

    case "Alpha characters and digits":
      return {
        min: 1,
        max: 10
      }

    case "Alpha characters and digits":
      return {
        min: 1,
        max: 10
      }

    case "Characters":
      return {
        min: 1,
        max: 1
      }

    case "Nano ID":
      return {
        min: 13,
        max: 37
      }

    case "Digits":
      return {
        min: 1,
        max: 40
      }

    case "Octal":
      return {
        min: 1,
        max: 10
      }

    case "UTF-16 chars":
      return {
        min: 1,
        max: 10
      }

    case "Symbol":
      return {
        min: 1,
        max: 1
      }

    case "BigInt number":
      return {
        min: 1,
        max: 1000000
      }

    case "Binary number":
      return {
        min: 1,
        max: 65535
      }

    case "Float number":
      return {
        min: 1,
        max: 10000
      }

    case "Number":
      return {
        min: 0,
        max: 1000000
      }

    case "Roman numeral":
      return {
        min: 1,
        max: 1000
      }

    case "Future datetime":
      return {
        min: 90
      }

    case "Future date":
      return {
        min: 90
      }

    case "Past datetime":
      return {
        min: 90
      }

    case "Past date":
      return {
        min: 90
      }

    case "Recent datetime":
      return {
        min: 1
      }

    case "Soon datetime":
      return {
        min: 1
      }

    case "Price":
      return {
        min: 1,
        max: 1000
      }

    case "Separate words":
      return {
        min: 1,
        max: 8
      }

    case "Lines":
      return {
        min: 1,
        max: 5
      }

    case "Paragraph":
      return {
        min: 1,
        max: 3
      }

    case "Paragraphs":
      return {
        min: 1,
        max: 3
      }

    case "Sentence":
      return {
        min: 3,
        max: 10
      };

    case "Sentences":
      return {
        min: 2,
        max: 6
      };

    case "Year":
      return {
        min: 1900,
        max: new Date().getFullYear() - 1
      }

    case "Birthdate":
      return {
        min: 1940,
        max: 2007
      }

    case "Date":
      return {
        min: 1980,
        max: new Date().getFullYear() - 1
      }

    default:
      return {
        min: 1,
        max: 8
      };
  }

}

export const topicsLowLength = (topic: string): number => {

  switch (topic) {
    case "Sentences":
      return 2

    case "Sentence":
      return 2

    case "Paragraphs":
      return 1

    case "Paragraph":
      return 1

    case "Lines":
      return 1

    case "Separate words":
      return 2

    case "Past date":
      return 4

    case "Past datetime":
      return 4

    case "Future date":
      return 4

    case "Future datetime":
      return 4

    case "Age":
      return 3

    case "Symbol":
      return 3

    case "UTF-16 chars":
      return 3

    case "Octal":
      return 3

    case "Digits":
      return 3

    case "Nano ID":
      return 3

    case "Characters":
      return 3

    case "Alpha characters and digits":
      return 3

    case "Alphabet letters":
      return 3

    default:
      return 12
  }

}