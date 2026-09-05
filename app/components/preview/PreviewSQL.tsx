import { ScrollView, Text } from "react-native";

import { PreviewSQLPropsType } from "../../types/home.types";

const PreviewSQL = ({ data, table_name_sql }: PreviewSQLPropsType) => {

  const sql = data
    .map((row: any) => {
      const keys = Object.keys(row).join(", ");

      const values = Object.values(row)
        .map((value) => `'${value}'`)
        .join(", ");

      return `INSERT INTO ${table_name_sql} (${keys}) VALUES (${values});`;
    })
    .join("\n");

  return (
    <ScrollView horizontal className="pb-4">
      <Text
        className="text-xs text-black dark:text-white"
        style={{ fontFamily: "monospace" }}
      >
        {sql}
      </Text>
    </ScrollView>
  );
};

export default PreviewSQL;