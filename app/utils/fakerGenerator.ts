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
                : column.data(fields[i].min!, fields[i].max!);
        }
        return record;
    }, { count });
};
