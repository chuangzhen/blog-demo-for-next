import React, { useState, useEffect, useRef,useMemo } from "react";
import classnames from "classnames";
import styles from './nav.module.scss'
import { useRouter } from "next/router";

import {INavProps} from '../Layout'


const NavIndex: React.FC<{navs:Array<INavProps>}> = ({navs}) => {
    //路由对象
    const  router = useRouter()
    const scrollInstanceRef = useRef<number>(200)
    const [showNav, setShowNav] = useState<boolean>(false)
    useEffect(() => {

        
        let docEle = document.documentElement || document.body
        let ch = docEle?.clientHeight - 300 
        let clientHeight = ch > 0 ? ch : scrollInstanceRef.current
        //刷新的时候更新初始化展示状态
        handleNavShow(clientHeight,docEle.scrollTop)
        //滚动的时候更新展示状态
        window.addEventListener('scroll', () => {
            let scrollTopDis = docEle.scrollTop
            handleNavShow(clientHeight,scrollTopDis)
        })
    }, [])

    //更新导航栏展示状态函数
    const handleNavShow = (clientHeight:number,scrollTopDis:number) => {
        if ( clientHeight - scrollTopDis < 0) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }
   


    return <div className={classnames(
        styles.nav,styles.auto, showNav ? styles.show_nav : '',
    )}>
        <div className={styles.nav_content_pc}>
            {
                navs.map((i:INavProps,index:number) => {
                    return  <div key={i.key + index}  className={styles.nav_btn} onClick={() => {
                        router.push(`${i.path}`)
                    }}>{i.title}</div>
                })
            }
            <div style={{ flex: 1 }}></div>
            {/* <div className={styles.nav_btn}>登录</div> */}

        </div>

    </div>
}

export default NavIndex