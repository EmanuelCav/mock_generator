import { PropsWithChildren } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Colors } from "@rneui/base";

import { FormatKeyProps, LanguageKeyProps } from "../interface/File";

export type RouteType = {
    Create: undefined;
    History: undefined;
    Templates: undefined;
    Config: undefined;
}

export type StackNavigation = BottomTabNavigationProp<RouteType>;

export type ContainerBackgroundPropsType = PropsWithChildren<{
    colors: Colors;
    isField: boolean;
}>

export type FormatTypes = keyof FormatKeyProps;
export type LanguageTypes = keyof LanguageKeyProps;

export type FormatOption = {
    label: string;
    value: FormatTypes;
};

export type LanguageOption = {
    label: string;
    value: LanguageTypes;
};