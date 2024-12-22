import GlobalKeyEventHandler from "./components/GlobalKeyEventHandler"
import { AppProvider } from "./contexts/appContext"
import RootLayout from "./layouts/RootLayout"

function App() {
  return (
    <AppProvider>
      <RootLayout/>
      <GlobalKeyEventHandler/>
    </AppProvider>
  )
}

export default App
