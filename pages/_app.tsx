import { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyles'

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default app

// # ~/styles/GlobalStyles.ts 에서 내보내기 했던 GlobalStyle을 가져오기 하였다.
// # 그리고 app (FC: 함수형 컴포넌트)이 return하도록 포함시켰다.