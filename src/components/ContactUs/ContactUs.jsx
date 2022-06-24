import React, { Component } from 'react'
import Footer from '../Header Footer/Footer'
import { Header } from '../Header Footer/Header'
import { FirstConatiner } from './FirstConatiner'
import FormPage from './Form'

export const ContactUs = () => {
    return (
        <>
        <Header active="contact"></Header>
        <FirstConatiner/>
        <FormPage/>
        <Footer/>
        </>
    )
}