import Footer from './component/Footer/Footer'
import NavBar from './component/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './share/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
