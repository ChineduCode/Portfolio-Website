import '../styles/globals/globals.css'
import { PT_Sans } from 'next/font/google'

const pt_sans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'ChineduCode',
  description: 'ChineduCode portfolio website',
  keyword: 'Chinedu, ChineduCode, PortFolio Website, Web Developer, Software Engineer, Programmer',
  author: 'ChineduCode'
}

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body className={pt_sans.className}>
        {children}
      </body>
    </html>
  )
} 