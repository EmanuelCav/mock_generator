import { IColumn, ITemplate } from "../interface/Column"

export type TemplatePropsType = {
    template: ITemplate;
    getTemplate: (data: IColumn[]) => void;
    t: (scope: string, options?: object | undefined) => string;
}