import DocViewer, {IDocument, DocViewerRenderers} from '@cyntler/react-doc-viewer'
import {useEffect, useState} from 'react'
export interface DocViewProps {
  links?: string[]
  locals?: File[]
}

const DocView = ({links, locals}: DocViewProps) => {
  // state props
  const [active, setActive] = useState<number>(0)

  // change handler
  const handlePrev = () => (active !== 0 ? setActive(active - 1) : null)
  const handleNext = () => (active < docs.length ? setActive(active + 1) : null)

  // doc props
  let docs: IDocument[] = []

  if (links) docs = [...links?.map(link => ({uri: link, fileType: 'docx'}))]
  if (locals) docs = [...docs, ...locals?.map(local => ({uri: URL.createObjectURL(local), fileType: 'docx'}))]

  if (docs.length === 0) return <div>표시할 문서가 없습니다.</div>

  return (
    <DocViewer
      initialActiveDocument={docs[0]}
      pluginRenderers={DocViewerRenderers}
      documents={[docs]}
      style={{height: '28rem', padding: '1rem'}}
      config={{
        header: {
          disableHeader: true,
          disableFileName: true,
          retainURLParams: false,
        },
      }}
    />
  )
}

export default DocView
