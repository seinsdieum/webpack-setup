import React from 'react';
import './App.scss'
import Block from "@/components/Block/Block";
import {Outlet} from "react-router-dom";

import Svg from '@/assets/icons/equalizer_FILL1_wght400_GRAD0_opsz24.svg'
const App = () => {

    if(__PLATFORM__ === 'desktop')
        return (
            <div><h1>Desktop build</h1></div>
        )

    if(__PLATFORM__ === 'mobile')
        return (
            <div><h1>Mobile build</h1></div>
        )

    return (
        <div >
            <Block></Block>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <Svg width={100} height={100} style={{color: 'white'}}></Svg>
            </div>
            <Outlet/>
        </div>
    );
};

export default App;