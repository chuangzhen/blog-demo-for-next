import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from './nav.module.scss'
import { useRouter } from "next/router";

const NavIndex: React.FC<any> = () => {
    //路由对象
    // const { router } = useRouter()
    const scrollInstanceRef = useRef<number>(200)
    const [showNav, setShowNav] = useState<boolean>(false)
    useEffect(() => {

        console.log(123);
        
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
            <div className={styles.nav_btn} onClick={() => {
                console.log(123);
                
            }}>Sunshine的博客</div>
            <div className={styles.nav_btn}>笔记</div>
            <div className={styles.nav_btn}>日记</div>
            <div className={styles.nav_btn}>关于我</div>
            <div style={{ flex: 1 }}></div>
            {/* <div className={styles.nav_btn}>登录</div> */}

        </div>

    </div>
}

export default NavIndex