import * as FileSystem from 'expo-file-system';
import RNFS from 'react-native-fs';
import { PermissionsAndroid, Platform } from 'react-native';
import XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';
import { getFaker } from './imports';
import i18n from '../../i18n';

import { IColumn } from '../interface/Column';

import { fileStore } from '../store/file.store';

export const faker = getFaker('en');

export const generateData = (fields: IColumn[]) => {
    const users = faker.helpers.multiple(() => {
        let record: any = {};
        for (let i = 0; i < fields.length; i++) {
            const column = fields[i];
            const shouldBeEmpty = column.blank && Math.random() < column.blank;
            record[column.fieldName] = shouldBeEmpty ? '' : column.data(fields[i].min!, fields[i].max!);
        }
        return record;
    }, { count: Number(fileStore.rows) });

    return users;
}


export const excelGenerator = async (fieldsData: any[], fileName: string) => {

    try {

        const ws = XLSX.utils.json_to_sheet(fieldsData);

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, i18n.t("data"));

        const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });

        const path = FileSystem.documentDirectory + `${fileName}.xlsx`;

        await FileSystem.writeAsStringAsync(path, wbout, {
            encoding: FileSystem.EncodingType.Base64,
        })

        shareMethod(path, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "Excel")

        // await downloadFromUrl(path, `${fileName}.xlsx`);

        // setIsDownloaded(true)

    } catch (error) {
        console.error('Error al exportar Excel:', error);
    }
}

export const excelDownload = async (fieldsData: any[], fileName: string) => {
    try {

        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Permiso de almacenamiento',
                    message: 'La app necesita acceso a tu almacenamiento para guardar archivos.',
                    buttonNeutral: 'Preguntar luego',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'Aceptar',
                }
            );

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Permiso denegado');
                return;
            }
        }

        const ws = XLSX.utils.json_to_sheet(fieldsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Datos');

        const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

        const path = `${RNFS.DownloadDirectoryPath}/${fileName}.xlsx`;

        const buffer = Buffer.from(wbout, 'binary');

        await RNFS.writeFile(path, buffer.toString('base64'), 'base64');

        console.log('Archivo guardado en:', path);
        alert('Archivo Excel guardado en Descargas');

    } catch (error) {
        console.error('Error al guardar archivo Excel:', error);
    }
};


export const csvGenerator = async (fieldsData: any[], fileName: string) => {

    try {

        const keys = Object.keys(fieldsData[0]);
        const csvRows = [
            keys.join(','),
            ...fieldsData.map(row => keys.map(k => `"${(row[k] ?? '').toString().replace(/"/g, '""')}"`).join(','))
        ];
        const csvString = csvRows.join('\n');

        const path = FileSystem.documentDirectory + `${fileName}.csv`

        await FileSystem.writeAsStringAsync(path, csvString, {
            encoding: FileSystem.EncodingType.UTF8,
        });

        shareMethod(path, 'text/csv', "CSV")

    } catch (error) {
        console.error('Error al exportar CSV:', error);
    }
}

export const xmlGenerator = async (fieldsData: any[], fileName: string) => {

    try {

        const xmlItems = fieldsData.map(item => {
            const fields = Object.entries(item).map(([key, value]) => {
                return `<${key}>${String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</${key}>`;
            }).join('');
            return `<item>${fields}</item>`;
        }).join('');

        const xmlString = `<?xml version="1.0" encoding="UTF-8"?><items>${xmlItems}</items>`;

        const path = FileSystem.documentDirectory + `${fileName}.xml`;

        await FileSystem.writeAsStringAsync(path, xmlString, {
            encoding: FileSystem.EncodingType.UTF8,
        })

        shareMethod(path, 'application/xml', "XML")

    } catch (error) {
        console.error('Error al exportar XML:', error);
    }
}

export const sqlGenerator = async (fieldsData: any[], fileName: string) => {

    try {

        const tableName = 'data_generator';
        const keys = Object.keys(fieldsData[0]);

        const sqlStatements = fieldsData.map(item => {
            const values = keys.map(key => {
                const value = item[key];
                if (typeof value === 'number') {
                    return value;
                } else if (value === null || value === undefined) {
                    return 'NULL';
                } else {
                    const escapedValue = String(value).replace(/'/g, "''");
                    return `'${escapedValue}'`;
                }
            }).join(', ');

            return `insert into ${tableName} (${keys.join(', ')}) values (${values});`;
        }).join('\n');

        const path = FileSystem.documentDirectory + `${fileName}.sql`

        await FileSystem.writeAsStringAsync(path, sqlStatements, {
            encoding: FileSystem.EncodingType.UTF8,
        })

        shareMethod(path, 'application/sql', "SQL")

    } catch (error) {
        console.error('Error al exportar SQL:', error);
    }
}

export const jsonGenerator = async (fieldsData: any[], fileName: string) => {

    try {

        const jsonString = JSON.stringify(fieldsData, null, 2);

        const path = FileSystem.documentDirectory + `${fileName}.json`

        await FileSystem.writeAsStringAsync(path, jsonString, {
            encoding: FileSystem.EncodingType.UTF8,
        })

        shareMethod(path, 'application/json', "SQL")

    } catch (error) {
        console.error('Error al exportar JSON:', error);
    }
}

const downloadFromUrl = async (url: string, fileName: string) => {

    try {


    } catch (error) {
        console.error(`${i18n.t("errorDownload")}:`, error);
    }
}

export const shareMethod = async (path: string, mimeType: string, format: string) => {
    if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(path, {
            mimeType,
            dialogTitle: `${i18n.t("shareFile")} ${format}`,
        })
    } else {
        alert(i18n.t("errorShare"));
    }
}


// faker.definitions. // CHEQUEAR, TE MUESTRA LOS ARRAYS
// faker.helpers. // CHEQUEAR EN EL FUTURO QUIZA
// faker.color.cssSupportedFunction()