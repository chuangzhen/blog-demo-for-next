import React, { useEffect ,useState,useMemo} from 'react'
import { NextPage } from 'next'
import classnames from "classnames";

import styles from './layout.module.scss'
import FullBG from "../FullBG";
import CoverPage from "../CoverPage";
import NavBar from "../NavBar";

type TNavShowTyoe = 'nav-top' | 'nav-mid'
export interface INavProps {
    title:string
    path:string
    key:string
    show?:Array<TNavShowTyoe>
}

const Layout: NextPage = ({ children }) => {
    const navs:Array<INavProps> = useMemo(() => {
        return [
            {
                title:'Sunshine的博客',
                key:'home',
                path:'/',
                show:[ 'nav-top' , 'nav-mid']
            },
            {
                title:'笔记',
                key:'notes',
                path:'/notes',
                show:[ 'nav-top' , 'nav-mid']
            },
            {
                title:'日记',
                key:'dairy',
                path:'/dairy',
                show:[ 'nav-top' , 'nav-mid']
            },
            {
                title:'关于我',
                key:'about',
                path:'/about',
                show:[ 'nav-top' , 'nav-mid']
            },
        ]
    },[])
    
    return <>
        <div className={classnames(styles.container_layout,styles.safe_content,styles.safe_area_lg)}>
            <CoverPage isHalf={false} navs={navs}></CoverPage>
            <div className={styles.layout_child_content}>
                <NavBar navs={navs}></NavBar>
                {children}
            </div>
        </div>
        <FullBG></FullBG>
    </>

}




export default Layout