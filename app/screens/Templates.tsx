import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { observer } from "mobx-react-lite"
import { useTheme } from "@rneui/themed"
import i18n from "../../i18n"

import Container from "../../ContainerGeneral"
import Template from "../components/Template"
import Banner from "../components/Banner"

import { generalStyles } from "../styles/general.styles"

import { userStore } from "../store/user.store"

import { IColumn, ITemplate } from "../interface/Column"
import { StackNavigation } from "../types/general.types"

import { fileStore } from "../store/file.store"

import { faker } from "../utils/fakerGenerator"
import { generateRandomNumber } from "../utils/data"

const Templates = observer(({ navigation }: { navigation: StackNavigation }) => {

    const templatesData: ITemplate[] = [{
        title: i18n.t("perfilUsuario"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "full name",
            blank: 0,
            topic: "Full name",
            data: () => faker.person.fullName()
        }, {
            id: generateRandomNumber(),
            fieldName: "email",
            blank: 0,
            topic: "Email",
            data: () => faker.internet.email()
        }, {
            id: generateRandomNumber(),
            fieldName: "avatar",
            blank: 0,
            topic: "Avatar",
            data: () => faker.image.avatar()
        }, {
            id: generateRandomNumber(),
            fieldName: "phone",
            blank: 0,
            topic: "Phone number international",
            data: () => faker.phone.number({ style: "international" })
        }, {
            id: generateRandomNumber(),
            fieldName: "birthdate",
            blank: 0,
            topic: "Birthdate",
            data: (min: number = 1940, max: number = 2007) => faker.date.between({ from: `${min}-01-01T00:00:00.000Z`, to: `${max}-01-01T00:00:00.000Z` }).toISOString().split("T")[0]
        }, {
            id: generateRandomNumber(),
            fieldName: "address",
            blank: 0,
            topic: "Street address",
            data: () => faker.location.streetAddress()
        }]
    }, {
        title: i18n.t("productEcommerce"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "product",
            blank: 0,
            topic: "Product name",
            data: () => faker.commerce.product()
        }, {
            id: generateRandomNumber(),
            fieldName: "description",
            blank: 0,
            topic: "Product description",
            data: () => faker.commerce.productDescription()
        }, {
            id: generateRandomNumber(),
            fieldName: "price",
            blank: 0,
            topic: "Price",
            data: (min: number = 1, max: number = 1000) => faker.finance.amount({ symbol: "$", dec: 2, max, min })
        }, {
            id: generateRandomNumber(),
            fieldName: "stock",
            blank: 0,
            topic: "Number",
            data: (min: number = 0, max: number = 50) => faker.number.int({ min, max })
        }, {
            id: generateRandomNumber(),
            fieldName: "department",
            blank: 0,
            topic: "Shop department",
            data: () => faker.commerce.department()
        }]
    }, {
        title: i18n.t("blogTemplate"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "title",
            blank: 0,
            topic: "Separate words",
            data: (min: number = 3, max: number = 8) => faker.word.words({ count: { max, min } })
        }, {
            id: generateRandomNumber(),
            fieldName: "content",
            blank: 0,
            topic: "Text",
            data: () => faker.lorem.text()
        }, {
            id: generateRandomNumber(),
            fieldName: "author",
            blank: 0,
            topic: "Full name",
            data: () => faker.person.fullName()
        }, {
            id: generateRandomNumber(),
            fieldName: "date",
            blank: 0,
            topic: "Past datetime",
            data: (min: number = 5) => faker.date.past({ years: min })
        }]
    }, {
        title: i18n.t("company"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "name",
            blank: 0,
            topic: "Company name",
            data: () => faker.company.name()
        }, {
            id: generateRandomNumber(),
            fieldName: "catch phrase",
            blank: 0,
            topic: "Catch phrase",
            data: () => faker.company.catchPhrase()
        }, {
            id: generateRandomNumber(),
            fieldName: "website",
            blank: 0,
            topic: "URL",
            data: () => faker.internet.url()
        }, {
            id: generateRandomNumber(),
            fieldName: "address",
            blank: 0,
            topic: "Street address",
            data: () => faker.location.streetAddress()
        }]
    }, {
        title: i18n.t("creditCard"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "number",
            blank: 0,
            topic: "Credit card number",
            data: () => faker.finance.creditCardNumber()
        }, {
            id: generateRandomNumber(),
            fieldName: "cvv",
            blank: 0,
            topic: "Credit card CVV",
            data: () => faker.finance.creditCardCVV()
        }, {
            id: generateRandomNumber(),
            fieldName: "full name",
            blank: 0,
            topic: "Full name",
            data: () => faker.person.fullName()
        }, {
            id: generateRandomNumber(),
            fieldName: "expiry",
            blank: 0,
            topic: "Future date",
            data: (min: number = 10) => faker.date.future({ years: min }).toISOString().split("T")[0]
        }]
    }, {
        title: i18n.t("event"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "title",
            blank: 0,
            topic: "Separate words",
            data: (min: number = 1, max: number = 8) => faker.word.words({ count: { max, min } })
        }, {
            id: generateRandomNumber(),
            fieldName: "location",
            blank: 0,
            topic: "City",
            data: () => faker.location.city()
        }, {
            id: generateRandomNumber(),
            fieldName: "date",
            blank: 0,
            topic: "Soon datetime",
            data: (min: number = 5) => faker.date.soon({ days: min })
        }, {
            id: generateRandomNumber(),
            fieldName: "description",
            blank: 0,
            topic: "Paragraph",
            data: (min: number = 1, max: number = 3) => faker.lorem.paragraph({ max, min })
        }]
    }, {
        title: i18n.t("review"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "user",
            blank: 0,
            topic: "Username",
            data: () => faker.internet.username()
        }, {
            id: generateRandomNumber(),
            fieldName: "rating",
            blank: 0,
            topic: "Number",
            data: (min: number = 1, max: number = 5) => faker.number.int({ max, min })
        }, {
            id: generateRandomNumber(),
            fieldName: "comment",
            blank: 0,
            topic: "Sentences",
            data: (min: number = 2, max: number = 4) => faker.lorem.sentences({ max, min })
        }, {
            id: generateRandomNumber(),
            fieldName: "date",
            blank: 0,
            topic: "Recent datetime",
            data: (min: number = 90) => faker.date.recent({ days: min })
        }, {
            id: generateRandomNumber(),
            fieldName: "likes",
            blank: 0,
            topic: "Number",
            data: (min: number = 1, max: number = 5000) => faker.number.int({ max, min })

        }]
    }, {
        title: i18n.t("bank"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "IBAN",
            blank: 0,
            topic: "IBAN",
            data: () => faker.finance.iban()
        }, {
            id: generateRandomNumber(),
            fieldName: "SWIFT/BIC",
            blank: 0,
            topic: "SWIFT/BIC",
            data: () => faker.finance.bic()
        }, {
            id: generateRandomNumber(),
            fieldName: "account name",
            blank: 0,
            topic: "Full name",
            data: () => faker.person.fullName()
        }, {
            id: generateRandomNumber(),
            fieldName: "balance",
            blank: 0,
            topic: "Price",
            data: (min: number = 1, max: number = 1000) => faker.finance.amount({ symbol: "$", dec: 2, max, min })
        }]
    }, {
        title: i18n.t("registerUser"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "username",
            blank: 0,
            topic: "Username",
            data: () => faker.internet.username()
        }, {
            id: generateRandomNumber(),
            fieldName: "email",
            blank: 0,
            topic: "Email",
            data: () => faker.internet.email()
        }, {
            id: generateRandomNumber(),
            fieldName: "role",
            blank: 0,
            topic: "Array elements",
            data: () => faker.helpers.arrayElement(['admin', 'user', 'moderator']),
        }, {
            id: generateRandomNumber(),
            fieldName: "registeredAt",
            blank: 0,
            topic: "Past datetime",
            data: (min: number = 5) => faker.date.past({ years: min })
        }]
    }, {
        title: i18n.t("address"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "address",
            blank: 0,
            topic: "Street address",
            data: () => faker.location.streetAddress()
        }, {
            id: generateRandomNumber(),
            fieldName: "city",
            blank: 0,
            topic: "City",
            data: () => faker.location.city()
        }, {
            id: generateRandomNumber(),
            fieldName: "state",
            blank: 0,
            topic: "State",
            data: () => faker.location.state()
        }, {
            id: generateRandomNumber(),
            fieldName: "zipCode",
            blank: 0,
            topic: "Zip code",
            data: () => faker.location.zipCode()
        }]
    }, {
        title: i18n.t("animal"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "pet name",
            blank: 0,
            topic: "Pet name",
            data: () => faker.animal.petName()
        }, {
            id: generateRandomNumber(),
            fieldName: "animal",
            blank: 0,
            topic: "Animal",
            data: () => faker.animal.type()
        }, {
            id: generateRandomNumber(),
            fieldName: "age",
            blank: 0,
            topic: "Age",
            data: (min: number = 1, max: number = 20) => faker.number.int({ min, max })
        }]
    }, {
        title: i18n.t("vehicle"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "manufacturer",
            blank: 0,
            topic: "Manufacturer",
            data: () => faker.vehicle.manufacturer()
        }, {
            id: generateRandomNumber(),
            fieldName: "model",
            blank: 0,
            topic: "Vehicle model",
            data: () => faker.vehicle.model()
        }, {
            id: generateRandomNumber(),
            fieldName: "vin",
            blank: 0,
            topic: "Vehicle identification number",
            data: () => faker.vehicle.vin()
        }, {
            id: generateRandomNumber(),
            fieldName: "color",
            blank: 0,
            topic: "Color name",
            data: () => faker.color.human()
        }]
    }, {
        title: i18n.t("bill"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "invoice number",
            blank: 0,
            topic: "Account number",
            data: () => faker.finance.accountNumber()
        }, {
            id: generateRandomNumber(),
            fieldName: "customer",
            blank: 0,
            topic: "Full name",
            data: () => faker.person.fullName()
        }, {
            id: generateRandomNumber(),
            fieldName: "amount",
            blank: 0,
            topic: "Price",
            data: (min: number = 50, max: number = 1200) => faker.finance.amount({ symbol: "$", dec: 2, max, min })
        }, {
            id: generateRandomNumber(),
            fieldName: "due date",
            blank: 0,
            topic: "Future datetime",
            data: (min: number = 3) => faker.date.future({ years: min })
        }]
    }, {
        title: i18n.t("employee"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "full name",
            blank: 0,
            topic: "Full name",
            data: () => faker.person.fullName()
        }, {
            id: generateRandomNumber(),
            fieldName: "job",
            blank: 0,
            topic: "Job title",
            data: () => faker.person.jobTitle()
        }, {
            id: generateRandomNumber(),
            fieldName: "department",
            blank: 0,
            topic: "Shop department",
            data: () => faker.commerce.department()
        }, {
            id: generateRandomNumber(),
            fieldName: "hire date",
            blank: 0,
            topic: "Past date",
            data: (min: number = 20) => faker.date.past({ years: min }).toISOString().split("T")[0]
        }]
    }, {
        title: i18n.t("transaction"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "type",
            blank: 0,
            topic: "Array Elements",
            data: () => faker.helpers.arrayElement(['deposit', 'withdrawal', 'transfer']),
        }, {
            id: generateRandomNumber(),
            fieldName: "amount",
            blank: 0,
            topic: "Price",
            data: (min: number = 1, max: number = 1000) => faker.finance.amount({ symbol: "$", dec: 2, max, min })
        }, {
            id: generateRandomNumber(),
            fieldName: "date",
            blank: 0,
            topic: "Recent datetime",
            data: (min: number = 1) => faker.date.recent({ days: min })
        }]
    }, {
        title: i18n.t("profile"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "username",
            blank: 0,
            topic: "Username",
            data: () => faker.internet.username()
        }, {
            id: generateRandomNumber(),
            fieldName: "biography",
            blank: 0,
            topic: "Biography",
            data: () => faker.person.bio()
        }, {
            id: generateRandomNumber(),
            fieldName: "followers",
            blank: 0,
            topic: "Number",
            data: (min: number = 0, max: number = 10000) => faker.number.int({ min, max })
        }, {
            id: generateRandomNumber(),
            fieldName: "isVerified",
            blank: 0,
            topic: "Boolean",
            data: () => faker.datatype.boolean()
        }]
    }, {
        title: i18n.t("subscription"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "plan",
            blank: 0,
            topic: "Array elements",
            data: () => faker.helpers.arrayElement(["Free", "Basic", "Premium"])
        }, {
            id: generateRandomNumber(),
            fieldName: "start date",
            blank: 0,
            topic: "Past datetime",
            data: (min: number = 2) => faker.date.past({ years: min })
        }, {
            id: generateRandomNumber(),
            fieldName: "end date",
            blank: 0,
            topic: "Future datetime",
            data: (min: number = 2) => faker.date.future({ years: min })
        }, {
            id: generateRandomNumber(),
            fieldName: "isActive",
            blank: 0,
            topic: "Boolean",
            data: () => faker.datatype.boolean()
        }]
    }, {
        title: i18n.t("contact"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "name",
            blank: 0,
            topic: "First name",
            data: () => faker.person.firstName()
        }, {
            id: generateRandomNumber(),
            fieldName: "phone number",
            blank: 0,
            topic: "Phone number international",
            data: () => faker.phone.number({ style: "international" })
        }, {
            id: generateRandomNumber(),
            fieldName: "email",
            blank: 0,
            topic: "Email",
            data: () => faker.internet.email()
        }, {
            id: generateRandomNumber(),
            fieldName: "company",
            blank: 0,
            topic: "Company name",
            data: () => faker.company.name()
        }]
    }, {
        title: i18n.t("film"),
        data: [{
            id: generateRandomNumber(),
            fieldName: "row number",
            topic: "Row number",
            blank: 0,
            data: () => null
        },
        {
            id: generateRandomNumber(),
            fieldName: "id",
            blank: 0,
            topic: "UUID",
            data: () => faker.string.uuid()
        }, {
            id: generateRandomNumber(),
            fieldName: "title",
            blank: 0,
            topic: "Separate words",
            data: (min: number = 1, max: number = 5) => faker.word.words({ count: { max, min } })
        }, {
            id: generateRandomNumber(),
            fieldName: "genre",
            blank: 0,
            topic: "Book genre",
            data: () => faker.book.genre()
        }, {
            id: generateRandomNumber(),
            fieldName: "release date",
            blank: 0,
            topic: "Past datetime",
            data: (min: number = 60) => faker.date.past({ years: min })
        }, {
            id: generateRandomNumber(),
            fieldName: "rating",
            blank: 0,
            topic: "Number",
            data: (min: number = 1, max: number = 5) => faker.number.int({ max, min })
        }]
    }]

    const { theme } = useTheme()

    const [_, forceRender] = useState<number>(0);

    useEffect(() => {
        forceRender((prev) => prev + 1);
    }, [userStore.lang])

    const getTemplate = (data: IColumn[]) => {
        fileStore.getColumns(data)
        navigation.navigate("Create")
    }

    return (
        <Container>
            <Banner />
            <View style={generalStyles.generalContainer}>
                <FlatList
                    data={templatesData}
                    renderItem={({ item }) =>
                        <Template
                            colors={theme.colors}
                            template={item}
                            getTemplate={getTemplate}
                        />}
                    keyExtractor={(_, index) => String(index)}
                />
            </View>
        </Container>
    )
})

export default Templates