// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'
import './styles.css'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable + ' ' + rubik.variable}>
        {children}
      </body>
    </html>
  )
}