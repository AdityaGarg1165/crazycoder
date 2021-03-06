import Head from 'next/head'
import Link from 'next/link'
import SanityClient  from '../client'
import styles from '../styles/Home.module.css'

export default function Home({myBlog}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Made by aditya garg" />
        <meta name="keywords" content="nextjs, crazycoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          <img className={styles.myImg} src="/homeimg.jfif" width={237} height={158} alt="hunting coder" />
        </div>
        <h1 className={styles.title}>
          <span className='dummy'>&lt;CrazyCoder/&gt;</span>
        </h1>

        <div>
          {myBlog && myBlog.map((item,i)=>(
            <div key={i}>
              <h1>{item.title}</h1>
              <p>{item.metadescription}</p>
                <Link href={`/blogpost/${item.slug.current}`}>
              <button className={styles.btn}>Read More</button>
                </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
export async function getServerSideProps(){

  
  const data = await SanityClient.fetch(`*[_type == 'post']`)
  console.log(data)
  const myBlog = await data
  return{props:{myBlog}}
}