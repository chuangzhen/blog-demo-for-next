import { NextPage } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import React,{ useEffect } from "react";

// posts will be populated at build time by getStaticProps()
const Blog:NextPage = (props:any) => {
console.log("🚀 ~ file: index.tsx ~ line 7 ~ props", props)
  const {posts = []} = props
  useEffect(() => {
    console.log(1112222);
    
  },[])


  return (
    <div>
      <h3 className='name'>blog-comp1</h3>
  
   
    </div>
  )
}



export default Blog