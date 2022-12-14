import Head from 'next/head'
import Link from 'next/link'
import eidos from '../data/eidos/eidos.json'
import styles from '../styles/Home.module.css'

export default function Home() {
  const menu = eidos.sort((a,b)=>a.kat_id-b.kat_id);
  return (
    <div className={styles.container}>
      <Head>
        <title>ΚΕΥ e-Catalogues</title>
        <meta name="description" content="Generated by KEY-2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>        
        <h1 className={styles.title}>Welcome</h1>
        <div>
          <p>here let's add some menu EIDH</p>
          {menu.map(x=>(
                        <div key={x.kat_id}>
                          <Link href={`/category/${x.katigoria}`}>
                            <a>{x.kat_gr}</a>
                          </Link>
                        </div>
                        )
            )}
        </div>        
      </main>
      <footer className={styles.footer}>
        <p>KEY - 2023</p>
      </footer>
    </div>
  )
}
