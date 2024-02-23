import {convertToPdf} from '@/utils/file'
import DocViewer, {IDocument, DocViewerRenderers} from '@cyntler/react-doc-viewer'
import {useEffect, useMemo, useState} from 'react'

export interface DocViewProps {
  links?: string[]
  blobs?: Blob[]
}

const DocView = ({links, blobs}: DocViewProps) => {
  // doc props
  const [docs, setDocs] = useState<IDocument[]>([])

  useEffect(() => {
    if (links) setDocs(links.map(link => ({uri: link, fileType: 'docx'})))

    const innerAsync = async () => {
      if (!blobs) return

      const convertedBlobs = await Promise.all(blobs.map(convertToPdf))
      const links = convertedBlobs.map(URL.createObjectURL)

      setDocs(links.map(link => ({uri: link, fileType: 'pdf'})))
    }

    innerAsync()
  }, [])

  if (docs.length === 0) return <div>표시할 문서가 없습니다.</div>

  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      initialActiveDocument={docs[0]}
      documents={docs}
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
