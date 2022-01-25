import React, { useEffect, useState } from "react";
import { NextPage,GetServerSideProps } from "next";
import Link from "next/link";
import { getList } from "../api/posts";
import { useRouter } from "next/router";

const Posts: NextPage = (props: any) => {



    

    return <div>
        <h2>这是article的子级路由</h2>

    <div><Link href={'/article'}>to Article</Link></div>
    </div>
}





export default Posts