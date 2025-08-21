import type { AppProps } from "next/app"
import { Provider } from "@/components/ui/provider"
import  from '@chakra-ui/react'

function MyApp({ Component, pageProps}: AppProps) {
    return (
    <Provider>
        <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp