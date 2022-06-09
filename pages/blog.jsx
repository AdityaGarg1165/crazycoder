import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SanityClient  from '../client';
import styles from '../styles/Blog.module.css'
// import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = ({data}) => {




  return <div className={styles.container}>
    <main className={styles.main}>
      {data && data.map((item,i)=>(
        <div key={i} className={styles.seperator}>
          <h1 className={styles.blogItemh3}>{item.title}</h1>
          <p>{item.metadescription}</p>
          <Link href={`/blogpost/${item.slug.current}`}>
        <button className={styles.btn}>read more</button>
          </Link>
        </div>
      ))}
    </main>
  </div>
};


export async function getStaticProps(context) {
  let data = await SanityClient.fetch("*[_type == 'post']")

  return {
    props: { data}, // will be passed to the page component as props
  }
}

export default Blog;
