import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { getList } from "../api/posts";
import { useRouter } from "next/router";
// import style from "./posts.module.scss";

const Posts: NextPage = (props: any) => {
    const { list = {} } = props
    const router  = useRouter()
    console.log("🚀 ~ file: index.tsx ~ line 8 ~ props", props)

    const [name, setName] = useState<string>(list?.data?.extras?.name || '')


    const getBookList = async () => {
        // let res = await getPostsList()
        // console.log("🚀 ~ file: index.tsx ~ line 11 ~ getBookList ~ res", res)

        let a = await getList()
        console.log("🚀 ~ file: it ~ a", a)
        if (a.result === 100) {
            setName(a.data.extras.name + '-99')
        }
    }
    useEffect(() => {

        getBookList()
    }, [])



    const handleRouterTo = (path:string) => {
        router.push(path)
    }

    return <div>

        <h3>这是posts/index111111111</h3>
        <h4 >name == {name}</h4>
        {/* className={style.link} */}
        <div   onClick={() => handleRouterTo('posts/1')}>
            to /posts/1
        </div>
        <div> <Link href={'posts/3'}>to /posts/3</Link></div>
        <div>  <Link href={'posts/14'}>to /posts/14</Link></div>
        
    </div>
}


export async function getStaticProps() {
    let res = await getList()


    return {
        props: {
            list: res || {},
            noFound: true
        },

    }
}



export default Posts