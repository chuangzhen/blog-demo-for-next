import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useRouter } from "next/router";

import styles from './cover.module.scss'
import {INavProps} from '../Layout'
interface IProps {
    isHalf?: boolean

    navs:Array<INavProps>
}

const NavIndex: React.FC<IProps> = (props) => {
    const { isHalf = false,navs=[] } = props

    const router = useRouter()


    return <div className={classnames(styles.cover_container, isHalf ? styles.cover_half : styles.cover_full)}>
        <p className={styles.cover_tiitle}>Sunshine的博客</p>
        <p className={styles.cover_welcome}>这里是记录的sunshine的日常及学习笔记。</p>
        <div className={styles.cover_search}>搜索模块</div>
        <div className={styles.cover_nav}>
        {
                navs.map((i:INavProps,index:number) => {
                    return  <div key={i.key + index}  className={styles.nav_btn} onClick={() => {
                        router.push(`${i.path}`)
                    }}>{i.title}</div>
                })
            }
            {/* <div className={styles.nav_btn}>友链</div> */}
        </div>

        <div className={styles.to_next}>{`》`}</div>
    </div>
}

export default NavIndex