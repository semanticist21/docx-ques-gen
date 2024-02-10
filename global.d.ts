// scss 모듈 타입 지정
declare module '*.scss'

// useTheme() 타입 지정
import {Theme} from '@mui/material/styles'

// 테마 인터페이스 확장
declare module '@mui/material/styles' {
  interface Theme {
    drawerWidth: string | number
  }

  // `createTheme` 함수의 반환 타입도 확장
  interface ThemeOptions {
    drawerWidth?: string | number
  }
}
