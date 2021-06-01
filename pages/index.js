import Link from 'next/Link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Viral Quotes | Home</title>
        <meta name="keywords" content="quotes" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem consectetur tempor non duis ex in ullamco laborum tempor irure est mollit. Labore ea non sit consectetur amet et anim officia qui elit dolor. Aliquip ad culpa sint in ut minim tempor magna mollit ad ad. Aliqua eiusmod mollit non labore laboris dolor exercitation eiusmod ad.</p>
        <p className={styles.text}>Lorem consectetur tempor non duis ex in ullamco laborum tempor irure est mollit. Labore ea non sit consectetur amet et anim officia qui elit dolor. Aliquip ad culpa sint in ut minim tempor magna mollit ad ad. Aliqua eiusmod mollit non labore laboris dolor exercitation eiusmod ad.</p>
        <Link href="/quotes">
          <a className={styles.btn}>See Quote Listing</a>
        </Link>
      </div>
    </>
  )
}
