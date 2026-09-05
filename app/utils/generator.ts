import * as FileSystem from 'expo-file-system/legacy';
import { Alert } from 'react-native';
import XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';
import { generateFakeData } from './fakerGenerator';

import { IColumn } from '../interface/Column';

import { fileStore } from '../store/file.store';

export const generateData = (fields: IColumn[]) => {
  return generateFakeData(fields, fileStore.rows === "" ? 1000 : Number(fileStore.rows));
};

export const excelGenerator = async (fieldsData: any[], fileName: string, t: (scope: string, options?: object | undefined) => string) => {

  try {

    const ws = XLSX.utils.json_to_sheet(fieldsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, t("data"));
    const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });

    const path = FileSystem.documentDirectory + `${fileName}.xlsx`;

    await FileSystem.writeAsStringAsync(path, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    shareMethod(path, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "Excel", t);
  } catch (error) {
    Alert.alert(t("titleErrorShare"), t("descriptionErrorShare"))
  }
};

export const excelDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void, t: (scope: string, options?: object | undefined) => string) => {

  try {

    const ws = XLSX.utils.json_to_sheet(fieldsData);

    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    const wbout = XLSX.write(wb, {
      type: 'base64',
      bookType: 'xlsx',
    });

    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (!permissions.granted) {
      Alert.alert(
        t('titlePermissionDenied'),
        t('descriptionPermissionDenied')
      );

      return;
    }

    const uri =
      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        `${fileName}.xlsx`,
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );

    await FileSystem.writeAsStringAsync(uri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    setIsDownload(true);

  } catch (error) {
    console.error(error);
    Alert.alert(
      t('titleErrorDownload'),
      t('descriptionErrorDownload')
    );
  }
};

export const csvGenerator = async (fieldsData: any[], fileName: string, areHeaders: boolean, t: (scope: string, options?: object | undefined) => string) => {

  try {

    const keys = Object.keys(fieldsData[0]);

    const csvRows = areHeaders
      ? [
        keys.join(','),
        ...fieldsData.map(row =>
          keys
            .map(k => `"${(row[k] ?? '').toString().replace(/"/g, '""')}"`)
            .join(',')
        ),
      ]
      : fieldsData.map(row =>
        keys
          .map(k => `"${(row[k] ?? '').toString().replace(/"/g, '""')}"`)
          .join(',')
      )

    const csvString = csvRows.join('\n')
    const path = FileSystem.documentDirectory + `${fileName}.csv`

    await FileSystem.writeAsStringAsync(path, csvString, {
      encoding: FileSystem.EncodingType.UTF8,
    })

    shareMethod(path, 'text/csv', 'CSV', t)

  } catch (error) {
    Alert.alert(t('titleErrorShare'), t('descriptionErrorShare'))
  }
}

export const csvDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void, areHeaders: boolean, t: (scope: string, options?: object | undefined) => string) => {

  try {

    const ws = XLSX.utils.json_to_sheet(fieldsData);

    let csv = XLSX.utils.sheet_to_csv(ws);

    if (!areHeaders) {
      csv = csv.split('\n').slice(1).join('\n');
    }

    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (!permissions.granted) {
      Alert.alert(
        t('titlePermissionDenied'),
        t('descriptionPermissionDenied')
      );

      return;
    }

    const uri =
      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        `${fileName}.csv`,
        'text/csv'
      );

    await FileSystem.writeAsStringAsync(uri, csv, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    setIsDownload(true);

  } catch (error) {
    Alert.alert(
      t('titleErrorDownload'),
      t('descriptionErrorDownload')
    );
  }
};

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

export const xmlGenerator = async (fieldsData: any[], fileName: string, root_element_xml: string = "Items", record_element_xml: string = "Items", t: (scope: string, options?: object | undefined) => string) => {
  try {
    const xmlString = jsonToXml(fieldsData, root_element_xml, record_element_xml)
    const path = FileSystem.documentDirectory + `${fileName}.xml`;

    await FileSystem.writeAsStringAsync(path, xmlString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    shareMethod(path, 'application/xml', "XML", t);

  } catch (error) {
    Alert.alert(t("titleErrorShare"), t("descriptionErrorShare"))
  }
}

export const xmlDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void, root_element_xml: string = "dataset", record_element_xml: string = "record", t: (scope: string, options?: object | undefined) => string) => {

  try {

    const xmlContent = jsonToXml(fieldsData, root_element_xml, record_element_xml)

    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (!permissions.granted) {
      Alert.alert(
        t("titlePermissionDenied"),
        t("descriptionPermissionDenied")
      );

      return;
    }

    const uri =
      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        `${fileName}.xml`,
        "application/xml"
      );

    await FileSystem.writeAsStringAsync(uri, xmlContent, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    setIsDownload(true);

  } catch (error) {
    console.error(error);
    Alert.alert(
      t("titleErrorDownload"),
      t("descriptionErrorDownload")
    );
  }
};

export const sqlGenerator = async (fieldsData: any[], fileName: string, table_name: string, t: (scope: string, options?: object | undefined) => string) => {
  try {
    const tableName = table_name;
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

    shareMethod(path, 'application/sql', "SQL", t);

  } catch (error) {
    Alert.alert(t("titleErrorShare"), t("descriptionErrorShare"))
  }
};

export const sqlDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void, table_name: string, t: (scope: string, options?: object | undefined) => string) => {

  try {

    const tableName = table_name;
    const keys = Object.keys(fieldsData[0]);

    const sqlStatements = fieldsData.map(item => {
      const values = keys.map(key => {
        const value = item[key];

        if (typeof value === "number") {
          return value;
        }

        if (value === null || value === undefined) {
          return "NULL";
        }

        return `'${String(value).replace(/'/g, "''")}'`;
      }).join(", ");

      return `insert into ${tableName} (${keys
        .map(k => k.split(" ").join("_"))
        .join(", ")}) values (${values});`;

    }).join("\n");

    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (!permissions.granted) {
      Alert.alert(
        t("titlePermissionDenied"),
        t("descriptionPermissionDenied")
      );

      return;
    }

    const uri =
      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        `${fileName}.sql`,
        "application/sql"
      );

    await FileSystem.writeAsStringAsync(uri, sqlStatements, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    setIsDownload(true);

  } catch (error) {
    console.error(error);
    Alert.alert(
      t("titleErrorDownload"),
      t("descriptionErrorDownload")
    );
  }
};

export const jsonGenerator = async (fieldsData: any[], fileName: string, json_array: boolean, t: (scope: string, options?: object | undefined) => string) => {
  try {

    let jsonString: string

    if (json_array) {
      jsonString = JSON.stringify(fieldsData, null, 2)
    } else {
      jsonString = fieldsData.map(obj => JSON.stringify(obj)).join('\n')
    }

    const path = FileSystem.documentDirectory + `${fileName}.json`;

    await FileSystem.writeAsStringAsync(path, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    shareMethod(path, 'application/json', "JSON", t);

  } catch (error) {
    Alert.alert(t("titleErrorShare"), t("descriptionErrorShare"))
  }
}

export const jsonDownload = async (fieldsData: any[], fileName: string, setIsDownload: (data: boolean) => void, json_array: boolean, t: (scope: string, options?: object | undefined) => string) => {

  try {

    let jsonString: string;

    if (json_array) {
      jsonString = JSON.stringify(fieldsData, null, 2);
    } else {
      jsonString = fieldsData
        .map(obj => JSON.stringify(obj))
        .join("\n");
    }

    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (!permissions.granted) {
      Alert.alert(
        t("titlePermissionDenied"),
        t("descriptionPermissionDenied")
      );

      return;
    }

    const uri =
      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        `${fileName}.json`,
        "application/json"
      );

    await FileSystem.writeAsStringAsync(uri, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    setIsDownload(true);

  } catch (error) {
    console.error(error);
    Alert.alert(
      t("titleErrorDownload"),
      t("descriptionErrorDownload")
    );
  }
};

export const shareMethod = async (path: string, mimeType: string, format: string, t: (scope: string, options?: object | undefined) => string) => {
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(path, {
      mimeType,
      dialogTitle: `${t("shareFile")} ${format}`,
    });
  } else {
    Alert.alert(t("errorShare"));
  }
}