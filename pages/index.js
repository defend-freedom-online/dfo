import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

var USERS = {
  "tass": 1123132,
  "wagner": 432239,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Act up for Ukraine with just your Browser</title>
        <link rel="icon" href="/dfo.png" />
      </Head>

      <main className={styles.main}>
        <a href="/"><img src="/dfo.png" width="120"/></a><br/><br/>

        <h1 className={styles.title}>
          Act up for Ukraine with <br/>just your Browser
        </h1>

        <p className={styles.description}>
          <b>Feeling powerless in the Ukraining conflict?</b><br/> Act up by helping target russian military and
          propaganda websites one tab at a time. This app will simply use your browser to load images from target
          websites to overload their infrastructure with requests. A crowd-sourced denial of service attack you
          can join with one simple click.
        </p>

        <div className={styles.grid}>
          <a href="/attack/tass" className={styles.card}>
            <h2>Attack tass.ru &rarr;</h2>
            <p className={styles.card_desc}>
              Russian state owned News Agency cited as a source of disinformation as
              part of Russian influence operations.
            </p>
            <p>Join <b>{USERS["tass"]}</b> attackers online</p>
          </a>

          <a href="/attack/wagner" className={styles.card}>
            <h2>Attack join-wagner.com &rarr;</h2>
            <p className={styles.card_desc}>
              Russian paramilitary group used by the Russian Ministry of Defense where plausible deniability
              is called for.
            </p>
            <p>Join <b>{USERS["wagner"]}</b> attackers online</p>
          </a>
        </div>

        <div className={styles.footer}>
          <a href="https://github.com/defend-freedom-online/dfo">Source Code</a>
        </div>
      </main>
    </div>
  )
}

(() => {
  console.log("gm!");
})()
