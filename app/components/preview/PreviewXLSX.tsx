import { ScrollView, View, Text,  Dimensions } from 'react-native';

import { PreviewXLSXPropsType } from '../../types/home.types';

const PreviewXLSX = ({ data, colors }: PreviewXLSXPropsType) => {

  const headers = Object.keys(data[0] ?? {});

  return (
    <ScrollView horizontal style={{ paddingBottom: Dimensions.get("window").height / 66 }}>
      <View>
        <Text style={{ fontWeight: 'bold', color: colors.white }}>
          {headers.join(' | ')}
        </Text>

        {data.map((row: any, i: number) => (
          <Text style={{ color: colors.white }} key={i}>
            {headers.map(h => row[h]).join(' | ')}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default PreviewXLSX;