import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Quotes.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { quotes: data }
  }
}

const Quotes = ({ quotes }) => {
  return (
    <>
      <Head>
        <title>Viral Quotes | Quotes</title>
        <meta name="keywords" content="quotes" />
      </Head>
      <div>
        <h1>All Quotes</h1>
        {quotes.map(quote =>{
          return (
            <Link key={quote.id} href={`/quotes/${quote.id}`}>
              <a className={styles.single}>
                <h3>{quote.name}</h3>
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Quotes
