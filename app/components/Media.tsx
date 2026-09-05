import { ActivityIndicator, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import AddColumn from "./media/AddColumn";

import { MediaPropsType } from "../types/home.types";

const Media = ({ openForm, openOptions, openPreview, isRefreshData, t }: MediaPropsType) => {
    return (
        <View className="flex-row items-center justify-between px-4 py-3">

            <AddColumn openForm={openForm} t={t} />

            <View className="flex-row items-center gap-3">

                <Pressable
                    onPress={openPreview}
                    disabled={isRefreshData}
                    className={`items-center justify-center rounded-xl bg-emerald-500 p-4 ${isRefreshData ? "opacity-60" : "active:opacity-80"}`}
                >
                    {isRefreshData ? (
                        <ActivityIndicator color="#FFFFFF" />
                    ) : (
                        <Feather
                            name="eye"
                            size={22}
                            color="#FFFFFF"
                        />
                    )}
                </Pressable>

                <Pressable
                    onPress={openOptions}
                    className="items-center justify-center rounded-xl bg-emerald-500 p-4 active:opacity-80"
                >
                    <Feather
                        name="menu"
                        size={22}
                        color="#FFFFFF"
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default Media;