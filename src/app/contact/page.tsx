import AboutUs from '@/components/page-sections/aboutUs';
import OurApproach from '@/components/page-sections/approch';
import Awards from '@/components/page-sections/awwards';
import ContactFormMap from '@/components/page-sections/contactForm';
import ContactUs from '@/components/page-sections/contactUsCard';
import OurFaqs from '@/components/page-sections/faq';
import OurInnovation from '@/components/page-sections/innovation';
import OurScrollingTicker from '@/components/page-sections/scrollingTicker';
import OurTeam from '@/components/page-sections/teame';
import OurTestimonials from '@/components/page-sections/testimonials';
import WhyChooseDelta from '@/components/page-sections/whyChooseUs';
import PageHeader from '@/components/ui/pageHeader';
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: "Contact Us | Delta International Institute",
    description: "At Delta International Institute, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
    keywords: [
      "trading academy dubai",
      "trading academy dubai",
      "best trading academy dubai",
      "best trading academy dubai",
      "best trading academy dubai",
      "best trading academy dubai",
      "delta international institute",
      "delta international institute",
      "delta international institute",
      "delta international institute bangalore",
      "delta international institute bangalore",
      "delta international institute bangalore",
    ],
    openGraph: {
      title: "Contact Us | Delta International Institute",
      description: "At Delta International Institute, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
      images: ["/our/logo.png"],
      
    },
  };

const page = () => {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact Us" />
      <OurScrollingTicker/>
      <ContactFormMap/>
      <ContactUs/>
      <OurFaqs/>
      <OurTestimonials/>
      <OurTeam/>
    </>
  )
}

export default page
