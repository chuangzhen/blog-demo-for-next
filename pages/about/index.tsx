import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { getList } from "../api/posts";
import { useRouter } from "next/router";
// import style from "./about.module.scss";

const Posts: NextPage = (props: any) => {
    const { list = {} } = props
    const router  = useRouter()
    console.log("🚀 ~ file: index.tsx ~ line 8 ~ props", props)

    const [name, setName] = useState<string>(list?.data?.extras?.name || '')


    const getBookList = async () => {
        // let res = await getPostsList()
        // console.log("🚀 ~ file: index.tsx ~ line 11 ~ getBookList ~ res", res)

        let a = await getList()
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

       <h1>about</h1>
        
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