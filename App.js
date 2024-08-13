import IndexRouter from './src/routers/indexRouter'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <IndexRouter />
    </SafeAreaProvider>

  )
}

export default App

