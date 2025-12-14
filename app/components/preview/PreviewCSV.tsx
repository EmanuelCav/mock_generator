import { Dimensions, ScrollView, Text, View } from 'react-native';

import { PreviewCSVPropsType } from '../../types/home.types';

const PreviewCSV = ({ data, colors, header_csv }: PreviewCSVPropsType) => {

  const headers = Object.keys(data[0] ?? {});

  return (
    <ScrollView horizontal style={{ paddingBottom: Dimensions.get("window").height / 66 }}>
      <View>
        {header_csv && (
          <Text style={{ fontWeight: 'bold', color: colors.white }}>
            {headers.join(',')}
          </Text>
        )}

        {data.map((row: any, i: number) => (
          <Text
            key={i}
            style={{ fontFamily: 'monospace', color: colors.white }}
          >
            {headers.map(h => row[h]).join(',')}
          </Text>
        ))}
      </View>
    </ScrollView>
  )
}

export default PreviewCSV;