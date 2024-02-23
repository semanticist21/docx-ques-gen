import libre from 'libreoffice-convert'
import util from 'util'


/**
 * Converts a file to PDF format.
 * @param file - The file to be converted.
 * @returns A Promise that resolves to the converted PDF file as a Blob.
 */
export const convertToPdf = async (file: Blob): Promise<Blob> => {
  const asyncConverter = util.promisify(libre.convert)

  const arrBuffer = await new Response(file).arrayBuffer()
  const buffer = Buffer.from(arrBuffer)

  const pdfBuf = await asyncConverter(buffer, '.pdf', undefined)

  return new Blob([pdfBuf], {type: 'application/pdf'})
}
