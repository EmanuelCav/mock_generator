import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { observer } from "mobx-react-lite"
import { useTheme } from "@rneui/themed"

import Container from "../../ContainerGeneral"
import Template from "../components/Template"
import Banner from "../components/Banner"

import { generalStyles } from "../styles/general.styles"

import { userStore } from "../store/user.store"

import { ITemplate } from "../interface/Column"

import { faker } from "../utils/fakerGenerator"
import { generateRandomNumber } from "../utils/data"

const templatesData: ITemplate[] = [{
    title: "Perfil de usuario",
    data: [{
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
        fieldName: "Birth date",
        blank: 0,
        topic: "Birth date",
        data: () => faker.date.birthdate().toISOString().split("T")[0]
    }, {
        id: generateRandomNumber(),
        fieldName: "address",
        blank: 0,
        topic: "Street address",
        data: () => faker.location.streetAddress()
    }]
}, {
    title: "Producto de ecommerce",
    data: [{
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
        data: () => faker.finance.amount({ symbol: "$" })
    }, {
        id: generateRandomNumber(),
        fieldName: "departament",
        blank: 0,
        topic: "Shop department",
        data: () => faker.commerce.department()
    }]
}]

const Templates = observer(() => {

    const { theme } = useTheme()

    const [_, forceRender] = useState<number>(0);

    useEffect(() => {
        forceRender((prev) => prev + 1);
    }, [userStore.lang])

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
                        />}
                    keyExtractor={(_, index) => String(index)}
                />
            </View>
        </Container>
    )
})

export default Templates