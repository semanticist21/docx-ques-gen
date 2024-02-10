import DocViewer, {IDocument, DocViewerRenderers} from 'react-doc-viewer'

export interface DocViewProps {
  links?: string[]
  locals?: string[]
}

const DocView = ({links, locals}: DocViewProps) => {
  let docs: IDocument[] = []

  if (links) docs = [...docs, ...links?.map(link => ({uri: link}))]
  if (locals) docs = [...docs, ...locals?.map(local => ({uri: local}))]

  return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} style={{height: '30rem'}} />
}

export default DocView
