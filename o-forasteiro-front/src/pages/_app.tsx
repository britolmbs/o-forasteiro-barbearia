import type { AppProps } from "next/app"
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import { AuthProvider } from "../context/AuthContext"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        barber: {
          900: { value: '#12131b' },
          400: { value: '#1b1c29' },
          100: { value: '#c6c6c6' },
          200: {value: '#FFF'}
        },
        button: {
          cta: { value: '#fba931' },
          default: { value: '#FFF' },
          gray: { value: '#DFDFDF' },
          danger: { value: '#FF4040' },
        },
        orange: {
          900: { value: '#fba931' }
        }
      }
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp