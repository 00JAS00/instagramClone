//HOOKS
import { useState, useEffect } from "react";

//styles
import styles from './Home.module.css'

//COMPONENTS
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";

const Home = ()=>{
    return(
        <main className={styles.main}>
            <Feed/>
            <Sidebar/>
        </main>
    )
}

export default Home