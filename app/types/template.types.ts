import { Colors } from "@rneui/base";

import { IColumn, ITemplate } from "../interface/Column"

export type TemplatePropsType = {
    template: ITemplate;
    colors: Colors;
    getTemplate: (data: IColumn[]) => void;
}