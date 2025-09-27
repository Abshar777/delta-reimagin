'use client';
import AboutUs from "@/components/page-sections/aboutUs";
import Awards from "@/components/page-sections/awwards";
import Hero from "@/components/page-sections/hero";
import OurScrollingTicker from "@/components/page-sections/scrollingTicker";
import OurMission from "@/components/page-sections/ourMission";
import WhyChooseUs from "@/components/page-sections/whyChooseUs";
import CoursesSection from "@/components/page-sections/course";
import IntroVideo from "@/components/page-sections/introvideo";
import HowItWork from "@/components/page-sections/howItWork";
import OurPricing from "@/components/page-sections/pricing";
import OurFaqs from "@/components/page-sections/faq";
import OurTestimonials from "@/components/page-sections/testimonials";
import OurTeam from "@/components/page-sections/teame";


export default function Home() {

  return (
    <>
    <Hero />
    <OurScrollingTicker />
    <AboutUs />
    <Awards/>
    <OurMission/>
    <WhyChooseUs/>
    <CoursesSection/>
    <IntroVideo/>
    <HowItWork/>
    <OurPricing/>
    <OurFaqs/>
    <OurTestimonials/>
    <OurTeam/>
    </>
  );
}
