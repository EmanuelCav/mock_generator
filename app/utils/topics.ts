export const topics = [
  { label: 'All topics', value: 'all topics', iconName: 'paw' },
  { label: 'Animal', value: 'animal', iconName: 'paw' },
  { label: 'Book', value: 'book', iconName: 'paw' },
  { label: 'Color', value: 'color', iconName: 'office-building' },
  { label: 'Company', value: 'company', iconName: 'office-building' },
  { label: 'Computing', value: 'computing', iconName: 'office-building' },
  { label: 'Date', value: 'date', iconName: 'office-building' },
  { label: 'Finance', value: 'finance', iconName: 'office-building' },
  { label: 'Food', value: 'food', iconName: 'food' },
  { label: 'General', value: 'general', iconName: 'office-building' },
  { label: 'Geography', value: 'geography', iconName: 'map-marker' },
  { label: 'Music', value: 'music', iconName: 'account' },
  { label: 'Number', value: 'number', iconName: 'account' },
  { label: 'Transport', value: 'transport', iconName: 'account' },
  { label: 'Science', value: 'science', iconName: 'account' },
  { label: 'Person', value: 'person', iconName: 'account' },
  { label: 'Word', value: 'word', iconName: 'account' },
]

export const column = [
  { type: 'number', topic: ["Person", "All topics"], name: "Age" },
  { type: 'number', topic: ["Person", "All topics"], name: "Biography" },
  { type: 'string', topic: ["Person", "All topics"], name: "Full name" },
  { type: 'string', topic: ["Person", "All topics"], name: "First name" },
  { type: 'string', topic: ["Person", "All topics"], name: "Gender" },
  { type: 'string', topic: ["Person", "All topics"], name: "Job area" },
  { type: 'string', topic: ["Person", "All topics"], name: "Job descriptor" },
  { type: 'string', topic: ["Person", "All topics"], name: "Job title" },
  { type: 'string', topic: ["Person", "All topics"], name: "Job type" },
  { type: 'string', topic: ["Person", "All topics"], name: "Last name" },
  { type: 'string', topic: ["Person", "All topics"], name: "Middle name" },
  { type: 'string', topic: ["Person", "All topics"], name: "Prefix" },
  { type: 'string', topic: ["Person", "All topics"], name: "Suffix" },
  { type: 'string', topic: ["Person", "All topics"], name: "Zodiac sign" },

  { type: 'string', topic: ["Transport", "All topics"], name: "Aircraft type" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Airlane" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Airplane" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Airport" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Flight number" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Record locator" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Seat" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Type of bicycle" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Fuel type" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Manufacturer" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle model" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle type" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle identification number" },
  { type: 'string', topic: ["Transport", "All topics"], name: "Vehicle registration number" },

  { type: 'string', topic: ["Animal", "All topics"], name: "Animal" }, // Type.  Los de abajo revisar el name
  { type: 'string', topic: ["Animal", "All topics"], name: "Bear" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Bird" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Cat" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Cetacean" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Cow" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Crocodilia" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Dog" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Fish" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Horse" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Insect" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Lion" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Pet name" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Rabbit" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Rodent" },
  { type: 'string', topic: ["Animal", "All topics"], name: "Snake" },

  { type: 'string', topic: ["Book", "All topics"], name: "Book author" },
  { type: 'string', topic: ["Book", "All topics"], name: "Book title" },
  { type: 'string', topic: ["Book", "All topics"], name: "Book format" },
  { type: 'string', topic: ["Book", "All topics"], name: "Book genre" },
  { type: 'string', topic: ["Book", "All topics"], name: "Publisher" },
  { type: 'string', topic: ["Book", "All topics"], name: "Series" },

  { type: 'string', topic: ["Computing", "All topics"], name: "Database type" }, // faker.database.type()
  { type: 'string', topic: ["Computing", "All topics"], name: "Database collation" }, // faker.database.collation()
  { type: 'string', topic: ["Computing", "All topics"], name: "Database column" }, // faker.database.column()
  { type: 'string', topic: ["Computing", "All topics"], name: "Database engine" }, // faker.database.engine()
  { type: 'string', topic: ["Computing", "All topics"], name: "Git branch" }, // faker.git. // TODO abajo
  { type: 'string', topic: ["Computing", "All topics"], name: "Git commit date" },
  { type: 'string', topic: ["Computing", "All topics"], name: "Git commit message" },
  { type: 'string', topic: ["Computing", "All topics"], name: "IT text abbreviation" }, // faker.hacker.abbreviation
  { type: 'string', topic: ["Computing", "All topics"], name: "IT adjective" }, // faker.hacker.adjective
  { type: 'string', topic: ["Computing", "All topics"], name: "IT noun" }, // faker.hacker.noun
  { type: 'string', topic: ["Computing", "All topics"], name: "IT phrase" }, // faker.hacker.phrase
  { type: 'string', topic: ["Computing", "All topics"], name: "IT verb" }, // faker.hacker.ingverb o faker.hacker.verb
  { type: 'string', topic: ["Computing", "Person", "All topics"], name: "Username" }, // faker.internet.username()
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain name" }, // faker.internet.domainName()
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain suffix" }, // faker.internet.domainSuffix()
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain word" }, // faker.internet.domainWord()
  { type: 'string', topic: ["Computing", "All topics"], name: "Domain suffix" }, // faker.internet.domainSuffix()
  { type: 'string', topic: ["Computing", "Person", "All topics"], name: "Email" }, // faker.internet.email()
  // { type: 'string', topic: ["Computing", "All topics"], name: "Title" }, // faker.internet.emoji
  { type: 'string', topic: ["Computing", "All topics"], name: "Http method" }, // faker.internet.httpMethod
  { type: 'string', topic: ["Computing", "All topics"], name: "Http status code" }, // faker.internet.httpMethod
  { type: 'string', topic: ["Computing", "All topics"], name: "IPv4" }, // faker.internet.ipv4
  { type: 'string', topic: ["Computing", "All topics"], name: "IPv6" }, // faker.internet.ipv6
  { type: 'string', topic: ["Computing", "All topics"], name: "Token" }, // faker.internet.jwt
  { type: 'string', topic: ["Computing", "All topics"], name: "Mac address" }, // faker.internet.mac
  { type: 'string', topic: ["Computing", "Person", "All topics"], name: "Password" }, // faker.internet.password
  { type: 'string', topic: ["Computing", "All topics"], name: "Port number" }, // faker.internet.port
  { type: 'string', topic: ["Computing", "All topics"], name: "Web protocol" }, // faker.internet.protocol
  { type: 'string', topic: ["Computing", "All topics"], name: "URL" }, // faker.internet.url
  { type: 'string', topic: ["Computing", "All topics"], name: "User agent" }, // faker.internet.userAgent
  { type: 'string', topic: ["Computing", "All topics"], name: "Common file extension" }, // faker.internet.commonFileExt
  { type: 'string', topic: ["Computing", "All topics"], name: "Common file name" }, // faker.internet.commonFileName
  { type: 'string', topic: ["Computing", "All topics"], name: "Common file type" }, // faker.internet.commonFileType
  { type: 'string', topic: ["Computing", "All topics"], name: "Cron" }, // faker.internet.cron
  { type: 'string', topic: ["Computing", "All topics"], name: "Directory path" }, // faker.internet.directoryPath
  { type: 'string', topic: ["Computing", "All topics"], name: "File extension" }, // faker.internet.fileExt
  { type: 'string', topic: ["Computing", "All topics"], name: "File name" }, // faker.internet.fileName
  { type: 'string', topic: ["Computing", "All topics"], name: "File path" }, // faker.internet.filePath
  { type: 'string', topic: ["Computing", "All topics"], name: "File type" }, // faker.internet.fileType
  { type: 'string', topic: ["Computing", "All topics"], name: "MIME type" }, // faker.internet.mimeType
  { type: 'string', topic: ["Computing", "All topics"], name: "Network interface" }, // faker.internet.networkInterface
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Alphabet letters" }, // faker.string.alpha
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Alpha characters and digits" }, // faker.string.alpha
  { type: 'string', topic: ["Computing", "All topics"], name: "Characters" }, // faker.string.fromCharacters
  { type: 'string', topic: ["Computing", "All topics"], name: "Nano ID" }, // faker.string.nanoid
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Digits" }, // faker.string.numeric
  { type: 'string', topic: ["Computing", "All topics"], name: "Octal" }, // faker.string.octal
  { type: 'string', topic: ["Computing", "All topics"], name: "UTF-16 chars" }, // faker.string.sample
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Symbol" }, // faker.string.symbol
  { type: 'string', topic: ["Computing", "All topics"], name: "ULID" }, // faker.string.ulid
  { type: 'string', topic: ["Computing", "All topics"], name: "UUID v4" }, // faker.string.uuid
  { type: 'string', topic: ["Computing", "General", "All topics"], name: "Boolean" }, // faker.datatype.boolean
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "BigInt number" }, // faker.number.bigInt
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Binary number" }, // faker.number.binary
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Float number" }, // faker.number.binary
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Number" }, // faker.number.int
  { type: 'string', topic: ["Computing", "Number", "All topics"], name: "Roman numeral" }, // faker.number.romanNumeral
  { type: 'string', topic: ["Number", "All topics"], name: "IMEI number" }, // faker.phone.imei
  { type: 'string', topic: ["Number", "Person", "All topics"], name: "Phone number" }, // faker.phone.number

  { type: 'string', topic: ["Date", "Person", "All topics"], name: "Birth date" }, // faker.date.birthdate
  { type: 'string', topic: ["Date", "General", "All topics"], name: "Any time" }, // faker.date.between
  { type: 'string', topic: ["Date", "All topics"], name: "Future" }, // faker.date.future
  { type: 'string', topic: ["Date", "General", "All topics"], name: "Month" }, // faker.date.month
  { type: 'string', topic: ["Date", "All topics"], name: "Past" }, // faker.date.past
  { type: 'string', topic: ["Date", "All topics"], name: "Recent" }, // faker.date.recent
  { type: 'string', topic: ["Date", "All topics"], name: "Soon" }, // faker.date.soon
  { type: 'string', topic: ["Date", "Geography", "All topics"], name: "Time zone" }, // faker.date.timeZone
  { type: 'string', topic: ["Date", "General", "All topics"], name: "Day of the week" }, // faker.date.weekday
  { type: 'string', topic: ["Date", "All topics"], name: "Time zone" }, // faker.date.definitions

  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "CYMK color" }, // faker.color.cmyk
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "HSL color" }, // faker.color.hsl
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "HWB color" }, // faker.color.hwb
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "LAB color" }, // faker.color.lab
  { type: 'string', topic: ["Color", "Computing", "All topics"], name: "LCH color" }, // faker.color.lch
  { type: 'string', topic: ["Color", "Computing", "Transport", "All topics"], name: "Hexadecimal" }, // faker.color.rgb
  { type: 'string', topic: ["Color", "General", "All topics"], name: "Color name" }, // faker.color.human

  { type: 'string', topic: ["Company", "All topics"], name: "Buzz adjective" }, // faker.company.buzzAdjective
  { type: 'string', topic: ["Company", "All topics"], name: "Buzz noun" }, // faker.company.buzzNoun
  { type: 'string', topic: ["Company", "All topics"], name: "Buzz phrase" }, // faker.company.buzzPhrase
  { type: 'string', topic: ["Company", "All topics"], name: "Buzz verb" }, // faker.company.buzzVerb
  { type: 'string', topic: ["Company", "All topics"], name: "Catch phrase" }, // faker.company.catchPhrase
  { type: 'string', topic: ["Company", "All topics"], name: "Catch phrase adjective" }, // faker.company.catchPhraseAdjective
  { type: 'string', topic: ["Company", "All topics"], name: "Catch phrase descriptor" }, // faker.company.catchPhraseDescriptor
  { type: 'string', topic: ["Company", "All topics"], name: "Catch phrase noun" }, // faker.company.catchPhraseNoun
  { type: 'string', topic: ["Company", "General", "Person", "All topics"], name: "Company name" }, // faker.company.catchPhraseNoun

  { type: 'string', topic: ["Finance", "Person", "All topics"], name: "Account number" }, // faker.finance.accountNumber
  { type: 'string', topic: ["Finance", "Company", "General", "All topics"], name: "Price" }, // faker.finance.amount
  { type: 'string', topic: ["Finance", "All topics"], name: "Bitcoin address" }, // faker.finance.bitcoinAddress
  { type: 'string', topic: ["Finance", "All topics"], name: "Credit card CVV" }, // faker.finance.creditCardCVV
  { type: 'string', topic: ["Finance", "All topics"], name: "Credit card issuer" }, // faker.finance.creditCardIssuer
  { type: 'string', topic: ["Finance", "All topics"], name: "Credit card number" }, // faker.finance.creditCardNumber
  { type: 'string', topic: ["Finance", "All topics"], name: "Currency" }, // faker.finance.currency
  { type: 'string', topic: ["Finance", "All topics"], name: "Currency code" }, // faker.finance.currencyCode
  { type: 'string', topic: ["Finance", "All topics"], name: "Currency name" }, // faker.finance.currencyName
  { type: 'string', topic: ["Finance", "All topics"], name: "Currency numeric code" }, // faker.finance.currencyNumericCode
  { type: 'string', topic: ["Finance", "All topics"], name: "Currency symbol" }, // faker.finance.currencySymbol
  { type: 'string', topic: ["Finance", "All topics"], name: "Ethereum address" }, // faker.finance.ethereumAddress
  { type: 'string', topic: ["Finance", "All topics"], name: "IBAN" }, // faker.finance.iban
  { type: 'string', topic: ["Finance", "All topics"], name: "Litecoin address" }, // faker.finance.litecoinAddress
  { type: 'string', topic: ["Finance", "Number", "All topics"], name: "PIN number" }, // faker.finance.pin
  { type: 'string', topic: ["Finance", "Number", "All topics"], name: "Routing number" }, // faker.finance.routingNumber
  { type: 'string', topic: ["Finance", "All topics"], name: "Transaction description" }, // faker.finance.transactionDescription
  { type: 'string', topic: ["Finance", "All topics"], name: "Transaction type" }, // faker.finance.transactionType

  { type: 'string', topic: ["Food", "All topics"], name: "Food adjective" }, // faker.food.adjective
  { type: 'string', topic: ["Food", "All topics"], name: "Food description" }, // faker.food.description
  { type: 'string', topic: ["Food", "All topics"], name: "Dish" }, // faker.food.dish
  // { type: 'string', topic: ["Food", "All topics"], name: "Food's ethnic category" }, // faker.food.ethnicCategory
  { type: 'string', topic: ["Food", "All topics"], name: "Food's ethnic category" }, // faker.food.dish
  { type: 'string', topic: ["Food", "All topics"], name: "Fruit" }, // faker.food.fruit
  { type: 'string', topic: ["Food", "All topics"], name: "Ingredient" }, // faker.food.ingredient
  { type: 'string', topic: ["Food", "All topics"], name: "Meat" }, // faker.food.meat
  { type: 'string', topic: ["Food", "All topics"], name: "Spice" }, // faker.food.spice
  { type: 'string', topic: ["Food", "All topics"], name: "Vegetable" }, // faker.food.vegetable

  { type: 'string', topic: ["Geography", "All topics"], name: "Building number" }, // faker.location.buildingNumber
  { type: 'string', topic: ["Geography", "All topics"], name: "Cardinal direction" }, // faker.location.cardinalDirection
  { type: 'string', topic: ["Geography", "All topics"], name: "City" }, // faker.location.city
  { type: 'string', topic: ["Geography", "All topics"], name: "Continent" }, // faker.location.continent
  { type: 'string', topic: ["Geography", "All topics"], name: "Country" }, // faker.location.country
  { type: 'string', topic: ["Geography", "All topics"], name: "Country code" }, // faker.location.countyCode
  // { type: 'string', topic: ["Geography", "All topics"], name: "County" }, // faker.location.county
  { type: 'string', topic: ["Geography", "All topics"], name: "Direction" }, // faker.location.direction
  { type: 'string', topic: ["Geography", "All topics"], name: "Language" }, // faker.location.language
  { type: 'string', topic: ["Geography", "All topics"], name: "Latitude" }, // faker.location.latitude
  { type: 'string', topic: ["Geography", "All topics"], name: "Longitude" }, // faker.location.longitude
  { type: 'string', topic: ["Geography", "All topics"], name: "GPS coordinate" }, // faker.location.nearbyGPSCoordinate
  { type: 'string', topic: ["Geography", "All topics"], name: "Secondary address" }, // faker.location.secondaryAddress
  { type: 'string', topic: ["Geography", "All topics"], name: "State" }, // faker.location.state
  { type: 'string', topic: ["Geography", "All topics"], name: "Street" }, // faker.location.street
  { type: 'string', topic: ["Geography", "Person", "All topics"], name: "Street address" }, // faker.location.streetAddress
  { type: 'string', topic: ["Geography", "All topics"], name: "Zip code" }, // faker.location.zipCode

  { type: 'string', topic: ["Music", "All topics"], name: "Album" }, // faker.music.album
  { type: 'string', topic: ["Music", "All topics"], name: "Artist" }, // faker.music.artist
  { type: 'string', topic: ["Music", "All topics"], name: "Music genre" }, // faker.music.genre
  { type: 'string', topic: ["Music", "All topics"], name: "Song name" }, // faker.music.songName

  { type: 'string', topic: ["Science", "All topics"], name: "Chemical element" }, // faker.science.chemicalElement
  { type: 'string', topic: ["Science", "All topics"], name: "Scientific unit" }, // faker.science.unit

  { type: 'string', topic: ["Word", "All topics"], name: "Adjective" }, // faker.word.adjective
  { type: 'string', topic: ["Word", "All topics"], name: "Adverb" }, // faker.word.adverb
  { type: 'string', topic: ["Word", "All topics"], name: "Conjunction" }, // faker.word.
  { type: 'string', topic: ["Word", "All topics"], name: "Interjection" }, // faker.word.interjection
  { type: 'string', topic: ["Word", "All topics"], name: "Noun" }, // faker.word.noun
  { type: 'string', topic: ["Word", "All topics"], name: "Preposition" }, // faker.word.preposition
  { type: 'string', topic: ["Word", "All topics"], name: "Word" }, // faker.word.sample
  { type: 'string', topic: ["Word", "All topics"], name: "Verb" }, // faker.word.verb
  { type: 'string', topic: ["Word", "All topics"], name: "Separate words" }, // faker.word.words

]