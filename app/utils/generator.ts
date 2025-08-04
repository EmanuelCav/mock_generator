import * as FileSystem from 'expo-file-system';
import RNFS from 'react-native-fs';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import XLSX from 'xlsx';
import { Buffer } from 'buffer';
import * as Sharing from 'expo-sharing';
import i18n from '../../i18n';
import { generateFakeData } from './fakerGenerator';

import { IColumn } from '../interface/Column';

import { fileStore } from '../store/file.store';

export const generateData = (fields: IColumn[]) => {
  return generateFakeData(fields, Number(fileStore.rows));
};

export const excelGenerator = async (fieldsData: any[], fileName: string) => {
  try {
    const ws = XLSX.utils.json_to_sheet(fieldsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, i18n.t("data"));
    const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });

    const path = FileSystem.documentDirectory + `${fileName}.xlsx`;

    await FileSystem.writeAsStringAsync(path, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    shareMethod(path, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "Excel");
  } catch (error) {
    Alert.alert(i18n.t("titleErrorShare"), i18n.t("descriptionErrorShare"))
  }
};

export const excelDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void) => {

  try {

    if (!permissionsReadStorage()) {
      Alert.alert(i18n.t("titlePermissionDenied"), i18n.t("descriptionPermissionDenied"))
      return
    }

    const ws = XLSX.utils.json_to_sheet(fieldsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

    const path = `${RNFS.DownloadDirectoryPath}/${fileName}.xlsx`;
    const buffer = Buffer.from(wbout, 'binary');

    await RNFS.writeFile(path, buffer.toString('base64'), 'base64');

    setIsDownload(true)

  } catch (error) {
    Alert.alert(i18n.t("titleErrorDownload"), i18n.t("descriptionErrorDownload"))
  }
}

export const csvGenerator = async (fieldsData: any[], fileName: string) => {
  try {
    const keys = Object.keys(fieldsData[0]);
    const csvRows = [
      keys.join(','),
      ...fieldsData.map(row => keys.map(k => `"${(row[k] ?? '').toString().replace(/"/g, '""')}"`).join(','))
    ];
    const csvString = csvRows.join('\n');
    const path = FileSystem.documentDirectory + `${fileName}.csv`;

    await FileSystem.writeAsStringAsync(path, csvString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    shareMethod(path, 'text/csv', "CSV");

  } catch (error) {
    Alert.alert(i18n.t("titleErrorShare"), i18n.t("descriptionErrorShare"))
  }
}

export const csvDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void) => {
  try {

    if (!permissionsReadStorage()) {
      Alert.alert(i18n.t("titlePermissionDenied"), i18n.t("descriptionPermissionDenied"))
      return
    }

    const ws = XLSX.utils.json_to_sheet(fieldsData);

    const csv = XLSX.utils.sheet_to_csv(ws);

    const path = `${RNFS.DownloadDirectoryPath}/${fileName}.csv`;

    await RNFS.writeFile(path, csv, 'utf8');

    setIsDownload(true);

  } catch (error) {
    Alert.alert(i18n.t("titleErrorDownload"), i18n.t("descriptionErrorDownload"))
  }
}

const jsonToXml = (jsonArray: any[], rootName = 'Items', itemName = 'Item'): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<${rootName.toLowerCase()}>\n`;

  jsonArray.forEach(obj => {
    xml += `  <${itemName.toLowerCase()}>\n`;
    Object.entries(obj).forEach(([key, value]) => {
      xml += `    <${key.split(" ").join("_")}>${value}</${key.split(" ").join("_")}>\n`;
    });
    xml += `  </${itemName.toLowerCase()}>\n`;
  });

  xml += `</${rootName.toLowerCase()}>`;
  return xml;
}

export const xmlGenerator = async (fieldsData: any[], fileName: string) => {
  try {
    const xmlString = jsonToXml(fieldsData, "dataset", "record")
    const path = FileSystem.documentDirectory + `${fileName}.xml`;

    await FileSystem.writeAsStringAsync(path, xmlString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    shareMethod(path, 'application/xml', "XML");

  } catch (error) {
    Alert.alert(i18n.t("titleErrorShare"), i18n.t("descriptionErrorShare"))
  }
}

export const xmlDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void) => {
  try {

    if (!permissionsReadStorage()) {
      Alert.alert(i18n.t("titlePermissionDenied"), i18n.t("descriptionPermissionDenied"))
      return
    }

    const xmlContent = jsonToXml(fieldsData, "dataset", "record");
    const path = `${RNFS.DownloadDirectoryPath}/${fileName}.xml`;

    await RNFS.writeFile(path, xmlContent, 'utf8');

    setIsDownload(true);

  } catch (error) {
    Alert.alert(i18n.t("titleErrorDownload"), i18n.t("descriptionErrorDownload"))
  }
}

export const sqlGenerator = async (fieldsData: any[], fileName: string) => {
  try {
    const tableName = 'DATA_MOCKER';
    const keys = Object.keys(fieldsData[0]);

    const sqlStatements = fieldsData.map(item => {
      const values = keys.map(key => {
        const value = item[key];
        if (typeof value === 'number') return value;
        if (value === null || value === undefined) return 'NULL';
        return `'${String(value).replace(/'/g, "''")}'`;
      }).join(', ');

      return `insert into ${tableName} (${keys.map(k => k.split(" ").join("_")).join(', ')}) values (${values});`;
    }).join('\n');

    const path = FileSystem.documentDirectory + `${fileName}.sql`;

    await FileSystem.writeAsStringAsync(path, sqlStatements, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    shareMethod(path, 'application/sql', "SQL");

  } catch (error) {
    Alert.alert(i18n.t("titleErrorShare"), i18n.t("descriptionErrorShare"))
  }
};

export const sqlDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void) => {
  try {

    if (!permissionsReadStorage()) {
      Alert.alert(i18n.t("titlePermissionDenied"), i18n.t("descriptionPermissionDenied"))
      return
    }

    const tableName = 'data_generator';
    const keys = Object.keys(fieldsData[0]);

    const sqlStatements = fieldsData.map(item => {
      const values = keys.map(key => {
        const value = item[key];
        if (typeof value === 'number') return value;
        if (value === null || value === undefined) return 'NULL';
        return `'${String(value).replace(/'/g, "''")}'`;
      }).join(', ');

      return `insert into ${tableName} (${keys.map(k => k.split(" ").join("_")).join(', ')}) values (${values});`;
    }).join('\n');

    const path = `${RNFS.DownloadDirectoryPath}/${fileName}.sql`;

    await RNFS.writeFile(path, sqlStatements, 'utf8');

    setIsDownload(true);

  } catch (error) {
    Alert.alert(i18n.t("titleErrorDownload"), i18n.t("descriptionErrorDownload"))
  }
};

export const jsonGenerator = async (fieldsData: any[], fileName: string) => {
  try {
    const jsonString = JSON.stringify(fieldsData, null, 2);
    const path = FileSystem.documentDirectory + `${fileName}.json`;

    await FileSystem.writeAsStringAsync(path, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    shareMethod(path, 'application/json', "JSON");

  } catch (error) {
    Alert.alert(i18n.t("titleErrorShare"), i18n.t("descriptionErrorShare"))
  }
}

export const jsonDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void) => {
  try {

    if (!permissionsReadStorage()) {
      Alert.alert(i18n.t("titlePermissionDenied"), i18n.t("descriptionPermissionDenied"))
      return
    }

    const jsonString = JSON.stringify(fieldsData, null, 2);

    const path = `${RNFS.DownloadDirectoryPath}/${fileName}.json`;

    await RNFS.writeFile(path, jsonString, 'utf8');

    setIsDownload(true);

  } catch (error) {
    Alert.alert(i18n.t("titleErrorDownload"), i18n.t("descriptionErrorDownload"))
  }
}

export const shareMethod = async (path: string, mimeType: string, format: string) => {
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(path, {
      mimeType,
      dialogTitle: `${i18n.t("shareFile")} ${format}`,
    });
  } else {
    Alert.alert(i18n.t("errorShare"));
  }
};

export const permissionsReadStorage = async (): Promise<boolean> => {

  if (Platform.OS === 'android' && Platform.Version < 29) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: i18n.t("titleStorage"),
        message: i18n.t("messageStorage"),
        buttonNeutral: i18n.t("askafter"),
        buttonNegative: i18n.t("cancel"),
        buttonPositive: i18n.t("accept"),
      }
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED
  }

  return true
}