export type ConfigSwitchPropsType = {
    defaultValue: boolean;
}

export type DownloadViewPropsType = {
    setIsGenerated: (isGenerated: boolean) => void;
    handleDownload: () => void;
    handleShare: () => void;
    loading: boolean;
    text: string;
    isDownloaded: boolean;
    setIsDownloaded: (isDownloaded: boolean) => void;
    t: (scope: string, options?: object | undefined) => string;
}