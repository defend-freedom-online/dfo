import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

var IMAGE_COUNT = 0;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Defend Ukraine one Tab at a Time</title>
        <link rel="icon" href="/dfo.png" />
      </Head>

      <main className={styles.main}>
        <a href="/"><img src="/dfo.png" width="120"/></a><br/><br/>

        <a href="" className={styles.card}>
          <h2>Attacking tass.ru...</h2>
          <p className={styles.card_desc}>
            Russian state owned News Agency cited as a source of disinformation as
            part of Russian influence operations.
          </p>
          <p><b>1 123 132</b> attackers online</p>
          <p><b id="image-count">{IMAGE_COUNT}</b> images loaded</p>
        </a>
      </main>
    </div>
  )
}

var fetch = () => {
    var img = document.createElement('img');
    img.setAttribute('src', 'https://mid.ru/' + new Date().getTime() + IMAGE_COUNT);
    IMAGE_COUNT += 1;
    document.getElementById("image-count").textContent = IMAGE_COUNT;
    setTimeout(fetch, 500);
};

(() => {
  console.log("gm!");
  if (process.browser) {
    fetch();
  }
})()
