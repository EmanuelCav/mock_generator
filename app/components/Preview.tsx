import ContainerBackground from './ContainerBackground';
import Close from './Close';

import PreviewCSV from './preview/PreviewCSV';
import PreviewJSON from './preview/PreviewJSON';
import PreviewXML from './preview/PreviewXML';
import PreviewSQL from './preview/PreviewSQL';
import PreviewXLSX from './preview/PreviewXLSX';

import { PreviewPropsType } from '../types/home.types';

const Preview = ({ colors, setIsPreview, data, format, header_csv, json_array, record_element_xml, root_element_xml, table_name_sql }: PreviewPropsType) => {

  const renderPreview = () => {
    switch (format) {
      case 'csv':
        return <PreviewCSV colors={colors} data={data} header_csv={header_csv} />

      case 'json':
        return <PreviewJSON colors={colors} data={data} json_array={json_array} />

      case 'xml':
        return <PreviewXML colors={colors} data={data} record_element_xml={record_element_xml} root_element_xml={root_element_xml} />

      case 'sql':
        return <PreviewSQL colors={colors} data={data} table_name_sql={table_name_sql} />

      case 'excel':
        return <PreviewXLSX colors={colors} data={data} />

      default:
        return null
    }
  }

  return (
    <ContainerBackground colors={colors} isField={true}>
      <Close handleClose={() => setIsPreview(false)} />
      {renderPreview()}
    </ContainerBackground>
  )
}

export default Preview;