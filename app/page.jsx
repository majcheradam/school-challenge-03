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
                Open AI is working to make the world&apos;s best AI models open.
              </h2>
            </div>
          </div>
          <div className="content-secondary">
            <div className="form">
              <h2>In the meantime...</h2>
              <h1>Generate any image imaginable.</h1>
              <form>
                <input type="text" />
                <button type="submit">Generate</button>
              </form>
              <Image
                src="/Gallery.jpg"
                alt="Gallery"
                width="660"
                height="304"
              />
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <div className="send">
              <h2>Let me know when you&apos;re done baking!</h2>
              <form>
                <input type="text" placeholder="Enter you email" />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="information">
              <span>
                <p>© Open AITM 2014 - 2023</p>
              </span>
              <p>
                <Link href="https://open.ai/terms">Terms of Use</Link>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
