import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PortableText from 'react-portable-text'
import SanityClient from '../client';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog);
  console.log(blog.title)

  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <PortableText content={blog.body}>

      </PortableText>

    </main>
  </div>;
};

// export async function getStaticPaths() {
//   let allb = await SanityClient.fetch("*[_type == 'post']")
  

//   allb = allb.map((item)=>{
//     return { params: { slug: item.slug.current} }
//   })
//   console.log(allb)
//   return {
//     paths: allb,
//     fallback: true // false or 'blocking'
//   };
// }

export async function getServerSideProps(context) {
  const { slug } = context.params;

  
    const data = await SanityClient.fetch(`*[slug.current == '${slug}']`)
  console.log(slug)
  const myBlog = await data[0]
  return {
    props:{myBlog:myBlog}}
}
export default Slug;
