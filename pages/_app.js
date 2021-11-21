import 'tailwindcss/tailwind.css'
import {BasicLayout} from '../components/Layouts/BasicLayout'

function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
    )
    
}

export default MyApp