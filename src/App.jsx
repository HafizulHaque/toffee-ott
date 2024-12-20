import { AppProvider } from "./contexts/appContext"
import RootLayout from "./layouts/RootLayout"

function App() {
  return (
    <AppProvider>
      <RootLayout/>
    </AppProvider>
  )
}

export default App
