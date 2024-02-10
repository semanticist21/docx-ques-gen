import DocView from "@/components/molecules/doc_view"

const PrintPage = () => {
  // options to make.
  // 0. Document Format > 대회용 / 일반용 / 유아용
  // 1. Question/answer page > includes answers?
  // 2. 곱셈 or 나눗셈 or 더하기
  // 큰 수 앞 or 뒤 or 반반?
  // 3. 인쇄할 종이 수
  // 4. 자리수 섞기
  // 5. 동일 수 제한(4444 등)
  // >> 정답지는 한 번에 인쇄할 수 있도록(문제 생성을 계속 선택..)? 좀 더 생각해보자
  // export const DocumnetTypes = ['competition', 'normal', 'children'] as const

  const docTest: string = 'https://calibre-ebook.com/downloads/demos/demo.docx'

  return (
    <div>
      <h1>Print Page</h1>
      <DocView links={[docTest]} />
    </div>
  )
}

export default PrintPage
