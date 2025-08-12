import { getFaker } from './imports';

import { IColumn } from '../interface/Column';

export const faker = getFaker('en');

export const generateFakeData = (fields: IColumn[], count: number) => {
    return faker.helpers.multiple(() => {
        let record: any = {};

        const genderCol = fields.find(c => c.topic === 'Gender')
        const firstNameCol = fields.find(c => c.topic === 'First name')
        const lastNameCol = fields.find(c => c.topic === 'Last name')

        let genderValue: 'male' | 'female' | undefined;

        if (genderCol) {
            const shouldBeEmpty = genderCol.blank && Math.random() < genderCol.blank;
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
            const shouldBeEmpty = column.blank && Math.random() < column.blank;

            switch (column.topic) {
                case 'Gender':
                    orderedRecord[column.fieldName] = record[column.fieldName];
                    break;
                case 'First name':
                    orderedRecord[column.fieldName] = fname;
                    break;
                case 'Last name':
                    orderedRecord[column.fieldName] = lname;
                    break;
                case 'Full name':
                    orderedRecord[column.fieldName] = `${fname} ${lname}`;
                    break;
                case 'Email':
                    orderedRecord[column.fieldName] = faker.internet.email({ firstName: fname, lastName: lname });
                    break;
                case 'Username':
                    orderedRecord[column.fieldName] = faker.internet.username({ firstName: fname, lastName: lname });
                    break;
                default:
                    orderedRecord[column.fieldName] = shouldBeEmpty
                        ? ''
                        : column.data(column.min!, column.max!, column.array!);
                    break;
            }
        }

        return orderedRecord;
    }, { count });
}
