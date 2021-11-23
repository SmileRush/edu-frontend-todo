### • ~/pages/_document.tsx 만들기         ~는 최상위 폴더 경로 (=root 경로, /를 의미합니다)  
### styled-components의 Server Side Rendering을 위한 코드  
  
##  npm i styled-components && npm i -D @types/styled-components


import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      })
      
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}

### • ~/.babelrc 만들기
### styled-components의 Server Side Rendering을 위한 코드

{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      { "ssr": true }
    ]
  ]
}
