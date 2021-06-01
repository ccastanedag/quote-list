import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'

const Navbar = () => {
  return(
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={132} height={48}/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/quotes"><a>Quote Listing</a></Link>
    </nav>
  )
}

export default Navbar
