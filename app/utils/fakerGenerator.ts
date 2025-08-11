import { getFaker } from './imports';

import { IColumn } from '../interface/Column';

export const faker = getFaker('en');

export const generateFakeData = (fields: IColumn[], count: number) => {
    return faker.helpers.multiple(() => {
        let record: any = {};
        for (let i = 0; i < fields.length; i++) {
            const column = fields[i];
            const shouldBeEmpty = column.blank && Math.random() < column.blank;
            record[column.fieldName] = shouldBeEmpty
                ? ''
                : column.data(fields[i].min!, fields[i].max!, fields[i].array!);
        }
        return record;
    }, { count });
};

const verifyField = (field: IColumn, fields: IColumn[]) => {

    switch (field.topic) {
        case "Full name":
            fields.forEach(f => f.topic === "Last name")
        // return faker.
        // break;

        default:
            break;
    }

}
