import React from 'react';
import {Footer} from '../Footer/Footer';
import { Header } from '../Header Footer/Header';
import { FirstConatiner } from './FirstConatiner';
import { FourthSection } from './FourthSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';

export const AboutUs = () => {
    return (
        <>
        <div className='about-us'>
        <Header about="true"></Header>
            <FirstConatiner/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            
        </div>
        
            <Footer/>
        </>
    )
}