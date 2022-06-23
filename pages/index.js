import Head from 'next/head'
import Faq from '../components/Faq'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample Deploy</title>
        <meta name="description" content="Official Website of Student Affairs Service" />
      </Head>

    
      <Faq />

    </div>
  )
}
