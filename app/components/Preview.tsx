import ContainerBackground from './ContainerBackground';

import PreviewCSV from './preview/PreviewCSV';
import PreviewJSON from './preview/PreviewJSON';
import PreviewXML from './preview/PreviewXML';
import PreviewSQL from './preview/PreviewSQL';
import PreviewXLSX from './preview/PreviewXLSX';

import { PreviewPropsType } from '../types/home.types';

const Preview = ({ setIsPreview, data, format, header_csv, json_array, record_element_xml, root_element_xml, table_name_sql }: PreviewPropsType) => {

  const renderPreview = () => {
    switch (format) {
      case 'csv':
        return <PreviewCSV data={data} header_csv={header_csv} />

      case 'json':
        return <PreviewJSON data={data} json_array={json_array} />

      case 'xml':
        return <PreviewXML data={data} record_element_xml={record_element_xml} root_element_xml={root_element_xml} />

      case 'sql':
        return <PreviewSQL data={data} table_name_sql={table_name_sql} />

      case 'excel':
        return <PreviewXLSX data={data} />

      default:
        return null
    }
  }

  return (
    <ContainerBackground onClose={() => setIsPreview(false)} title='PREVIEW'>
      {renderPreview()}
    </ContainerBackground>
  )
}

export default Preview;