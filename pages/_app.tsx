import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig } from '../styles/stepperTheme';
import { Dict } from '@chakra-ui/utils';

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: (props: { [x: string]: any; colorScheme: string; colorMode: "light" | "dark"; orientation: "horizontal" | "vertical" | undefined; theme: Dict<any>; }) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      icon: {
        ...StepsStyleConfig.baseStyle(props).icon,
        // your custom styles here
        strokeWidth: '1px',
      },
    };
  },
};

const theme = extendTheme({
  components: {
    Steps: CustomSteps
  },
  styles: {
    global: {
      body: {
        bg: 'none',
      }
    }
  }
});




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
