import React, { useEffect, useState } from "react";
import { NextPage,GetServerSideProps,GetStaticProps } from "next";
import Link from "next/link";
import { getList } from "../api/posts";
import { useRouter } from "next/router";

const Posts: NextPage = (props: any) => {
    const {  } = props
    console.log("π ~ ----------props", props)

    const [name, setName] = useState<string>('hhaha' || '')


    const getBookList = async () => {
        // let res = await getPostsList()
        // console.log("π ~ file: index.tsx ~ line 11 ~ getBookList ~ res", res)

        let a = await getList()
        console.log("π ~ file: it ~ a", a)
        if (a.result === 100) {
            setName(a.data.extras.name + '-99')
        }
    }
    useEffect(() => {

        getBookList()
    }, [])

    return <div>

        <h3>θΏζ―posts/index111111111</h3>
        <h4>name == {name}</h4>
        <h5>id=={props?.id}</h5>

    </div>
}


export  const getServerSideProps:GetServerSideProps = async(context) =>  {
    console.log("π ~ file: index.tsx ~ line 65 ~ constgetServerSideProps:GetServerSideProps=async ~ context", context)
    const { params } = context
    let res = await getList()


    return {
        props: {
            id:'119'
        },

    }
}
// export  const getStaticProps:GetStaticProps = async(context) =>  {
//     const { params } = context
//     let res = await getList()


//     return {
//         props: {
//             id:'119'
//         },

//     }
// }



export default Posts