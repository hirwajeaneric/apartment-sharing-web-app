import React from 'react';
import { Helmet } from 'react-helmet-async';
import CustomizedBanner from '../components/sections/CustomizedBanner';
import ContactForm from '../components/forms/ContactForm';

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us.</title>
        <meta name="description" content={`More information about ISMA.`} /> 
      </Helmet>
      <CustomizedBanner title={'Contact Us.'} subtitle={'Do you have a question, do you need support with how to use ISMA? Do not hesitate to leave us a message.'} height={'20vh'}/>
      <ContactForm />
    </>
  )
}
