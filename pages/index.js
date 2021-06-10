import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Headers/MenuHeader/Header.js";
import ContactHeader from "../components/Headers/ContactHeader/ContactHeader";
import Hero from "../components/Hero/Hero.js";
import HeroCard from "../components/Cards/HeroCard/HeroCard.js";
// import Buttons from "../components/Buttons/Buttons.js";
import FeatureSection from "../components/FeatureSection/FeatureSection.js";
import StorySection from "../components/StorySection/StorySection.js";
import Packages from "../components/Packages/Packages.js";
import Testimonials from "../components/Testimonials/Testimonials.js";
import Gallery from "../components/Gallery/Gallery.js";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/lato/Lato-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <ContactHeader />
      <Header />
      <Hero />
      <div className={styles.container}>
        <HeroCard />
        <FeatureSection />
        <StorySection />
        <Packages />
        <Testimonials />
        <Gallery />
        {/* <Buttons /> */}
      </div>
      <Footer />
    </div>
  );
}
