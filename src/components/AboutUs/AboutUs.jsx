import React from 'react';
import Footer from '../Header Footer/Footer';
import { Header } from '../Header Footer/Header';
import { FirstConatiner } from './FirstConatiner';
import { FourthSection } from './FourthSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';

export const AboutUs = () => {
    return (
        <>
        <Header></Header>
            <FirstConatiner/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Footer/>
        </>
    )
}