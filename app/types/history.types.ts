import { Colors } from "@rneui/base";

import { IHistory } from "../interface/User";
import { IColumn } from "../interface/Column";

export type HistoryElementPropsType = {
    history: IHistory;
    colors: Colors;
    openDownload: (history: IHistory) => void;
    handleEdit: (column: IColumn[]) => void;
    handleDelete: (history: IHistory) => void;
}