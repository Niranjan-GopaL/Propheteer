// This should contain layout of entire application

import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from './(shared)/Navbar'




// You can configure it MUCH MUCH more, wieghts, other effects. Point is that now 
// Next would OPTIMISE PERFOMANCE IN THIS WAY. remember NEXT = PERFOMANCE
const openSans = Open_Sans({
  subsets:["latin"]
})


// Metadata is all for SEO :- https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: 'Profiteer',
  // Description is for Search Engine Optimization. For our app to get sited more 
  // write good descriptions so that Google search engine can understand it to be good.
  description: 'Next gen Blog post website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Now we can use Open_Sans throughout our application
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
