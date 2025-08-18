import { getFaker } from './imports';

import { IColumn } from '../interface/Column';

export const faker = getFaker('en');

export const generateFakeData = (fields: IColumn[], count: number) => {
    let results: any[] = [];

    for (let rowIndex = 0; rowIndex < count; rowIndex++) {
        let record: any = {};

        const genderCol = fields.find(c => c.topic === 'Gender');

        let genderValue: 'male' | 'female' | undefined;

        if (genderCol) {
            const shouldBeEmpty = genderCol.blank ? (Math.random() < genderCol.blank / 100) : false;
            const gVal = shouldBeEmpty
                ? ''
                : genderCol.data(genderCol.min!, genderCol.max!, genderCol.array!);

            if (typeof gVal === 'string') {
                const g = gVal.toLowerCase();
                if (g === 'male' || g === 'female') {
                    genderValue = g as 'male' | 'female';
                }
            }
            record[genderCol.fieldName] = gVal;
        }

        const fname = faker.person.firstName(genderValue);
        const lname = faker.person.lastName(genderValue);

        let orderedRecord: any = {};
        for (let i = 0; i < fields.length; i++) {
            const column = fields[i];
            const shouldBeEmpty = column.blank ? (Math.random() < column.blank / 100) : false;

            switch (column.topic) {
                case 'Row number':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : rowIndex + 1
                    break;
                case 'Gender':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : record[column.fieldName];
                    break;
                case 'First name':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : fname;
                    break;
                case 'Last name':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : lname;
                    break;
                case 'Full name':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : `${fname} ${lname}`;
                    break;
                case 'Email':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : faker.internet.email({ firstName: fname, lastName: lname });
                    break;
                case 'Username':
                    orderedRecord[column.fieldName] = shouldBeEmpty ? '' : faker.internet.username({ firstName: fname, lastName: lname });
                    break;
                default:
                    orderedRecord[column.fieldName] = shouldBeEmpty
                        ? ''
                        : column.data(column.min!, column.max!, column.array!);
                    break;
            }
        }

        results.push(orderedRecord);
    }

    return results;
};
