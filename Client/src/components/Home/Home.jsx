//HOOKS
import { useState, useEffect } from "react";

//COMPONENTS
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";

const Home = ()=>{
    return(
        <main>
            <Feed/>
            <Sidebar/>
        </main>
    )
}

export default Home