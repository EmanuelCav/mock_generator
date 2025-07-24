import { Colors } from "@rneui/base";

export type ConfigSwitchPropsType = {
    defaultValue: boolean;
}

export type DownloadViewPropsType = {
    colors: Colors;
    setIsGenerated: (isGenerated: boolean) => void;
    handleDownload: () => void;
    handleShare: () => void;
    loading: boolean;
    text: string;
    isDownloaded: boolean;
    setIsDownloaded: (isDownloaded: boolean) => void;
}