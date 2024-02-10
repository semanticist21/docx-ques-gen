import {FC, PropsWithChildren} from 'react'

const MainWrapper: FC<PropsWithChildren> = ({children}) => {
  return <div id="main-wrapper">{children}</div>
}

export default MainWrapper
