import React from 'react';
import { Header } from '../Header Footer/Header';

import "../assets/Home/index.scss"
import {Footer} from '../Footer/Footer';
import { FirstConatiner } from './FirstConatiner';
import { SecondContainer } from './SecondContainer';
import { ThirdContainer } from './ThirdContainer';
import { FourthContainer } from './FourthConatiner';
import { FifthContainer } from './FifthConatiner';
import { SixthConatiner } from './SixthConatiner';
import { Banner } from './Banner';
export const Index = () => {
    
    return (
        <>
        <div>
        <Header home="true"/>
            <FirstConatiner />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <Banner/>
            <SixthConatiner/> 
            {/* <Rough/> */}
        </div>
            
            <Footer />
        </>
    )
}