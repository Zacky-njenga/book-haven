import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeadSpace from "@/components/HeadSpace";
import Hero from "@/components/Hero";
import NewReleases from "@/components/NewReleases";
import BestSellers from "@/components/BestSellers";
import PreOrder from "@/components/PreOrder";
import BestOf from "@/components/BestOf";
import TopBooks from "@/components/TopBooks";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  return (
      <>
        <HeadSpace/>
        <NavBar/>
        <Hero/>
        <NewReleases/>
          <BestSellers/>
          <PreOrder/>
          <BestOf/>
          <TopBooks/>
          <Slider/>
          <NavLinks/>
          <Footer/>

      </>
  );
}
