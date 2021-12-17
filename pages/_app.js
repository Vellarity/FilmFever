import 'tailwindcss/tailwind.css'
import {BasicLayout} from '../components/Layouts/BasicLayout'
import '../public/App.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='body'>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </div>
    
    )
    
}

export default MyApp