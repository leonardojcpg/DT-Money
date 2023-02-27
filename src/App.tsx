import { ThemeProvider } from "styled-components"
import { Transactions } from "./Pages/Transactions"
import { GlobalStyle } from "./Styles/global"
import { defaultTheme } from "./Styles/themes/default"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  )
}
