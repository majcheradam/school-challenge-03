import Image from 'next/image'
import { Roboto } from '@next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <main>
        <div className="main-conteiner">
          <div className="content">
            <Image
              src="/OpenAI_icon.png"
              alt="Logo"
              width="984"
              height="273"
              className="logo"
            />
            <div className="content-text-box">
              <span>
                <h1>Imagine if the best AI models were open and free.</h1>
              </span>
              <h1>What would you do with them?</h1>
              <h2>
                Open AI is working to make the world's best AI models open.
              </h2>
            </div>
          </div>
          <div className="content-secondary"></div>
        </div>
      </main>
    </div>
  )
}
