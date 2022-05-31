import React from 'react';
import { Header } from '../Header Footer/Header';

import "./assets/index.css"
import Footer from '../Header Footer/Footer';
import { FirstConatiner } from './FirstConatiner';
import { SecondContainer } from './SecondContainer';
import { ThirdContainer } from './ThirdContainer';
import { FourthContainer } from './FourthConatiner';
import { FifthContainer } from './FifthConatiner';
import { SixthConatiner } from './SixthConatiner';
import {Hover} from '../hovereffect/Index'

export const Index = () => {
    return (
        <>
            <Header />
            <FirstConatiner />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <SixthConatiner/> 
            {/* <Hover/>    */}
            <Footer />
        </>
    )
}