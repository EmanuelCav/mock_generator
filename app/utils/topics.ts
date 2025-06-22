export const topics = [
  { label: 'Person', value: 'person', iconName: 'account' },
  { label: 'Transport', value: 'transport', iconName: 'account' },
  { label: 'Animal', value: 'ec', iconName: 'paw' },
  { label: 'Book', value: 'ec', iconName: 'paw' },
  { label: 'Commerce', value: 'mx', iconName: 'office-building' },
  { label: 'Geography', value: 'cd', iconName: 'map-marker' },
  { label: 'Games', value: 'co', iconName: 'gamepad-variant' },
  { label: 'Food', value: 'ca', iconName: 'food' },
]

export const column = [
  { type: 'number', topic: ["Person"], name: "Age" },
  { type: 'number', topic: ["Person"], name: "Biography" },
  { type: 'string', topic: ["Person"], name: "Full name" },
  { type: 'string', topic: ["Person"], name: "First name" },
  { type: 'string', topic: ["Person"], name: "Gender" },
  { type: 'string', topic: ["Person"], name: "Job area" },
  { type: 'string', topic: ["Person"], name: "Job descriptor" },
  { type: 'string', topic: ["Person"], name: "Job title" },
  { type: 'string', topic: ["Person"], name: "Job type" },
  { type: 'string', topic: ["Person"], name: "Last name" },
  { type: 'string', topic: ["Person"], name: "Middle name" },
  { type: 'string', topic: ["Person"], name: "Prefix" },
  { type: 'string', topic: ["Person"], name: "Suffix" },
  { type: 'string', topic: ["Person"], name: "Zodiac sign" },

  { type: 'string', topic: ["Transport"], name: "Aircraft type" },
  { type: 'string', topic: ["Transport"], name: "Airlane" },
  { type: 'string', topic: ["Transport"], name: "Airplane" },
  { type: 'string', topic: ["Transport"], name: "Airport" },
  { type: 'string', topic: ["Transport"], name: "Flight number" },
  { type: 'string', topic: ["Transport"], name: "Record locator" },
  { type: 'string', topic: ["Transport"], name: "Seat" },
  { type: 'string', topic: ["Transport"], name: "Type of bicycle" },
  { type: 'string', topic: ["Transport"], name: "Fuel type" },
  { type: 'string', topic: ["Transport"], name: "Manufacturer" },
  { type: 'string', topic: ["Transport"], name: "Vehicle model" },
  { type: 'string', topic: ["Transport"], name: "Vehicle type" },
  { type: 'string', topic: ["Transport"], name: "Vehicle identification number" },
  { type: 'string', topic: ["Transport"], name: "Vehicle registration number" },

  { type: 'string', topic: ["Animal"], name: ["Animal"] }, // Type.  Los de abajo revisar el name
  { type: 'string', topic: ["Animal"], name: "Bear" },
  { type: 'string', topic: ["Animal"], name: "Bird" },
  { type: 'string', topic: ["Animal"], name: "Cat" },
  { type: 'string', topic: ["Animal"], name: "Cetacean" },
  { type: 'string', topic: ["Animal"], name: "Cow" },
  { type: 'string', topic: ["Animal"], name: "Crocodilia" },
  { type: 'string', topic: ["Animal"], name: "Dog" },
  { type: 'string', topic: ["Animal"], name: "Fish" },
  { type: 'string', topic: ["Animal"], name: "Horse" },
  { type: 'string', topic: ["Animal"], name: "Insect" },
  { type: 'string', topic: ["Animal"], name: "Lion" },
  { type: 'string', topic: ["Animal"], name: "Pet name" },
  { type: 'string', topic: ["Animal"], name: "Rabbit" },
  { type: 'string', topic: ["Animal"], name: "Rodent" },
  { type: 'string', topic: ["Animal"], name: "Snake" },

  { type: 'string', topic: ["Book"], name: "Author" },
  { type: 'string', topic: ["Book"], name: "Format" },
  { type: 'string', topic: ["Book"], name: "Genre" },
  { type: 'string', topic: ["Book"], name: "Publisher" },
  { type: 'string', topic: ["Book"], name: "Series" },
  { type: 'string', topic: ["Book"], name: "Title" },

  { type: 'string', topic: ["Computing"], name: "Database type" }, // faker.database.type()
  { type: 'string', topic: ["Computing"], name: "Database collation" }, // faker.database.collation()
  { type: 'string', topic: ["Computing"], name: "Database column" }, // faker.database.column()
  { type: 'string', topic: ["Computing"], name: "Database engine" }, // faker.database.engine()
  { type: 'string', topic: ["Computing"], name: "Git branch" }, // faker.git. // TODO abajo
  { type: 'string', topic: ["Computing"], name: "Git commit date" },
  { type: 'string', topic: ["Computing"], name: "Git commit message" },
  { type: 'string', topic: ["Computing"], name: "IT text abbreviation" }, // faker.hacker.abbreviation
  { type: 'string', topic: ["Computing"], name: "IT adjective" }, // faker.hacker.adjective
  { type: 'string', topic: ["Computing"], name: "IT noun" }, // faker.hacker.noun
  { type: 'string', topic: ["Computing"], name: "IT phrase" }, // faker.hacker.phrase
  { type: 'string', topic: ["Computing"], name: "IT verb" }, // faker.hacker.ingverb o faker.hacker.verb
  { type: 'string', topic: ["Computing", "Person"], name: "Username" }, // faker.internet.username()
  { type: 'string', topic: ["Computing"], name: "Domain name" }, // faker.internet.domainName()
  { type: 'string', topic: ["Computing"], name: "Domain suffix" }, // faker.internet.domainSuffix()
  { type: 'string', topic: ["Computing"], name: "Domain word" }, // faker.internet.domainWord()
  { type: 'string', topic: ["Computing"], name: "Domain suffix" }, // faker.internet.domainSuffix()
  { type: 'string', topic: ["Computing", "Person"], name: "Email" }, // faker.internet.email()
  // { type: 'string', topic: ["Computing"], name: "Title" }, // faker.internet.emoji
  { type: 'string', topic: ["Computing"], name: "Http method" }, // faker.internet.httpMethod
  { type: 'string', topic: ["Computing"], name: "Http status code" }, // faker.internet.httpMethod
  { type: 'string', topic: ["Computing"], name: "IPv4" }, // faker.internet.ipv4
  { type: 'string', topic: ["Computing"], name: "IPv6" }, // faker.internet.ipv6
  { type: 'string', topic: ["Computing"], name: "Token" }, // faker.internet.jwt
  { type: 'string', topic: ["Computing"], name: "Mac address" }, // faker.internet.mac
  { type: 'string', topic: ["Computing", "Person"], name: "Password" }, // faker.internet.password
  { type: 'string', topic: ["Computing"], name: "Port number" }, // faker.internet.port
  { type: 'string', topic: ["Computing"], name: "Web protocol" }, // faker.internet.protocol
  { type: 'string', topic: ["Computing"], name: "URL" }, // faker.internet.url
  { type: 'string', topic: ["Computing"], name: "User Agent" }, // faker.internet.userAgent
  { type: 'string', topic: ["Computing"], name: "Common file extension" }, // faker.internet.commonFileExt
  { type: 'string', topic: ["Computing"], name: "Common file name" }, // faker.internet.commonFileName
  { type: 'string', topic: ["Computing"], name: "Common file type" }, // faker.internet.commonFileType
  { type: 'string', topic: ["Computing"], name: "Cron" }, // faker.internet.cron
  { type: 'string', topic: ["Computing"], name: "Directory path" }, // faker.internet.directoryPath
  { type: 'string', topic: ["Computing"], name: "File extension" }, // faker.internet.fileExt
  { type: 'string', topic: ["Computing"], name: "File name" }, // faker.internet.fileName
  { type: 'string', topic: ["Computing"], name: "File path" }, // faker.internet.filePath
  { type: 'string', topic: ["Computing"], name: "File type" }, // faker.internet.fileType
  { type: 'string', topic: ["Computing"], name: "MIME type" }, // faker.internet.mimeType
  { type: 'string', topic: ["Computing"], name: "Network interface" }, // faker.internet.networkInterface
  { type: 'string', topic: ["Computing", "General"], name: "Alphabet letters" }, // faker.string.alpha
  { type: 'string', topic: ["Computing", "General"], name: "Alpha characters and digits" }, // faker.string.alpha
  { type: 'string', topic: ["Computing"], name: "Characters" }, // faker.string.fromCharacters
  { type: 'string', topic: ["Computing"], name: "Nano ID" }, // faker.string.nanoid
  { type: 'string', topic: ["Computing", "General"], name: "Digits" }, // faker.string.numeric
  { type: 'string', topic: ["Computing"], name: "Octal" }, // faker.string.octal
  { type: 'string', topic: ["Computing"], name: "UTF-16 chars" }, // faker.string.sample
  { type: 'string', topic: ["Computing", "General"], name: "Symbol" }, // faker.string.symbol
  { type: 'string', topic: ["Computing"], name: "ULID" }, // faker.string.ulid
  { type: 'string', topic: ["Computing"], name: "UUID v4" }, // faker.string.uuid
  { type: 'string', topic: ["Computing", "General"], name: "Boolean" }, // faker.datatype.boolean
  { type: 'string', topic: ["Computing", "Number"], name: "BigInt number" }, // faker.number.bigInt
  { type: 'string', topic: ["Computing", "Number"], name: "Binary number" }, // faker.number.binary
  { type: 'string', topic: ["Computing", "Number"], name: "Float number" }, // faker.number.binary
  { type: 'string', topic: ["Computing", "Number"], name: "Number" }, // faker.number.int
  { type: 'string', topic: ["Computing", "Number"], name: "Roman numeral" }, // faker.number.romanNumeral
  { type: 'string', topic: ["Number"], name: "IMEI number" }, // faker.phone.imei
  { type: 'string', topic: ["Number", "Person"], name: "Phone number" }, // faker.phone.number

  { type: 'string', topic: ["Date", "Person"], name: "Birth date" }, // faker.date.birthdate
  { type: 'string', topic: ["Date", "General"], name: "Any time" }, // faker.date.between
  { type: 'string', topic: ["Date"], name: "Future" }, // faker.date.future
  { type: 'string', topic: ["Date", "General"], name: "Month" }, // faker.date.month
  { type: 'string', topic: ["Date"], name: "Past" }, // faker.date.past
  { type: 'string', topic: ["Date"], name: "Recent" }, // faker.date.recent
  { type: 'string', topic: ["Date"], name: "Soon" }, // faker.date.soon
  { type: 'string', topic: ["Date", "Geography"], name: "Time zone" }, // faker.date.timeZone
  { type: 'string', topic: ["Date", "General"], name: "Day of the Week" }, // faker.date.weekday
  { type: 'string', topic: ["Date"], name: "Time zone" }, // faker.date.definitions

  { type: 'string', topic: ["Color", "Computing"], name: "CYMK color" }, // faker.color.cmyk
  { type: 'string', topic: ["Color", "Computing"], name: "HSL color" }, // faker.color.hsl
  { type: 'string', topic: ["Color", "Computing"], name: "HWB color" }, // faker.color.hwb
  { type: 'string', topic: ["Color", "Computing"], name: "LAB color" }, // faker.color.lab
  { type: 'string', topic: ["Color", "Computing"], name: "LCH color" }, // faker.color.lch
  { type: 'string', topic: ["Color", "Computing", "Transport"], name: "Hexadecimal" }, // faker.color.rgb
  { type: 'string', topic: ["Color", "General"], name: "Color name" }, // faker.color.human

  { type: 'string', topic: ["Company"], name: "Buzz adjective" }, // faker.company.buzzAdjective
  { type: 'string', topic: ["Company"], name: "Buzz noun" }, // faker.company.buzzNoun
  { type: 'string', topic: ["Company"], name: "Buzz phrase" }, // faker.company.buzzPhrase
  { type: 'string', topic: ["Company"], name: "Buzz verb" }, // faker.company.buzzVerb
  { type: 'string', topic: ["Company"], name: "Catch phrase" }, // faker.company.catchPhrase
  { type: 'string', topic: ["Company"], name: "Catch phrase adjective" }, // faker.company.catchPhraseAdjective
  { type: 'string', topic: ["Company"], name: "Catch phrase descriptor" }, // faker.company.catchPhraseDescriptor
  { type: 'string', topic: ["Company"], name: "Catch phrase noun" }, // faker.company.catchPhraseNoun
  { type: 'string', topic: ["Company", "General", "Person"], name: "Company name" }, // faker.company.catchPhraseNoun

  { type: 'string', topic: ["Finance", "Person"], name: "Account number" }, // faker.finance.accountNumber
  { type: 'string', topic: ["Finance", "Company", "General"], name: "Price" }, // faker.finance.amount
  { type: 'string', topic: ["Finance"], name: "Bitcoin address" }, // faker.finance.bitcoinAddress
  { type: 'string', topic: ["Finance"], name: "Credit card CVV" }, // faker.finance.creditCardCVV
  { type: 'string', topic: ["Finance"], name: "Credit card issuer" }, // faker.finance.creditCardIssuer
  { type: 'string', topic: ["Finance"], name: "Credit card number" }, // faker.finance.creditCardNumber
  { type: 'string', topic: ["Finance"], name: "Currency" }, // faker.finance.currency
  { type: 'string', topic: ["Finance"], name: "Currency code" }, // faker.finance.currencyCode
  { type: 'string', topic: ["Finance"], name: "Currency name" }, // faker.finance.currencyName
  { type: 'string', topic: ["Finance"], name: "Currency numeric code" }, // faker.finance.currencyNumericCode
  { type: 'string', topic: ["Finance"], name: "Currency symbol" }, // faker.finance.currencySymbol
  { type: 'string', topic: ["Finance"], name: "Ethereum address" }, // faker.finance.ethereumAddress
  { type: 'string', topic: ["Finance"], name: "IBAN" }, // faker.finance.iban
  { type: 'string', topic: ["Finance"], name: "Litecoin address" }, // faker.finance.litecoinAddress
  { type: 'string', topic: ["Finance", "Number"], name: "PIN number" }, // faker.finance.pin
  { type: 'string', topic: ["Finance", "Number"], name: "Routing number" }, // faker.finance.routingNumber
  { type: 'string', topic: ["Finance"], name: "Transaction description" }, // faker.finance.transactionDescription
  { type: 'string', topic: ["Finance"], name: "Transaction type" }, // faker.finance.transactionType

  { type: 'string', topic: ["Food"], name: "Food adjective" }, // faker.food.adjective
  { type: 'string', topic: ["Food"], name: "Food description" }, // faker.food.description
  { type: 'string', topic: ["Food"], name: "Dish" }, // faker.food.dish
  // { type: 'string', topic: ["Food"], name: "Food's ethnic category" }, // faker.food.ethnicCategory
  { type: 'string', topic: ["Food"], name: "Food's ethnic category" }, // faker.food.dish
  { type: 'string', topic: ["Food"], name: "Fruit" }, // faker.food.fruit
  { type: 'string', topic: ["Food"], name: "Ingredient" }, // faker.food.ingredient
  { type: 'string', topic: ["Food"], name: "Meat" }, // faker.food.meat
  { type: 'string', topic: ["Food"], name: "Spice" }, // faker.food.spice
  { type: 'string', topic: ["Food"], name: "Vegetable" }, // faker.food.vegetable

  { type: 'string', topic: ["Geography"], name: "Building number" }, // faker.location.buildingNumber
  { type: 'string', topic: ["Geography"], name: "Cardinal direction" }, // faker.location.cardinalDirection
  { type: 'string', topic: ["Geography"], name: "City" }, // faker.location.city
  { type: 'string', topic: ["Geography"], name: "Continent" }, // faker.location.continent
  { type: 'string', topic: ["Geography"], name: "Country" }, // faker.location.country
  { type: 'string', topic: ["Geography"], name: "Country code" }, // faker.location.countyCode
  // { type: 'string', topic: ["Geography"], name: "County" }, // faker.location.county
  { type: 'string', topic: ["Geography"], name: "Direction" }, // faker.location.direction
  { type: 'string', topic: ["Geography"], name: "Language" }, // faker.location.language
  { type: 'string', topic: ["Geography"], name: "Latitude" }, // faker.location.latitude
  { type: 'string', topic: ["Geography"], name: "Longitude" }, // faker.location.longitude
  { type: 'string', topic: ["Geography"], name: "GPS coordinate" }, // faker.location.nearbyGPSCoordinate
  { type: 'string', topic: ["Geography"], name: "Secondart Address" }, // faker.location.secondaryAddress
  { type: 'string', topic: ["Geography"], name: "State" }, // faker.location.state
  { type: 'string', topic: ["Geography"], name: "Street" }, // faker.location.street
  { type: 'string', topic: ["Geography", "Person"], name: "Street address" }, // faker.location.streetAddress
  { type: 'string', topic: ["Geography"], name: "Zip code" }, // faker.location.zipCode

  { type: 'string', topic: ["Music"], name: "Album" }, // faker.music.album
  { type: 'string', topic: ["Music"], name: "Artist" }, // faker.music.artist
  { type: 'string', topic: ["Music"], name: "Music genre" }, // faker.music.genre
  { type: 'string', topic: ["Music"], name: "Song name" }, // faker.music.songName

  { type: 'string', topic: ["Science"], name: "Chemical element" }, // faker.science.chemicalElement
  { type: 'string', topic: ["Science"], name: "Scientific unit" }, // faker.science.unit

  { type: 'string', topic: ["Word"], name: "Adjective" }, // faker.word.adjective
  { type: 'string', topic: ["Word"], name: "Adverb" }, // faker.word.adverb
  { type: 'string', topic: ["Word"], name: "Conjunction" }, // faker.word.
  { type: 'string', topic: ["Word"], name: "Interjection" }, // faker.word.interjection
  { type: 'string', topic: ["Word"], name: "Noun" }, // faker.word.noun
  { type: 'string', topic: ["Word"], name: "Preposition" }, // faker.word.preposition
  { type: 'string', topic: ["Word"], name: "Word" }, // faker.word.sample
  { type: 'string', topic: ["Word"], name: "Verb" }, // faker.word.verb
  { type: 'string', topic: ["Word"], name: "Separate words" }, // faker.word.words

]