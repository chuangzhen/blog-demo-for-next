import { NextPage } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import React,{ useEffect } from "react";
import Comp1 from "../../components/blog/blog-comp1";

// posts will be populated at build time by getStaticProps()
const Blog:NextPage = (props:any) => {
console.log("🚀 ~ file: index.tsx ~ line 7 ~ props", props)
  const {posts = []} = props
  useEffect(() => {
    console.log(1112222);
    
  },[])


  return (
    <div>
      <h3>获取本地静态文件内容</h3>
      <Comp1 />
    <ul>
      {posts?.map((post:any,index:number) => (
        <li key={index+post.filename}>
          <h3>{post.filename}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  //获取本地文件内容
  
  const postsDirectory = path.join(process.cwd(), '/pages/posts')
  const filenames = await fs.readdir(postsDirectory)
  console.log(postsDirectory,"🚀 ~ file: index.tsx ~ line 28 ~ getStaticProps ~ filenames", filenames)

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    }
  })
  console.log("🚀 ~ file: index.tsx ~ line 41 ~ posts ~ posts", posts)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: await Promise.all(posts),
    },
  }
  // return {
  //   props: {
  //     posts: [{filename:'aa',content:'bb'}],
  //   },
  // }
}

export default Blog