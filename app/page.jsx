import Image from 'next/image'
import { Roboto } from '@next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
})

export default function Home() {
  return <div className={roboto.className}></div>
}
