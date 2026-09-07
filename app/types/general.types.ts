import { PropsWithChildren } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { FormatKeyProps, LanguageKeyProps } from "../interface/File";

export type RouteType = {
    Create: undefined;
    History: undefined;
    Templates: undefined;
    Config: undefined;
}

export type StackNavigation = BottomTabNavigationProp<RouteType>;

export type ContainerBackgroundPropsType = PropsWithChildren<{
    onClose: () => void;
    title: string;
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

export interface IDropdown {
    label: string;
    value: string;
}

export type CustomDropdownPropsType = {
    data: IDropdown[];
    value: string;
    onChange: (value: string) => void;
}