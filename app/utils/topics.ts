import { faker } from "./fakerGenerator"

export const topics = [
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
  { type: 'number', topic: ["Person", "All topics"], name: "Age", data: (min: number = 18, max: number = 95) => faker.number.int({ min, max }) },
  { type: 'string', topic: ["Person", "All topics"], name: "Biography", data: () => faker.person.bio() },
  { type: 'string', topic: ["Person", "All topics"], name: "Full name", data: () => faker.person.fullName() }, // First name, sur name, sex
  { type: 'string', topic: ["Person", "All topics"], name: "First name", data: () => faker.person.firstName() }, // sex
  { type: 'string', topic: ["Person", "All topics"], name: "Gender", data: () => faker.person.sex() },
  { type: 'string', topic: ["Person", "All topics"], name: "Job area", data: () => faker.person.jobArea() },
  { type: 'string', topic: ["Person", "All topics"], name: "Job descriptor", data: () => faker.person.jobDescriptor() },
  { type: 'string', topic: ["Person", "All topics"], name: "Job title", data: () => faker.person.jobTitle() },
  { type: 'string', topic: ["Person", "All topics"], name: "Job type", data: () => faker.person.jobTitle() },
  { type: 'string', topic: ["Person", "All topics"], name: "Last name", data: () => faker.person.lastName() }, // sex
  { type: 'string', topic: ["Person", "All topics"], name: "Middle name", data: () => faker.person.middleName() }, // sex
  { type: 'string', topic: ["Person", "All topics"], name: "Prefix", data: () => faker.person.prefix() }, // sex
  { type: 'string', topic: ["Person", "All topics"], name: "Suffix", data: () => faker.person.suffix() },
  { type: 'string', topic: ["Person", "All topics"], name: "Zodiac sign", data: () => faker.person.zodiacSign() },
  
  { type: 'string', topic: ["Transport", "All topics"], name: "Aircraft type", data: () => faker.airline.aircraftType() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Airlane", data: () => faker.airline.airline().name },
  { type: 'string', topic: ["Transport", "All topics"], name: "Airplane", data: () => faker.airline.airplane().name },
  { type: 'string', topic: ["Transport", "All topics"], name: "Airport", data: () => faker.airline.airport().name },
  { type: 'string', topic: ["Transport", "All topics"], name: "Flight number", data: () => faker.airline.flightNumber() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Record locator", data: () => faker.airline.recordLocator() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Seat", data: () => faker.airline.seat() }, // type
  { type: 'string', topic: ["Transport", "All topics"], name: "Type of bicycle", data: () => faker.vehicle.bicycle() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Fuel type", data: () => faker.vehicle.fuel() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Manufacturer", data: () => faker.vehicle.manufacturer() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle model", data: () => faker.vehicle.model() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle type", data: () => faker.vehicle.type() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle", data: () => faker.vehicle.vehicle() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle identification number", data: () => faker.vehicle.vin() },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle registration number", data: () => faker.vehicle.vrm() },
  
  { type: 'string', topic: ["Computing", "All topics"], name: "Database type", data: () => faker.database.type() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Database collation", data: () => faker.database.collation() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Database column", data: () => faker.database.column() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Database engine", data: () => faker.database.engine() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Git branch", data: () => faker.git.branch() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Git commit date", data: () => faker.git.commitDate() }, // date
  { type: 'string', topic: ["Computing", "All topics"], name: "Git commit message", data: () => faker.git.commitMessage() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IT text abbreviation", data: () => faker.hacker.abbreviation() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IT adjective", data: () => faker.hacker.adjective() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IT noun", data: () => faker.hacker.noun() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IT phrase", data: () => faker.hacker.phrase() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IT verb", data: () => faker.hacker.verb() },
  { type: 'string', topic: ["Computing", "Person", "All topics"], name: "Username", data: () => faker.internet.userName() }, // First name and Last name
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain name", data: () => faker.internet.domainName() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain suffix", data: () => faker.internet.domainSuffix() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain word", data: () => faker.internet.domainWord() },
  { type: 'string', topic: ["Computing", "Person", "All topics"], name: "Email", data: () => faker.internet.email() },  // First name and Last name, provider
  { type: 'string', topic: ["Computing", "All topics"], name: "Http method", data: () => faker.internet.httpMethod() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Http status code", data: () => faker.internet.httpStatusCode() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IPv4", data: () => faker.internet.ipv4() },
  { type: 'string', topic: ["Computing", "All topics"], name: "IPv6", data: () => faker.internet.ipv6() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Token", data: () => faker.internet.jwt() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Mac address", data: () => faker.internet.mac() },
  { type: 'string', topic: ["Computing", "Person", "All topics"], name: "Password", data: () => faker.internet.password() }, // length
  { type: 'string', topic: ["Computing", "All topics"], name: "Port number", data: () => faker.internet.port() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Web protocol", data: () => faker.internet.protocol() },
  { type: 'string', topic: ["Computing", "All topics"], name: "URL", data: () => faker.internet.url() },
  { type: 'string', topic: ["Computing", "All topics"], name: "User agent", data: () => faker.internet.userAgent() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Common file extension", data: () => faker.system.commonFileExt() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Common file name", data: () => faker.system.commonFileName() }, // Common file name
  { type: 'string', topic: ["Computing", "All topics"], name: "Common file type", data: () => faker.system.commonFileType() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Cron", data: () => faker.system.cron() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Directory path", data: () => faker.system.directoryPath() },
  { type: 'string', topic: ["Computing", "All topics"], name: "File extension", data: () => faker.system.fileExt() },
  { type: 'string', topic: ["Computing", "All topics"], name: "File name", data: () => faker.system.fileName() },
  { type: 'string', topic: ["Computing", "All topics"], name: "File path", data: () => faker.system.filePath() },
  { type: 'string', topic: ["Computing", "All topics"], name: "File type", data: () => faker.system.fileType() },
  { type: 'string', topic: ["Computing", "All topics"], name: "MIME type", data: () => faker.system.mimeType() },
  { type: 'string', topic: ["Computing", "All topics"], name: "Network interface", data: () => faker.system.networkInterface() },
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Alphabet letters", data: () => faker.string.alpha() }, // length (min, max)
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Alpha characters and digits", data: () => faker.string.alphanumeric() }, // length (min, max)
  { type: 'string', topic: ["Computing", "All topics"], name: "Characters", data: () => faker.string.fromCharacters("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz") }, // length (min, max)
  { type: 'string', topic: ["Computing", "All topics"], name: "Nano ID", data: () => faker.string.nanoid() }, // length (min, max)
  { type: 'string', topic: ["Computing", "General", "All topics", "Number"], name: "Digits", data: () => faker.string.numeric() }, // length (min, max)
  { type: 'string', topic: ["Computing", "All topics"], name: "Octal", data: () => faker.string.octal() }, // length (min, max)
  { type: 'string', topic: ["Computing", "All topics"], name: "UTF-16 chars", data: () => faker.string.sample() }, // length (min, max)
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Symbol", data: () => faker.string.symbol() }, // length (min, max)
  { type: 'string', topic: ["Computing", "All topics"], name: "ULID", data: () => faker.string.ulid() }, // date
  { type: 'string', topic: ["Computing", "All topics"], name: "UUID", data: () => faker.string.uuid() },
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Boolean", data: () => faker.datatype.boolean() }, // probability
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "BigInt number", data: () => faker.number.bigInt()}, // length (min, max)
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Binary number", data: () => faker.number.binary() }, // length (min, max)
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Float number", data: () => faker.number.float() }, // length (min, max, functionLengths) multipleOf
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Number", data: () => faker.number.int() }, // length (min, max) multipleOf
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Roman numeral", data: () => faker.number.romanNumeral() }, // length (min, max)
  { type: 'string', topic: ["Number", "All topics"], name: "IMEI number", data: () => faker.phone.imei() },
  { type: 'string', topic: ["Number", "Person", "All topics"], name: "Phone number national", data: () => faker.phone.number({ style: "national" }) },
  { type: 'string', topic: ["Number", "Person", "All topics"], name: "Phone number international", data: () => faker.phone.number({ style: "international" }) },
  { type: 'string', topic: ["Date", "Person", "All topics"], name: "Birth date", data: () => faker.date.birthdate().toISOString().split("T")[0] },
  { type: 'string', topic: ["Date", "General", "All topics"], name: "Any time", data: () => faker.date.between({ from: '2000-01-01', to: '2030-01-01' }).toISOString().split("T")[0] }, // dates
  { type: 'string', topic: ["Date", "All topics"], name: "Future", data: () => faker.date.future().toISOString().split("T")[0] }, // years
  { type: 'string', topic: ["Date", "General", "All topics"], name: "Month", data: () => faker.date.month() },
  { type: 'string', topic: ["Date", "All topics"], name: "Past", data: () => faker.date.past().toISOString().split("T")[0] }, // years
  { type: 'string', topic: ["Date", "All topics"], name: "Recent", data: () => faker.date.recent().toISOString().split("T")[0] }, // days
  { type: 'string', topic: ["Date", "All topics"], name: "Soon", data: () => faker.date.soon().toISOString().split("T")[0] }, // days
  { type: 'string', topic: ["Date", "Geography", "All topics"], name: "Time zone", data: () => faker.location.timeZone() },
  { type: 'string', topic: ["Date", "General", "All topics"], name: "Day of the week", data: () => faker.date.weekday() },
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "CYMK color", data: () => faker.color.cmyk() },
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "HSL color", data: () => faker.color.hsl() },
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "HWB color", data: () => faker.color.hwb() },
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "LAB color", data: () => faker.color.lab() },
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "LCH color", data: () => faker.color.lch() },
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "Hexadecimal", data: () => faker.color.rgb() },
  { type: 'string', topic: ["Color", "General", "All topics"], name: "Color name", data: () => faker.color.human() },
  { type: 'string', topic: ["Company", "All topics"], name: "Buzz adjective", data: () => faker.company.buzzAdjective() },
  { type: 'string', topic: ["Company", "All topics"], name: "Buzz noun", data: () => faker.company.buzzNoun() },
];
