import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CustomDropdownPropsType, IDropdown } from "../types/general.types";

const ITEM_HEIGHT = 50;
const MAX_VISIBLE_ITEMS = 3;

const CustomDropdown = ({ data, value, onChange }: CustomDropdownPropsType) => {

    const [open, setOpen] = useState(false);

    const selectedItem = data.find(
        (item) => item.value === value
    );

    const handleSelect = (item: IDropdown) => {
        onChange(item.value);
        setOpen(false);
    }

    return (
        <View className="w-full">

            <Pressable
                onPress={() =>
                    setOpen((prev) => !prev)
                }
                className={`h-[50px] flex-row items-center justify-between rounded-lg border px-4 bg-white dark:bg-gray-900
                    ${open
                        ? "border-emerald-500"
                        : "border-gray-300 dark:border-gray-700"
                    }
                `}
            >

                <Text
                    numberOfLines={1}
                    className={`flex-1 text-base
                        ${selectedItem
                            ? "text-black dark:text-white"
                            : "text-gray-400 dark:text-gray-500"
                        }
                    `}
                >
                    {selectedItem?.label || ""}
                </Text>

                <Ionicons
                    name={
                        open
                            ? "chevron-up"
                            : "chevron-down"
                    }
                    size={20}
                    color="#50C878"
                />

            </Pressable>

            {open && (

                <View className="mt-1 w-full overflow-hidden rounded-lg border border-emerald-500 bg-white dark:bg-gray-900"
                    style={{
                        maxHeight:
                            ITEM_HEIGHT *
                            MAX_VISIBLE_ITEMS,
                        elevation: 10,
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                    }}
                >
                    <ScrollView
                        nestedScrollEnabled
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={
                            data.length >
                            MAX_VISIBLE_ITEMS
                        }
                    >

                        {data.map((item) => {

                            const isSelected =
                                item.value === value;


                            return (

                                <Pressable
                                    key={item.value}
                                    onPress={() =>
                                        handleSelect(item)
                                    }
                                    style={{
                                        height: ITEM_HEIGHT,
                                    }}
                                    className={`flex-row items-center justify-between px-4 active:bg-gray-100 dark:active:bg-gray-800
                                        ${isSelected
                                            ? "bg-emerald-50 dark:bg-emerald-950"
                                            : ""
                                        }
                                    `}
                                >
                                    <Text
                                        className={`
                                            text-base

                                            ${isSelected
                                                ? "font-semibold text-emerald-600 dark:text-emerald-400"
                                                : "text-black dark:text-white"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Text>


                                    {isSelected && (
                                        <Ionicons
                                            name="checkmark"
                                            size={20}
                                            color="#50C878"
                                        />

                                    )}

                                </Pressable>
                            );
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};


export default CustomDropdown;