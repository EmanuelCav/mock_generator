import { getFaker } from './imports';

import { IColumn } from '../interface/Column';

export const faker = getFaker('en');

export const generateData = (fields: IColumn[]) => {
    const users = faker.helpers.multiple(() => {
        let record: any = {};
        for (let i = 0; i < fields.length; i++) {
            record[fields[i].fieldName] = fields[i].data();
        }
        return record;
    }, { count: 5 });

    return users
};


// faker.definitions. // CHEQUEAR, TE MUESTRA LOS ARRAYS
// faker.helpers. // CHEQUEAR EN EL FUTURO QUIZA
// faker.color.cssSupportedFunction()