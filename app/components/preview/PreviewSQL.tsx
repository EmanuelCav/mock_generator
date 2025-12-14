import { Dimensions, ScrollView, Text } from 'react-native';

import { PreviewSQLPropsType } from '../../types/home.types';

const PreviewSQL = ({ data, colors, table_name_sql }: PreviewSQLPropsType) => {

  const sql = data
    .map((row: any) => {
      const keys = Object.keys(row).join(', ');
      const values = Object.values(row)
        .map(v => `'${v}'`)
        .join(', ');
      return `INSERT INTO ${table_name_sql} (${keys}) VALUES (${values});`;
    })
    .join('\n');

  return (
    <ScrollView horizontal style={{ paddingBottom: Dimensions.get("window").height / 66 }}>
      <Text style={{ fontFamily: 'monospace', fontSize: 12, color: colors.white }}>
        {sql}
      </Text>
    </ScrollView>
  );
};

export default PreviewSQL;