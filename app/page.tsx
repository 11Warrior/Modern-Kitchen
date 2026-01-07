import ChooseYourPlan from "@/components/LandingPage/ChooseYourPlan";
import Footer from "@/components/LandingPage/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import TalkWithAI from "@/components/LandingPage/TalkWithAI";
import Testimonials from "@/components/LandingPage/Testimonials";
import WhatWeOffer from "@/components/LandingPage/WhatWeOffer";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUp, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-hidden  bg-background ">

      <HeroSection />
      <div className="parallax will-change-transform"  data-speed={0.01}>
        <WhatWeOffer />
      </div>
      <ChooseYourPlan />
      {/* <Testimonials /> */}
      <TalkWithAI />
      <Footer />
    </div>
  );
}
