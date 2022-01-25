import { NextPage,GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getList } from "../api/posts";

const Posts: NextPage = (props:any) => {
    console.log("🚀 ~  props", props)
    const {id : id2} = props

    const router = useRouter()
    console.log("🚀", router)
    const { id } = router.query

    return <div>

        <h3>这是posts/[id2]-aaa1aid11={id2}</h3>
        <h3>这是posts/[id]-router-id={id}</h3>
    </div>
}

export default Posts

export async function getStaticPaths() {
    
    let res: Array<any> = await new Promise((res, rej) => {
        setTimeout(() => {
            res([{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }])
        }, 1000)
    })

    const paths = res.map((post) => ({
        //必须是params
        params: { id: [post.id] },
    }))
    return {
        //paths是一个对象数组，包含了所有要在打包时生成静态资源页面的path所对应的数据,必须是paths
        paths,
        //fallback    -false    ->找不到对应的path就返回404
        //            -blocking ->找不到打包时生成对应path的HTML,就转为服务端动态生成
        fallback: 'blocking'
    }
}

export  const getStaticProps:GetStaticProps = async(context) =>  {
    const { params } = context
    console.log("🚀 ~params-params-params-params", params)
    let res = await getList()


    return {
        props: {
            id:params?.id 
        },

    }
}