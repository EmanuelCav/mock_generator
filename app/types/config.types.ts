import { Colors } from "@rneui/base";

export type ConfigSwitchPropsType = {
    defaultValue: boolean;
}

export type DownloadViewPropsType = {
    colors: Colors;
    setIsGenerated: (isGenerated: boolean) => void;
    handleDownload: () => void;
    loading: boolean;
}