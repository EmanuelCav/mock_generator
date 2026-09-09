import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import ContainerBackground from './ContainerBackground';

import PreviewCSV from './preview/PreviewCSV';
import PreviewJSON from './preview/PreviewJSON';
import PreviewXML from './preview/PreviewXML';
import PreviewSQL from './preview/PreviewSQL';
import PreviewXLSX from './preview/PreviewXLSX';

import { PreviewPropsType } from '../types/home.types';

const MAX_PREVIEW_ROWS = 20;

const Preview = ({ setIsPreview, data, format, header_csv, json_array, record_element_xml, root_element_xml, table_name_sql, t }: PreviewPropsType) => {

  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(
    data.length / MAX_PREVIEW_ROWS
  )

  const previewData = useMemo(() => {

    const start = page * MAX_PREVIEW_ROWS;
    const end = start + MAX_PREVIEW_ROWS;

    return data.slice(start, end);

  }, [data, page])

  const goNext = () => {
    if (page < totalPages - 1) {
      setPage(prev => prev + 1);
    }
  }

  const goPrevious = () => {
    if (page > 0) {
      setPage(prev => prev - 1);
    }
  }

  const renderPreview = () => {

    switch (format) {

      case "csv":
        return (
          <PreviewCSV
            data={previewData}
            header_csv={header_csv}
          />
        );

      case "json":
        return (
          <PreviewJSON
            data={previewData}
            json_array={json_array}
          />
        );

      case "xml":
        return (
          <PreviewXML
            data={previewData}
            record_element_xml={record_element_xml}
            root_element_xml={root_element_xml}
          />
        );

      case "sql":
        return (
          <PreviewSQL
            data={previewData}
            table_name_sql={table_name_sql}
          />
        );

      case "excel":
        return (
          <PreviewXLSX
            data={previewData}
          />
        );

      default:
        return null;

    }

  };

  const startRow = data.length === 0
    ? 0
    : page * MAX_PREVIEW_ROWS + 1;

  const endRow = Math.min(
    (page + 1) * MAX_PREVIEW_ROWS,
    data.length
  )

  return (

    <ContainerBackground
      onClose={() => setIsPreview(false)}
      title="PREVIEW"
    >
      <View className="mb-4 flex-row items-center justify-between">
        <View>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {t("showing")} {startRow}-{endRow} {t("of")} {data.length} {t("rows_title")}
          </Text>
        </View>

        <Text className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
          {format.toUpperCase()}
        </Text>

      </View>

      {renderPreview()}

      {totalPages > 1 && (

        <View className="mt-5 flex-row items-center justify-between">
          <Pressable
            onPress={goPrevious}
            disabled={page === 0}
            className={`flex-row items-center gap-2 rounded-xl px-4 py-3 ${page === 0
              ? "bg-gray-200 dark:bg-gray-800"
              : "bg-emerald-500 active:opacity-80"
              }`}
          >

            <Feather
              name="chevron-left"
              size={20}
              color={page === 0 ? "#9CA3AF" : "#FFFFFF"}
            />

          </Pressable>

          <View className="items-center">

            <Text className="text-sm font-bold text-black dark:text-white">
              {t("page")} {page + 1} / {totalPages}
            </Text>

          </View>

          <Pressable
            onPress={goNext}
            disabled={page === totalPages - 1}
            className={`flex-row items-center gap-2 rounded-xl px-4 py-3 ${page === totalPages - 1
              ? "bg-gray-200 dark:bg-gray-800"
              : "bg-emerald-500 active:opacity-80"
              }`}
          >

            <Feather
              name="chevron-right"
              size={20}
              color={
                page === totalPages - 1
                  ? "#9CA3AF"
                  : "#FFFFFF"
              }
            />

          </Pressable>

        </View>

      )}

    </ContainerBackground>

  );

};

export default Preview;