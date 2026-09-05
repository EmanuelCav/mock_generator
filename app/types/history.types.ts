import { IHistory } from "../interface/User";
import { IColumn } from "../interface/Column";

export type HistoryElementPropsType = {
    history: IHistory;
    openDownload: (history: IHistory) => void;
    handleEdit: (column: IColumn[]) => void;
    handleDelete: (history: IHistory) => void;
    t: (scope: string, options?: object | undefined) => string;
}