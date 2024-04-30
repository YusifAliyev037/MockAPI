import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Styles/global.css"
import { BrowserRouter } from "react-router-dom"
import GlobalProvider from './Store/global/GlobalProvider.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const queryClient = new QueryClient()
const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <GlobalProvider>
      <App />
      </GlobalProvider>
      </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  
)