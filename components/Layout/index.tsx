import React, { useEffect ,useState} from 'react'
import { NextPage } from 'next'
import classnames from "classnames";

import styles from './layout.module.scss'
import FullBG from "../FullBG";
import CoverPage from "../CoverPage";
import NavBar from "../NavBar";


const Layout: NextPage = ({ children }) => {

    
    return <>
        <div className={classnames(styles.container_layout,styles.safe_content,styles.safe_area_lg)}>
            <CoverPage isHalf={false}></CoverPage>
            <div className={styles.layout_child_content}>
                <NavBar></NavBar>
                {children}
            </div>
        </div>
        <FullBG></FullBG>
    </>

}




export default Layout